// Ikon khusus Instagram (garis tipis, mirip ikon sosial di iOS)
const IG_PATHS = {
  plus: '<path d="M12 4.5v15M4.5 12h15"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  chevDown: '<path d="M6 9.5l6 6 6-6"/>',
  check: '<path d="M6.5 12.5l3.5 3.5 7.5-8"/>',
  threads: '<path d="M16.8 9.6c-.7-2.4-2.4-3.6-4.8-3.6-3.4 0-5.5 2.2-5.5 6s2.1 6 5.5 6c2.9 0 4.8-1.7 4.8-4.3 0-2.6-1.9-3.8-5.2-3.8-1.6 0-2.6.6-2.6 1.5 0 .8.7 1.4 1.9 1.4 1.7 0 2.7-1 2.7-2.8"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1.2"/><rect x="14" y="4" width="6" height="6" rx="1.2"/><rect x="4" y="14" width="6" height="6" rx="1.2"/><rect x="14" y="14" width="6" height="6" rx="1.2"/>',
  reel: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><path d="M10.5 9.5v5l4.2-2.5z"/>',
  repost: '<path d="M4 9h13l-3-3M20 15H7l3 3"/>',
  tag: '<rect x="4" y="5" width="16" height="14.5" rx="4"/><circle cx="12" cy="11" r="2.6"/><path d="M7.6 17.4c.8-2 2.4-3 4.4-3s3.6 1 4.4 3"/>',
  home: '<path d="M4 11l8-6.5 8 6.5V19a1 1 0 01-1 1h-4.5v-5h-5v5H5a1 1 0 01-1-1z"/>',
  send: '<path d="M21 4L3.5 11l7 2.5L13 20.5z"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  play: '<path d="M8 5.5l10.5 6.5L8 18.5z"/>',
  userPlus: '<circle cx="10" cy="8" r="3.6"/><path d="M3.5 19.5c.8-3 3.4-4.6 6.5-4.6s5.7 1.6 6.5 4.6M19 8v6M16 11h6"/>',
};

