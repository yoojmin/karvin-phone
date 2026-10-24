// Pengatur layar: lockscreen, keypad PIN, dan bubble notifikasi.
// Chat yang akan dibuka di LINE setelah PIN benar (diisi saat bubble diketuk).
let PENDING_CHAT = null;

const Screen = (() => {
  const layers = { lock: 'lockScreen', passcode: 'passcode', home: 'home' };
  let current = 'lock';
  function show(name) {
    current = name;
    for (const [key, id] of Object.entries(layers))
      $('#' + id).classList.toggle('active', key === name);
    $('#wpLock').classList.toggle('active', name !== 'home');
    $('#wpLock').classList.toggle('blurred', name === 'passcode');
    $('#wpHome').classList.toggle('active', name === 'home');
  }
  return { show, current: () => current };
})();

function unlock() {
  $('#notifStack').innerHTML = ''; // bubble dibersihkan saat unlock
  Screen.show('home');
  if (PENDING_CHAT) {
    // Tunggu transisi home selesai, lalu buka LINE langsung di chat yang dipilih
    setTimeout(() => Router.open('line'), 400);
  }
}

function toPasscode() {
  if (Screen.current() === 'lock') Screen.show('passcode');
}

const Passcode = (() => {
  const LETTERS = { 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ' };
  const LAYOUT = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'];
  const N = CONFIG.pin.length;
  const dotsEl = $('#pcDots');
  const keysEl = $('#pcKeys');
  let input = '';
  let busy = false;

  function build() {
    dotsEl.innerHTML = Array.from({ length: N }, () => '<span class="pc-dot"></span>').join('');
    keysEl.innerHTML = '';
    LAYOUT.forEach((k) => {
      if (k === '') { keysEl.appendChild(el('span', 'pc-spacer')); return; }
      const b = el('button', k === 'del' ? 'pc-key pc-del' : 'pc-key');
      b.type = 'button';
      b.setAttribute('aria-label', k === 'del' ? 'Hapus' : k);
      b.innerHTML = k === 'del'
        ? svg('back', { size: 28, color: '#fff', sw: 1.8 })
        : `<span class="pc-num">${k}</span><span class="pc-letters">${LETTERS[k] || ''}</span>`;
      b.addEventListener('click', () => (k === 'del' ? del() : press(k)));
      keysEl.appendChild(b);
    });
  }

  const paint = () => $$('.pc-dot', dotsEl).forEach((d, i) => d.classList.toggle('filled', i < input.length));
  const vibrate = (p) => { if (navigator.vibrate) navigator.vibrate(p); };

  function reset() {
    input = '';
    dotsEl.classList.remove('ok', 'shake');
    paint();
  }

  async function check() {
    busy = true;
    if (input === CONFIG.pin) {
      dotsEl.classList.add('ok');
      await wait(280);
      reset();
      busy = false;
      unlock();
    } else {
      dotsEl.classList.add('shake');
      vibrate([40, 60, 40]);
      await wait(480);
      reset();
      busy = false;
    }
  }

  function press(d) {
    if (busy || input.length >= N) return;
    input += d;
    paint();
    if (input.length === N) check();
  }

  function del() {
    if (busy) return;
    input = input.slice(0, -1);
    paint();
  }

  function cancel() {
    reset();
    Screen.show('lock');
  }

  build();
  $('#pcCancel').addEventListener('click', cancel);
  return { press, del, cancel };
})();

// Membuat satu bubble notifikasi dari sebuah pesan LINE.
// Saat diketuk, layar meminta PIN, lalu LINE terbuka di chat tersebut.
// Membuat satu bubble notifikasi dari pesan LINE yang baru muncul
function makeNotifBubble(msg) {
  const b = el('button', 'notif');
  b.type = 'button';
  b.innerHTML = `
    <div class="notif-av" style="${bgStyle(CHAT_MINJI.avatar, solid(CHAT_MINJI.color))}"></div>
    <div class="notif-body">
      <div class="notif-row"><b>${esc(CHAT_MINJI.name)}</b><span>${hm(msg.time)}</span></div>
      <div class="notif-msg">${esc(msg.text)}</div>
    </div>`;
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    PENDING_CHAT = CHAT_MINJI.id;
    toPasscode();
  });
  return b;
}

// Menampilkan pesan lockscreen satu per satu. Setiap pesan langsung masuk ke chat Minji dengan waktu sekarang.
function initLock() {
  const stack = $('#notifStack');
  const texts = LOCK_TEXTS;
  const gap = LOCK_NOTIFICATION.delayBetweenMs;

  let i = 0;
  const showNext = () => {
    if (Screen.current() !== 'lock' || i >= texts.length) return;
    const msg = { from: 'minji', time: nextTime(CHAT_MINJI), text: texts[i], read: false };
    CHAT_MINJI.messages.push(msg);
    updateLineBadge();

    const b = makeNotifBubble(msg);
    stack.appendChild(b);
    requestAnimationFrame(() => requestAnimationFrame(() => b.classList.add('show')));
    i++;
    if (i < texts.length) setTimeout(showNext, gap);
  };
  setTimeout(showNext, CONFIG.notificationDelayMs);

  const lock = $('#lockScreen');
  let startY = null;
  lock.addEventListener('pointerdown', (e) => { startY = e.clientY; });
  lock.addEventListener('pointerup', (e) => {
    if (startY !== null && startY - e.clientY > 60) toPasscode();
    startY = null;
  });
  lock.addEventListener('click', toPasscode);
}
function tick() {
  const d = new Date();
  const t = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  $('#statusTime').textContent = t;
  $('#lockTime').textContent = t;
  $('#lockDate').textContent = d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
}