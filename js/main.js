// Titik masuk: menyalakan semua bagian dan menangani keyboard.
function boot() {
  $('#wpLock').style.cssText = bgStyle(CONFIG.wallpapers.lock, CONFIG.wallpaperFallback.lock);
  $('#wpHome').style.cssText = bgStyle(CONFIG.wallpapers.home, CONFIG.wallpaperFallback.home);

  initLock();
  tick();
  setInterval(tick, 10000);

  renderCalendar();
  renderWeather();
  setInterval(renderWeather, 15 * 60 * 1000);
  renderHome();

  Screen.show('lock');
}

document.addEventListener('keydown', (e) => {
  if (Viewer.isOpen()) {
    if (e.key === 'Escape') Viewer.close();
    else if (e.key === 'ArrowRight') Viewer.step(1);
    else if (e.key === 'ArrowLeft') Viewer.step(-1);
    return;
  }
  if (Screen.current() === 'passcode') {
    if (/^\d$/.test(e.key)) Passcode.press(e.key);
    else if (e.key === 'Backspace') Passcode.del();
    else if (e.key === 'Escape') Passcode.cancel();
    return;
  }
  if (e.key === 'Escape' && Router.isOpen()) Router.back();
});

boot();