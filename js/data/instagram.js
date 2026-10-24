// =====================================================================
// PROFIL INSTAGRAM WINAY. Semua teks & foto bisa diganti di sini.
// Foto yang dipakai: assets/instagram/ dan assets/profile/winay.jpg
// =====================================================================
const INSTAGRAM = {
  username: 'winay',
  displayName: 'Winay ❄️',
  pronouns: '',
  verified: false,

  // Bubble catatan di atas foto profil (kosongkan '' jika tidak mau)
  note: 'hellaw ',

  avatar: CONFIG.profile.hanni,

  bioLines: [
    'living quietly in seoul',
    'managing days & soft nights',
  ],

  link: 'winay.aespa',

  // Pill musik di bawah bio (kosongkan null jika tidak mau)
  music: { title: 'Love U Like That', artist: 'Lauv' },

  dashboard: '4,6 rb penayangan dalam 30 hari terakhir',

  followers: 456,
  following: 32,

  // 4 postingan. Likes 100–200 diacak otomatis saat dibuka.
  posts: [
    { src: 'assets/instagram/post-1.jpg', color: '#000000' },
    { src: 'assets/instagram/post-2.jpg', color: '#000000' },
    { src: 'assets/instagram/post-3.jpg', color: '#000000' },
    { src: 'assets/instagram/post-4.jpg', color: '#000000' },
  ],

  // Highlight (lingkaran di bawah tombol edit)
  highlights: [
    { title: 'her', src: 'assets/instagram/highlight-1.jpg', color: '#000000' },
    { title: 'home', src: 'assets/instagram/highlight-2.jpg', color: '#000000' },
    { title: 'millly mia', src: 'assets/instagram/highlight-3.jpg', color: '#ab8a54' },
  ],
};

// =====================================================================
// HELPER RENDER BIO INSTAGRAM
// Fungsi ini mengubah baris teks bio menjadi HTML & mewarnai @mention jadi biru
// =====================================================================
function renderBioLines(lines) {
  return lines.map((line) => {
    // Escaping teks biasa dulu agar aman
    const safeLine = esc(line);
    // Mengubah kata berawalan @ menjadi teks berwarna biru (Instagram Blue)
    return safeLine.replace(/@([a-zA-Z0-9_.]+)/g, '<span style="color: #00376b; font-weight: 500;">@$1</span>');
  }).join('<br>');
}