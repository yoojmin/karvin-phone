// Playlist. Format lagu: [judul, artis, durasi]
// Gambar lagu otomatis: assets/music/<id-playlist>-<nomor>.jpg
const PLAYLISTS = [
  {
    id: 'pl1', title: 'Night🌌', color: '#1a1a1a', cover: 'assets/music/pl1-cover.jpg',
    songs: [
      ['Someone You Loved', 'Lewis Capaldi', '3:02'],
      ['drivers license', 'Olivia Rodrigo', '4:02'],
      ['All Too Well (10 Minute Version)', 'Taylor Swift', '10:13'],
      ['When the Party\'s Over', 'Billie Eilish', '3:16'],
      ['Ivy', 'Frank Ocean', '4:09'],
      ['Motion Sickness', 'Phoebe Bridgers', '3:49'],
      ['Space Song', 'Beach House', '5:20'],
      ['The Night We Met', 'Lord Huron', '3:28'],
    ],
  },
  {
    id: 'pl2', title: '💌', color: '#1c1c1e', cover: 'assets/music/pl2-cover.jpg',
    songs: [
      ['Softly', 'Clairo', '3:02'],
      ['Bloom', 'The Paper Kites', '3:33'],
      ['First Love / Late Spring', 'Mitski', '4:34'],
      ['Like Real People Do', 'Hozier', '3:17'],
      ['Ribs', 'Lorde', '4:18'],
      ['About You', 'The 1975', '5:26'],
      ['I Know The End', 'Phoebe Bridgers', '5:44'],
      ['Saturn', 'Sleeping At Last', '4:49'],
    ],
  },
];

PLAYLISTS.forEach((pl) => {
  pl.songs = pl.songs.map(([title, artist, duration], i) => ({
    title, artist, duration,
    art: `assets/music/${pl.id}-${i + 1}.jpg`,
    color: ['#ffe0ea', '#e0f0ff', '#fff3d6', '#dff7e6', '#eadcff', '#ffd9c7', '#d9f0f7'][i % 7],
  }));
});
