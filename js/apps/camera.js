// Kamera: rasio 3:4, menampilkan video dari CONFIG.camera.video
registerApp('camera', (page) => {
  page.innerHTML = `
    <div class="cam-wrap">
      <div class="vf" id="vf"></div>
      <div class="cam-modes"><span>FOTO</span><span class="on">VIDEO</span></div>
      <div class="cam-bar">
        <div class="thumb" id="camThumb"></div>
        <button class="shutter" type="button" aria-label="Ambil"></button>
        <span class="spacer"></span>
      </div>
    </div>`;

  const vf = $('#vf', page);
  const placeholder = () => {
    vf.innerHTML = `
      <div class="vf-ph">
        ${svg('camera', { size: 40, color: '#666', sw: 1.4 })}
        <p style="margin-top:10px">Taruh video di<br><code>${esc(CONFIG.camera.video)}</code></p>
      </div>`;
  };

  if (CONFIG.camera.video) {
    const v = el('video');
    v.src = CONFIG.camera.video;
    v.poster = CONFIG.camera.poster || '';
    v.autoplay = true;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.addEventListener('error', placeholder);
    vf.appendChild(v);
    v.play?.().catch(() => {});
  } else {
    placeholder();
  }

  $('#camThumb', page).style.cssText = bgStyle(CONFIG.camera.poster, solid('#444'));
  $('.shutter', page).addEventListener('click', () => {
    vf.classList.remove('flash');
    void vf.offsetWidth;
    vf.classList.add('flash');
  });
});