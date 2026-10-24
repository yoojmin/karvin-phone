// =====================================================================
// APLIKASI LINE: daftar chat, ruang chat, foto, dan panggilan
// =====================================================================

// ----- Waktu & urutan pesan -----
const tOf = (m) => new Date(m.time).getTime();

// Pesan diurutkan berdasarkan waktu (yang lama di atas, yang baru di bawah)
function sortedMsgs(chat) {
  return [...chat.messages].sort((a, b) => tOf(a) - tOf(b));
}

// Pesan paling baru dalam chat
function lastMsgOf(chat) {
  const s = sortedMsgs(chat);
  return s[s.length - 1];
}

// Waktu untuk pesan baru: sekarang, tetapi tidak pernah lebih awal dari pesan terakhir.
// Dengan begitu pesan baru selalu muncul di bawah.
function nextTime(chat) {
  const last = lastMsgOf(chat);
  const now = Date.now();
  const t = last ? Math.max(now, tOf(last) + 1000) : now;
  return new Date(t).toISOString();
}

// ----- Ikon & format panggilan -----
const PHONE_PATH = '<path d="M5 4.5h3l1.5 4-2 1.5a11 11 0 006.5 6.5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.5 1.5A16 16 0 013.5 6 1.5 1.5 0 015 4.5z"/>';
const phoneIcon = (color, size = 18) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PHONE_PATH}</svg>`;

// Durasi dalam detik → "47 min 12 sec"
const fmtDur = (s) => `${Math.floor(s / 60)} min ${s % 60} sec`;

// Warna, judul, dan keterangan tiap jenis panggilan
function callInfo(m) {
  const outgoing = m.from === 'hanni';
  if (m.status === 'answered') {
    return {
      color: outgoing ? '#0a84ff' : '#34c759',
      title: 'Audio Call',
      sub: fmtDur(m.duration),
      label: outgoing ? 'Panggilan keluar' : 'Panggilan masuk',
    };
  }
  return {
    color: '#ff3b30',
    title: outgoing ? 'Audio Call' : 'Missed Audio Call',
    sub: 'Tidak dijawab',
    label: outgoing ? 'Panggilan keluar tak terjawab' : 'Panggilan masuk tak terjawab',
  };
}

// ----- Pratinjau pesan di daftar chat -----
function msgPreview(m) {
  if (m.type === 'photo') return '📷 Foto';
  if (m.type === 'call') return `📞 ${callInfo(m).title}`;
  return m.text;
}

function lastPreview(chat) {
  const last = lastMsgOf(chat);
  if (!last) return '';
  const prefix = last.from === 'hanni' ? 'Kamu: ' : (chat.group ? `${PEOPLE[last.from]?.name || ''}: ` : '');
  return prefix + msgPreview(last);
}

// ----- Hitung pesan belum dibaca (dari lawan bicara, read: false) -----
function unreadOf(c) {
  return c.messages.filter((m) => m.from !== 'hanni' && !m.read).length;
}

// Memperbarui badge merah di ikon LINE pada home screen
function updateLineBadge() {
  const total = LINE_CHATS.reduce((sum, c) => sum + unreadOf(c), 0);
  const b = document.querySelector('.app-icon[data-app="line"] .app-badge');
  if (!b) return;
  b.textContent = total;
  b.style.display = total ? 'grid' : 'none';
}

// ----- Daftar chat (urut: chat terbaru di atas) -----
registerApp('line', (page, api) => {
  const list = el('div', 'line-list');
  const sorted = [...LINE_CHATS].sort((a, b) => {
    const ta = lastMsgOf(a) ? tOf(lastMsgOf(a)) : 0;
    const tb = lastMsgOf(b) ? tOf(lastMsgOf(b)) : 0;
    return tb - ta;
  });

  sorted.forEach((c) => {
    const last = lastMsgOf(c);
    const n = unreadOf(c);
    const row = el('button', 'chat-row');
    row.type = 'button';
    row.innerHTML = `
      <div class="chat-av" style="${bgStyle(c.avatar, solid(c.color))}"></div>
      <div class="grow">
        <div class="chat-name">${esc(c.name)}${c.group ? ` <span class="gcount">${c.members.length + 1}</span>` : ''}</div>
        <div class="chat-last">${esc(lastPreview(c))}</div>
      </div>
      <div class="chat-meta">
        <span class="chat-time">${last ? shortDay(last.time) : ''}</span>
        ${n ? `<span class="badge">${n}</span>` : ''}
      </div>`;
    row.addEventListener('click', () => openChat(api, c));
    list.appendChild(row);
  });
  page.appendChild(list);

  // Dibuka dari notifikasi lockscreen: langsung masuk ke chat yang dipilih
  if (typeof PENDING_CHAT !== 'undefined' && PENDING_CHAT) {
    const target = LINE_CHATS.find((c) => c.id === PENDING_CHAT);
    PENDING_CHAT = null;
    if (target) openChat(api, target);
  }
});

// Membuka chat: pesan lawan bicara ditandai sudah dibaca, lalu badge diperbarui
function openChat(api, c) {
  c.messages.forEach((m) => { if (m.from !== 'hanni') m.read = true; });
  updateLineBadge();
  api.push(c.name, (p) => renderChat(p, c));
}

// ----- Foto layar penuh (memakai Viewer). Chat tidak digambar ulang, jadi scroll tetap. -----
function openPhoto(m, idx) {
  Viewer.open(
    m.photos.map((p) => ({ src: p.src, color: p.color, meta: esc(dayLabel(m.time)) })),
    idx
  );
}

// ----- Detail panggilan (overlay di dalam halaman chat) -----
function showCallDetail(page, m) {
  const info = callInfo(m);
  const ov = el('div', 'call-detail');
  ov.innerHTML = `
    <div class="cd-top"><button class="cd-close" type="button">‹ Kembali ke chat</button></div>
    <div class="cd-card">
      <div class="cd-icon" style="background:${info.color}">${phoneIcon('#fff', 28)}</div>
      <div class="cd-title">${info.title}</div>
      <div class="cd-sub">${info.label}</div>
      <div class="cd-rows">
        <div><span>Tanggal</span><b>${dayLabel(m.time)}</b></div>
        <div><span>Waktu</span><b>${hm(m.time)}</b></div>
        <div><span>Durasi</span><b>${m.status === 'answered' ? fmtDur(m.duration) : '—'}</b></div>
      </div>
    </div>`;
  $('.cd-close', ov).addEventListener('click', () => ov.remove());
  page.appendChild(ov);
}

// ----- Isi pesan: teks, foto, atau panggilan -----
function contentHtml(m) {
  if (m.type === 'photo') {
    const cls = m.photos.length > 1 ? 'n2' : 'n1';
    const stack = `<div class="photo-stack ${cls}">${m.photos.map((p, j) =>
      `<div class="chat-photo" role="button" tabindex="0" data-j="${j}" aria-label="Buka foto"
        style="background-color:${p.color};background-image:url('${p.src}');"></div>`).join('')}</div>`;
    return m.caption
      ? `<div class="photo-wrap">${stack}<div class="bubble">${esc(m.caption)}</div></div>`
      : stack;
  }
  if (m.type === 'call') {
    const info = callInfo(m);
    return `<button class="call-card" type="button">
      <span class="call-ico" style="background:${info.color}">${phoneIcon('#fff', 18)}</span>
      <span class="call-txt"><b style="color:${info.color}">${info.title}</b><span>${info.sub}</span></span>
    </button>`;
  }
  return `<div class="bubble">${esc(m.text)}</div>`;
}

function bindContent(row, m, page) {
  row.querySelectorAll('.chat-photo').forEach((b) =>
    b.addEventListener('click', () => openPhoto(m, Number(b.dataset.j))));
  const card = row.querySelector('.call-card');
  if (card) card.addEventListener('click', () => showCallDetail(page, m));
}

// ----- Ruang chat (pesan diurutkan berdasarkan waktu) -----
function renderChat(page, chat) {
  page.classList.add('chat-page');
  const msgs = el('div', 'msgs');
  const bar = el('div', 'inputbar');
  bar.innerHTML = `
    <input type="text" placeholder="Ketik pesan" aria-label="Ketik pesan" autocomplete="off">
    <button class="send" type="button">Kirim</button>`;
  page.append(msgs, bar);
  const input = $('input', bar);

  const nameOf = (k) => PEOPLE[k]?.name || k;
  const avatarOf = (k) => PEOPLE[k]?.avatar || '';
  const colorOf = (k) => PEOPLE[k]?.color || '#ddd';

  function draw() {
    msgs.innerHTML = '';
    const list = sortedMsgs(chat);
    const lastOwn = list.reduce((acc, m, i) => (m.from === 'hanni' ? i : acc), -1);

    list.forEach((m, i) => {
      const prev = list[i - 1];
      if (!prev || !sameDay(prev.time, m.time)) msgs.appendChild(el('div', 'day-sep', dayLabel(m.time)));

      const me = m.from === 'hanni';
      const cont = !!prev && prev.from === m.from && sameDay(prev.time, m.time);
      const row = el('div', 'msg-row' + (me ? ' me' : ''));

      const readTxt = me && i === lastOwn ? `<div class="read">${m.read ? 'Dibaca' : 'Terkirim'}</div>` : '';
      const meta = `<div class="meta">${readTxt}<div>${hm(m.time)}</div></div>`;
      const content = contentHtml(m);

      if (me) {
        row.innerHTML = `<div class="pair">${meta}${content}</div>`;
      } else {
        row.innerHTML = `
          <div class="mini-av ${cont ? 'ghost' : ''}" style="${bgStyle(avatarOf(m.from), solid(colorOf(m.from)))}"></div>
          <div class="col">
            ${chat.group && !cont ? `<div class="sender">${esc(nameOf(m.from))}</div>` : ''}
            <div class="pair">${content}${meta}</div>
          </div>`;
      }
      bindContent(row, m, page);
      msgs.appendChild(row);
    });
    msgs.scrollTop = msgs.scrollHeight;
  }

  function send() {
    const text = input.value.trim();
    if (!text) return;
    chat.messages.push({ from: 'hanni', text, time: nextTime(chat), read: false });
    input.value = '';
    draw();

    // Pesan Hanni ditandai "Dibaca" setelah sebentar
    setTimeout(() => {
      chat.messages.forEach((m) => { if (m.from === 'hanni') m.read = true; });
      draw();
    }, 1200);

    // Balasan otomatis Karel
    if (chat.id === 'minji' && MINJI_AUTO_REPLIES.length) {
      setTimeout(() => {
        const t = MINJI_AUTO_REPLIES[Math.floor(Math.random() * MINJI_AUTO_REPLIES.length)];
        chat.messages.push({ from: 'minji', text: t, time: nextTime(chat), read: true });
        draw();
      }, 2200);
    }
  }

  $('.send', bar).addEventListener('click', send);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
  draw();
}