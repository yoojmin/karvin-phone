// =====================================================================
// CHAT WINAY–KAREL (Annoying Neighbours AU)
// Berawal bermusuhan karena Maxwell (anjing Winay) selalu masuk kamar Karel
// → gengsi, saling suka, tapi masih ribut soal anjing
// =====================================================================
const CHAT_MINJI = {
  id: 'minji',
  name: "Karel's😡",
  group: false,
  unread: 3,
  avatar: CONFIG.profile.minji,
  color: PEOPLE.minji.color,
  messages: [

    // ========== AWAL MUSUH (Maxwell masuk kamar) ==========
    {
      from: 'minji',
      time: '2026-07-16T22:40:00',
      text: 'woii anjing siapa ini berak depan pintu kamar orang',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-16T22:41:00',
      text: 'duh mana lucu pake dot segala',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-16T22:45:00',
      text: 'Bentar maxwell kemana ya kok ga ada di kamar',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-16T22:46:00',
      text: 'ada yang tau maxwell ga kalian',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-16T22:48:00',
      text: 'Kayak ga asing, jangan-jangan anjing yang berak depan kamar gue lagi',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-16T22:50:00',
      text: 'Siapapun yang nemuin anjing ini gue kasih bonus deh serius, soalnya dia kesayangan gue',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-16T22:52:00',
      text: 'Ini dia di depan pintu gue lagi. Ambil sekarang juga sebelum gue bawa ke satpam.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-16T22:53:00',
      text: 'Lahhh iya kunci masih ada di pintu 😭 maaf banget Kak',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-16T22:54:00',
      text: 'Maxwell jangan nakal dong sama tetangga 😭',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-16T22:55:00',
      text: 'Bukan “jangan nakal”. Ini udah keempat kalinya minggu ini.',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-16T22:56:00',
      text: 'Kamar gue bukan playground dia.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-16T22:58:00',
      text: 'Iya iya maaf 😭 gue ambil sekarang',
      read: true
    },

    // ========== RIBUT BERULANG ==========
    {
      from: 'minji',
      time: '2026-07-20T07:12:00',
      text: 'Lagi. Depan pintu gue.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-20T07:15:00',
      text: 'HAH lagi??? gue sumpah udah dikunci',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-20T07:16:00',
      text: 'Dia masuk lewat celah bawah. Anjing lo pintar banget buat ngeselin.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-20T07:18:00',
      text: 'Maxwell mah cuma sayang Kak Karel kali 🙄',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-20T07:19:00',
      text: 'Jangan bilang gitu.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-20T07:20:00',
      text: 'Kenapa? beneran dia selalu ke kamar Kak',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-20T07:21:00',
      text: 'Karena lo ga pernah nutup pintu beneran.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-07-20T07:22:00',
      text: 'Iya salah gue 😭 nanti gue beliin hadiah buat Kak minta maaf',
      read: true
    },
    {
      from: 'minji',
      time: '2026-07-20T07:23:00',
      text: 'Ga usah. Cukup ajarin dia di rumah aja.',
      read: true
    },

    // ========== KAREL MULAI LEMBUT (tapi gengsi) ==========
    {
      from: 'minji',
      time: '2026-08-03T21:40:00',
      text: 'Maxwell tidur di sofa gue.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-03T21:42:00',
      text: 'HAH? kok bisa masuk lagi',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-03T21:43:00',
      text: 'Gue ga sempet usir. Udah kelewat nyenyak.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-03T21:44:00',
      text: 'Kak Karel baik banget sih 🥹',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-03T21:45:00',
      text: 'Bukan baik. Males ribut.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-03T21:46:00',
      text: 'Iya iya “males ribut” 😏',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-03T21:47:00',
      text: 'Jangan senyum-senyum di chat.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-03T21:48:00',
      text: 'Kak ga liat muka gue 😭',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-03T21:49:00',
      text: 'Gue bisa ngerasain.',
      read: true
    },

    // ========== Saling kepikiran ==========
    {
      from: 'hanni',
      time: '2026-08-18T23:10:00',
      text: 'Kak Karel belum tidur?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-18T23:14:00',
      text: 'Baru pulang. Kenapa?',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-18T23:15:00',
      text: 'Maxwell lagi di depan pintu Kak lagi… maaf',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-18T23:16:00',
      text: 'Gue buka aja. Biar dia masuk.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-18T23:17:00',
      text: 'Serius???',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-18T23:18:00',
      text: 'Daripada dia nunggu di koridor kedinginan.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-18T23:19:00',
      text: 'Kak…',
      read: true
    },
    {
      from: 'minji',
      time: '2026-08-18T23:20:00',
      text: 'Jangan bilang apa-apa. Gue cuma kasihan sama anjinya, bukan sama lo.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-08-18T23:21:00',
      text: 'Iya 🥺 “kasihan sama anjinya”',
      read: true
    },

    // ========== Gengsi tapi sayang ==========
    {
      from: 'minji',
      time: '2026-09-05T19:30:00',
      text: 'Lo lagi di mana?',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-05T19:32:00',
      text: 'Toko. Kenapa Kak?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-05T19:33:00',
      text: 'Maxwell di kamar gue. Bawa makanan dia.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-05T19:34:00',
      text: 'Kak Karel jadi babysitter resmi ya sekarang 😭',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-05T19:35:00',
      text: 'Ga. Dia yang maksa.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-05T19:36:00',
      text: 'Makasih ya Kak… beneran',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-05T19:38:00',
      text: 'Iya. Cepat pulang.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-05T19:39:00',
      text: 'Iya Kak 🤍',
      read: true
    },

    // ========== Hampir jujur ==========
    {
      from: 'hanni',
      time: '2026-09-22T22:10:00',
      text: 'Kak, jujur… Kak sebal banget ya sama gue?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-22T22:15:00',
      text: 'Dulu iya.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-22T22:16:00',
      text: 'Sekarang?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-22T22:20:00',
      text: 'Sekarang… ribet.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-22T22:21:00',
      text: 'Ribet gimana?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-22T22:23:00',
      text: 'Setiap lo minta maaf gue malah ga bisa marah.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-22T22:24:00',
      text: '…',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-22T22:25:00',
      text: 'Jangan bikin gue bilang lebih dari itu.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-22T22:26:00',
      text: 'Gue juga… ribet sama Kak.',
      read: true
    },
    {
      from: 'minji',
      time: '2026-09-22T22:28:00',
      text: 'Tidur. Besok lo bawa Maxwell ke gue lagi pasti.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-09-22T22:29:00',
      text: 'Hehe iya Kak 🤍',
      read: true
    },


    // ========== Oktober — masih gengsi tapi udah jelas ==========
    {
      from: 'hanni',
      time: '2026-10-05T20:10:00',
      text: 'Kak Karel',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-05T20:14:00',
      text: 'Apa.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-05T20:15:00',
      text: 'Maxwell kangen kamar Kak',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-05T20:16:00',
      text: 'Bilang aja lo yang kangen.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-05T20:17:00',
      text: 'HAH',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-05T20:18:00',
      text: 'Bercanda.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-05T20:19:00',
      text: '…ga lucu',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-05T20:20:00',
      text: 'Iya. Bawa dia ke sini aja. Sofa kosong.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-05T20:21:00',
      text: 'Kak baik banget akhir-akhir ini',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-05T20:22:00',
      text: 'Jangan biasa. Besok gue bisa marah lagi.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-05T20:23:00',
      text: 'Iya Kak 🤍',
      read: true
    },

    // ========== Malam yang hampir jujur ==========
    {
      from: 'minji',
      time: '2026-10-12T23:40:00',
      text: 'Masih bangun?',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:42:00',
      text: 'Iya Kak kenapa?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:43:00',
      text: 'Maxwell lagi di sini. Lo mau ambil sekarang atau besok pagi?',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:44:00',
      text: 'Besok aja gapapa?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:45:00',
      text: 'Gapapa. Dia udah tidur di selimut gue.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:46:00',
      text: 'Kak… itu selimut Kak',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:47:00',
      text: 'Iya. Gue yang kasih.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:48:00',
      text: 'Dulu Kak bilang kamar Kak bukan playground',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:50:00',
      text: 'Dulu.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:51:00',
      text: 'Sekarang?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:53:00',
      text: 'Sekarang… dia boleh. Asal lo juga kadang mampir.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:54:00',
      text: '…',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:55:00',
      text: 'Bercanda. Tidur.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:56:00',
      text: 'Kak gengsi banget 😭',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:57:00',
      text: 'Iya. Gue gengsi. Lo juga. Jadi diam aja.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-12T23:58:00',
      text: 'Iya Kak… selamat malam',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-12T23:59:00',
      text: 'Selamat malam, Winay.',
      read: true
    },

    // ========== Hampir bilang sayang ==========
    {
      from: 'hanni',
      time: '2026-10-18T18:20:00',
      text: 'Kak hari ini Maxwell di kamar Kak berapa jam?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-18T18:25:00',
      text: 'Dari siang. Kenapa?',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-18T18:26:00',
      text: 'Ga kenapa-kenapa… cuma nanya',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-18T18:28:00',
      text: 'Lo kangen dia atau kangen kamar gue?',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-18T18:29:00',
      text: 'Kak!!!',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-18T18:30:00',
      text: 'Jawab.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-18T18:32:00',
      text: '…dua-duanya',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-18T18:34:00',
      text: 'Hmph.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-18T18:35:00',
      text: 'Itu “hmph” apa arti?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-18T18:37:00',
      text: 'Artinya lo boleh ke sini. Bawa makanan anjingnya. Atau buat lo juga, terserah.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-18T18:38:00',
      text: 'Kak Karel…',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-18T18:39:00',
      text: 'Jangan bilang “makasih” mulu. Cepat datang aja.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-18T18:40:00',
      text: 'Iya 🤍',
      read: true
    },

    // ========== Akhir — tetap gengsi tapi cinta ==========
    {
      from: 'minji',
      time: '2026-10-21T21:10:00',
      text: 'Winay.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:12:00',
      text: 'Ya Kak?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:13:00',
      text: 'Besok jangan lupa kunci pintu.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:14:00',
      text: 'Biar Maxwell ga masuk?',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:16:00',
      text: 'Biar lo yang datang sendiri. Bukan cuma anjinya.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:17:00',
      text: '…',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:18:00',
      text: 'Gue ga bilang apa-apa. Lo yang denger sendiri.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:19:00',
      text: 'Gue denger kok Kak',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:20:00',
      text: 'Bagus.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:21:00',
      text: 'Kak gengsi banget sampe sekarang',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:22:00',
      text: 'Iya. Gue gengsi. Tapi lo tetep di sini.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:23:00',
      text: 'Iya… gue tetep di sini',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:24:00',
      text: 'Jangan hilang.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:25:00',
      text: 'Ga akan Kak 🤍',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:26:00',
      text: '…baiklah.',
      read: true
    },
    {
      from: 'minji',
      time: '2026-10-21T21:27:00',
      text: 'Selamat malam.',
      read: true
    },
    {
      from: 'hanni',
      time: '2026-10-21T21:28:00',
      text: 'Selamat malam, Kak Karel',
      read: true
    },

    // ========== Sekarang (lockscreen) ==========
    {
      from: 'minji',
      time: '2026-10-22T15:02:00',
      text: 'Winay.',
      read: false,
      notify: true
    },
    {
      from: 'minji',
      time: '2026-10-22T15:02:30',
      text: 'Maxwell di kamar gue lagi.',
      read: false,
      notify: true
    },
    {
      from: 'minji',
      time: '2026-10-22T15:03:00',
      text: 'Ambil sebelum gue bawa tidur bareng.',
      read: false,
      notify: true
    },
  ],
};

// Balasan acak Karel saat Winay kirim pesan
const MINJI_AUTO_REPLIES = [
  'Maxwell lagi di sini.',
  'Jangan bilang maaf mulu.',
  'Cepat pulang.',
  'Gue ga marah… kali ini.',
  'Anjing lo terlalu nyaman di kamar gue.',
  'Ribet.',
  'Iya iya.',
];

// Pesan yang muncul di lockscreen (satu per satu)
const LOCK_TEXTS = [
  'Winay.',
  'Maxwell di kamar gue lagi.',
  'Ambil sebelum gue bawa tidur bareng.',
];