function igIcon(name, size = 24, sw = 1.9, color = 'currentColor') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IG_PATHS[name] || ''}</svg>`;
}

registerApp('instagram', (page) => {
  const ig = INSTAGRAM;
  const likes = ig.posts.map(() => 100 + Math.floor(Math.random() * 101));
  const avatarStyle = bgStyle(ig.avatar, solid(PEOPLE.hanni.color));
  page.classList.add('ig-page');

  page.innerHTML = `
    <div class="ig-top">
      <span class="ig-top-ico">${igIcon('plus', 28, 1.8)}</span>
      <span class="ig-user-title">
        ${esc(ig.username)}${ig.verified ? `<span class="ig-verified">${igIcon('check', 12, 3, '#fff')}</span>` : ''}
        ${igIcon('chevDown', 16, 2.2)}
      </span>
      <span class="ig-top-ico">${igIcon('threads', 26, 1.8)}</span>
      <span class="ig-top-ico">${igIcon('menu', 26, 1.9)}</span>
    </div>

    <div class="ig-head">
      <div class="ig-avwrap">
        <div class="ig-av" style="${avatarStyle}"></div>
        ${ig.note ? `<div class="ig-note">${esc(ig.note)}</div>` : ''}
        <span class="ig-plus">${igIcon('plus', 14, 3, '#000')}</span>
      </div>
      <div class="ig-stats">
        <div><b>${ig.posts.length}</b><span>postingan</span></div>
        <div><b>${ig.followers}</b><span>pengikut</span></div>
        <div><b>${ig.following}</b><span>mengikuti</span></div>
      </div>
    </div>

    <div class="ig-name">${esc(ig.displayName)}${ig.pronouns ? `<span>${esc(ig.pronouns)}</span>` : ''}</div>
    ${ig.bioLines.map((l) => `<div class="ig-bio-line">${esc(l)}</div>`).join('')}
    ${ig.link ? `<div class="ig-link">${igIcon('link', 18, 1.8)}<span>${esc(ig.link)}</span></div>` : ''}
    ${ig.music ? `<div class="ig-music">${igIcon('play', 14, 2.2)}<b>${esc(ig.music.title)}</b><span>${esc(ig.music.artist)}</span></div>` : ''}

    <div class="ig-dash"><b>Dashboard profil</b><span>${esc(ig.dashboard)}</span></div>

    <div class="ig-btns">
      <button class="ig-btn" type="button">Edit profil</button>
      <button class="ig-btn" type="button">Bagikan profil</button>
      <button class="ig-btn sq" type="button" aria-label="Tambah teman">${igIcon('userPlus', 20, 1.8)}</button>
    </div>

    <div class="ig-hl"></div>
    <div class="ig-tabs"></div>
    <div class="ig-content"></div>
    <nav class="ig-bottom"></nav>`;

  // Highlight
  const hl = $('.ig-hl', page);
  hl.innerHTML = `
    <div class="ig-hl-item">
      <div class="ig-hl-ring new">${igIcon('plus', 26, 1.6)}</div>
      <span>Baru</span>
    </div>`;
  ig.highlights.forEach((h) => {
    const item = el('button', 'ig-hl-item');
    item.type = 'button';
    item.innerHTML = `
      <div class="ig-hl-ring"><div class="ig-hl-img" style="${bgStyle(h.src, solid(h.color))}"></div></div>
      <span>${esc(h.title)}</span>`;
    item.addEventListener('click', () => Viewer.open([{ src: h.src, color: h.color, meta: esc(h.title) }], 0));
    hl.appendChild(item);
  });

  // Grid postingan
  function renderGrid() {
    const frag = el('div');
    frag.innerHTML = `
      <div class="ig-private-note">🔒 Akun ini privat · Komentar dinonaktifkan</div>
      <div class="ig-grid"></div>`;
    const grid = $('.ig-grid', frag);
    ig.posts.forEach((p, i) => {
      const c = el('button', 'ig-cell');
      c.type = 'button';
      c.setAttribute('aria-label', 'Postingan Instagram');
      c.style.cssText = bgStyle(p.src, solid(p.color));
      c.addEventListener('click', () => {
        Viewer.open(ig.posts.map((q, j) => ({
          src: q.src,
          color: q.color,
          meta: `♡ ${likes[j]} suka · Komentar dinonaktifkan`,
        })), i);
      });
      grid.appendChild(c);
    });
    return frag;
  }

  // Tab: grid aktif, tab lain kosong
  const TABS = [['grid', 'grid'], ['reel', 'reel'], ['repost', 'repost'], ['tag', 'tag']];
  const tabsEl = $('.ig-tabs', page);
  const content = $('.ig-content', page);

  function showTab(key) {
    $$('.ig-tab', tabsEl).forEach((b) => b.classList.toggle('on', b.dataset.key === key));
    content.innerHTML = '';
    if (key === 'grid') content.appendChild(renderGrid());
    else content.innerHTML = '<div class="ig-empty">Belum ada yang ditampilkan di sini.</div>';
  }

  TABS.forEach(([key, icon]) => {
    const b = el('button', 'ig-tab');
    b.type = 'button';
    b.dataset.key = key;
    b.innerHTML = igIcon(icon, 26, 1.8);
    b.addEventListener('click', () => showTab(key));
    tabsEl.appendChild(b);
  });
  showTab('grid');

  // Navigasi bawah (dekoratif, ikon profil di kanan)
  $('.ig-bottom', page).innerHTML = `
    <span class="ig-nav-btn">${igIcon('home', 28, 1.9)}</span>
    <span class="ig-nav-btn">${igIcon('reel', 28, 1.9)}</span>
    <span class="ig-nav-btn">${igIcon('send', 28, 1.9)}</span>
    <span class="ig-nav-btn">${igIcon('search', 28, 1.9)}</span>
    <span class="ig-nav-btn"><span class="ig-me-av" style="${avatarStyle}"></span></span>`;
});