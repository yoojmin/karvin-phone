// =====================================================================
// PENGATURAN UTAMA. Ganti path foto/wallpaper/video di sini.
// =====================================================================
const CONFIG = {
  pin: '1111',
  notificationDelayMs: 5000,

  wallpapers: {
    lock: 'assets/wallpapers/wp-winay.jpg',
    home: 'assets/wallpapers/home.jpg',
  },
  wallpaperFallback: {
    lock: 'linear-gradient(160deg,#2b1d3a,#6d4c7d 50%,#f2c6d6)',
    home: 'linear-gradient(160deg,#1d2b3a,#4c6d7d 50%,#d6f2e8)',
  },

  profile: {
    minji: 'assets/profile/karel.jpg',
    haerin: 'assets/profile/ningning.jpg',
    hyein: 'assets/profile/aeri.jpg',
    hanni: 'assets/profile/winay.jpg',   // Winay (Winter)
  },

  camera: {
    video: 'assets/video/camera-video.mp4',
    poster: 'assets/video/poster.jpg',
  },

  weather: { lat: 37.5665, lon: 126.9780, label: 'Seoul' },
  wifi: 'winay ❄️',
};
