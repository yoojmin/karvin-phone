// =====================================================================
// CHAT WINAY–KAK AERI
// Aeri curhat suka Ningning, tapi Ningning menggantung perasaannya
// =====================================================================
const CHAT_HYEIN = {
  id: 'hyein',
  name: 'Kak Aeri',
  group: false,
  unread: 1,
  avatar: CONFIG.profile.hyein,
  color: PEOPLE.hyein.color,

  messages: [
    // Awal kenal / biasa
    { from: 'hyein', time: '2026-07-10T19:20:00', text: 'Winay, lo free ga?', read: true },
    { from: 'hanni', time: '2026-07-10T19:22:00', text: 'Iya Kak kenapa?', read: true },
    { from: 'hyein', time: '2026-07-10T19:23:00', text: 'Gue mau curhat. Jangan dikasih tau siapa-siapa.', read: true },
    { from: 'hanni', time: '2026-07-10T19:24:00', text: 'Siap Kak. Siapa yang berani bocorin', read: true },
    { from: 'hyein', time: '2026-07-10T19:25:00', text: 'Gue… suka Ningning.', read: true },
    { from: 'hanni', time: '2026-07-10T19:26:00', text: 'HAH', read: true },
    { from: 'hyein', time: '2026-07-10T19:27:00', text: 'Iya. Udah lama.', read: true },
    { from: 'hanni', time: '2026-07-10T19:28:00', text: 'Kak Aeri serius???', read: true },
    { from: 'hyein', time: '2026-07-10T19:29:00', text: 'Serius. Tapi dia ga jelas.', read: true },
    { from: 'hanni', time: '2026-07-10T19:30:00', text: 'Ga jelas gimana?', read: true },
    { from: 'hyein', time: '2026-07-10T19:31:00', text: 'Kadang deket banget. Kadang hilang. Gue ga tau dia suka apa engga.', read: true },

    // Curhat lebih dalam
    { from: 'hanni', time: '2026-07-25T21:10:00', text: 'Kak Aeri, kabar Ningning gimana?', read: true },
    { from: 'hyein', time: '2026-07-25T21:15:00', text: 'Masih gitu. Chat gue dibales lama. Tapi kalau ketemu dia manis.', read: true },
    { from: 'hanni', time: '2026-07-25T21:16:00', text: 'Itu mixed signal banget 😭', read: true },
    { from: 'hyein', time: '2026-07-25T21:17:00', text: 'Iya. Gue capek tapi ga bisa berhenti.', read: true },
    { from: 'hanni', time: '2026-07-25T21:18:00', text: 'Kak mau gue omongin ke dia?', read: true },
    { from: 'hyein', time: '2026-07-25T21:19:00', text: 'JANGAN. Gue malu.', read: true },
    { from: 'hanni', time: '2026-07-25T21:20:00', text: 'Oke oke diam 🤐', read: true },
    { from: 'hyein', time: '2026-07-25T21:21:00', text: 'Makasih Winay. Lo satu-satunya yang gue ceritain.', read: true },

    // Ningning menggantung
    { from: 'hyein', time: '2026-08-08T23:40:00', text: 'Winay', read: true },
    { from: 'hanni', time: '2026-08-08T23:42:00', text: 'Ya Kak?', read: true },
    { from: 'hyein', time: '2026-08-08T23:43:00', text: 'Tadi gue hampir bilang suka.', read: true },
    { from: 'hanni', time: '2026-08-08T23:44:00', text: 'Terus???', read: true },
    { from: 'hyein', time: '2026-08-08T23:45:00', text: 'Dia bilang “Aeri jangan aneh-aneh”. Trus ganti topik.', read: true },
    { from: 'hanni', time: '2026-08-08T23:46:00', text: '…sakit juga ya', read: true },
    { from: 'hyein', time: '2026-08-08T23:47:00', text: 'Iya. Gue ketawa aja biar ga canggung.', read: true },
    { from: 'hanni', time: '2026-08-08T23:48:00', text: 'Kak Aeri hebat banget tahan', read: true },
    { from: 'hyein', time: '2026-08-08T23:49:00', text: 'Ga hebat. Cuma gabisa lepas.', read: true },
    { from: 'hanni', time: '2026-08-08T23:50:00', text: 'Gue di sini ya Kak kalo butuh curhat lagi', read: true },
    { from: 'hyein', time: '2026-08-08T23:51:00', text: 'Iya. Makasih.', read: true },

    // Masih digantung
    { from: 'hyein', time: '2026-09-02T20:15:00', text: 'Ningning chat gue “kangen” tadi.', read: true },
    { from: 'hanni', time: '2026-09-02T20:17:00', text: 'SERIUS???', read: true },
    { from: 'hyein', time: '2026-09-02T20:18:00', text: 'Iya. Tapi pas gue balas “kangen juga”, dia read doang.', read: true },
    { from: 'hanni', time: '2026-09-02T20:19:00', text: 'Astaga 😭', read: true },
    { from: 'hyein', time: '2026-09-02T20:20:00', text: 'Gue nunggu 2 jam. Ga dibales.', read: true },
    { from: 'hanni', time: '2026-09-02T20:21:00', text: 'Kak… itu jahat banget sih', read: true },
    { from: 'hyein', time: '2026-09-02T20:22:00', text: 'Dia mungkin ga sadar. Atau sadar tapi ga mau tanggung jawab.', read: true },
    { from: 'hanni', time: '2026-09-02T20:23:00', text: 'Kak Aeri mau sampe kapan?', read: true },
    { from: 'hyein', time: '2026-09-02T20:25:00', text: 'Gue juga ga tau. Tiap mau move on, dia muncul lagi.', read: true },
    { from: 'hanni', time: '2026-09-02T20:26:00', text: 'Gue doain Kak dapet kejelasan 🤍', read: true },
    { from: 'hyein', time: '2026-09-02T20:27:00', text: 'Amin. Semoga.', read: true },

    // Winay juga curhat dikit (simetri)
    { from: 'hanni', time: '2026-09-15T22:30:00', text: 'Kak Aeri, jujur gue juga lagi ribet sama orang', read: true },
    { from: 'hyein', time: '2026-09-15T22:33:00', text: 'Si tetangga?', read: true },
    { from: 'hanni', time: '2026-09-15T22:34:00', text: 'Iya… Karel', read: true },
    { from: 'hyein', time: '2026-09-15T22:35:00', text: 'Yang jutek itu?', read: true },
    { from: 'hanni', time: '2026-09-15T22:36:00', text: 'Iya. Tapi akhir-akhir ini lembut. Gue bingung.', read: true },
    { from: 'hyein', time: '2026-09-15T22:37:00', text: 'Kita berdua sama ya. Suka orang yang ga jelas.', read: true },
    { from: 'hanni', time: '2026-09-15T22:38:00', text: 'HAHAHA sedih 😭', read: true },
    { from: 'hyein', time: '2026-09-15T22:39:00', text: 'Minimal lo masih dikasih harapan. Gue digantung total.', read: true },
    { from: 'hanni', time: '2026-09-15T22:40:00', text: 'Kak… 🤍', read: true },
    { from: 'hyein', time: '2026-09-15T22:41:00', text: 'Iya iya gue bercanda. Semoga lo beres lebih dulu.', read: true },

    // Masih menggantung sampai sekarang
    { from: 'hyein', time: '2026-10-10T21:05:00', text: 'Winay', read: true },
    { from: 'hanni', time: '2026-10-10T21:08:00', text: 'Ya Kak?', read: true },
    { from: 'hyein', time: '2026-10-10T21:09:00', text: 'Ningning bilang “kita temenan aja ya” tadi.', read: true },
    { from: 'hanni', time: '2026-10-10T21:10:00', text: '…', read: true },
    { from: 'hyein', time: '2026-10-10T21:11:00', text: 'Gue bilang “iya gapapa”. Padahal ga gapapa.', read: true },
    { from: 'hanni', time: '2026-10-10T21:12:00', text: 'Kak Aeri 😭 gue peluk dari jauh', read: true },
    { from: 'hyein', time: '2026-10-10T21:13:00', text: 'Iya. Gue cuma butuh dengerin aja.', read: true },
    { from: 'hanni', time: '2026-10-10T21:14:00', text: 'Gue di sini. Kapan aja.', read: true },
    { from: 'hyein', time: '2026-10-10T21:15:00', text: 'Makasih Winay. Beneran.', read: true },
    { from: 'hanni', time: '2026-10-10T21:16:00', text: 'Sama-sama Kak Aeri 🤍', read: true },

    // Pesan terbaru (unread feel)
    { from: 'hyein', time: '2026-10-22T14:50:00', text: 'Winay, lo lagi sama Karel ya?', read: false },
    { from: 'hyein', time: '2026-10-22T14:51:00', text: 'Gapapa. Gue cuma penasaran. Jangan lupa bahagia.', read: false },
  ],
};
