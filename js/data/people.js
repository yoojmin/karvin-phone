// Nama dan warna tiap karakter (dipakai saat foto belum ada).
const PEOPLE = {
  hanni:    { name: 'Winay',    avatar: CONFIG.profile.hanni,    color: '#ffb3c6' },
  minji:    { name: 'Karel',    avatar: CONFIG.profile.minji,    color: '#b3c7ff' },
  haerin:   { name: 'Ningning', avatar: CONFIG.profile.haerin,   color: '#c8f0d8' },
  hyein:    { name: 'Kak Aeri', avatar: CONFIG.profile.hyein,    color: '#e6c8ff' },
};

// Pengaturan notifikasi lockscreen.
// Isi bubble diambil dari chat LINE yang punya `notify: true` (lihat js/data/line/minji.js).
const LOCK_NOTIFICATION = {
  time: 'sekarang',
  delayBetweenMs: 2000,
};
