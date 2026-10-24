// =====================================================================
// GALERI: foto (4 per bulan) dan video (1 per bulan)
// Foto : assets/photos/2026-MM-N.jpg (N = 1 sampai 4)
// Video: assets/video/2026-MM.mp4 (poster: assets/video/2026-MM.jpg)
// =====================================================================
const PHOTO_COLORS = ['#ffc9de', '#c3e6ff', '#ffe8a3', '#d4f7d4', '#e2d4ff', '#ffd6b8', '#cdeffa', '#fbd1d1'];

const PHOTOS = (() => {
  const list = [];
  for (let m = 1; m <= 10; m++) {
    for (let k = 0; k < 4; k++) {
      const mm = String(m).padStart(2, '0');
      const day = String(2 + k * 4 + (m % 3)).padStart(2, '0');
      const hour = String(20 + k).padStart(2, '0');
      list.push({
        type: 'photo',
        src: `assets/photos/2026-${mm}-${k + 1}.jpg`,
        color: PHOTO_COLORS[(m + k) % PHOTO_COLORS.length],
        date: `2026-${mm}-${day}T${hour}:46:00`,
      });
    }
  }
  return list;
})();

// Satu video per bulan
const VIDEOS = Array.from({ length: 10 }, (_, i) => {
  const mm = String(i + 1).padStart(2, '0');
  return {
    type: 'video',
    src: `assets/video/2026-${mm}.mp4`,
    poster: `assets/video/2026-${mm}.jpg`,
    color: '#1c1c1e',
    date: `2026-${mm}-15T20:30:00`,
  };
});