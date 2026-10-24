// =====================================================================
// PANGGILAN dari my love karel (tanpa audio, teks muncul satu per satu)
// Atur waktu dan isi percakapan di CALL_CONFIG.
// =====================================================================
const CALL_CONFIG = {
  incomingAfterMs: 20000,   // panggilan masuk muncul 20 detik setelah web dibuka
  endHoldMs: 3000,          // setelah baris terakhir, panggilan berakhir sendiri
  script: [
    { text: 'Winay.', delay: 2000 },
    { text: 'Maxwell di kamar gue lagi.', delay: 2500 },
    { text: 'Gue ga usir.', delay: 2500 },
    { text: 'Cepat ambil.', delay: 2500 },
    { text: 'Atau lo mau gue bawa tidur bareng?', delay: 3000 },
  ],
  followUp: {
    text: 'Dia lagi tidur di sofa gue.',
    delayMs: 1500,
  },
};

const Call = (() => {
  let screenEl = null;
  let timers = [];
  let tickTimer = null;
  let startAt = 0;

  const later = (fn, ms) => { timers.push(setTimeout(fn, ms)); };

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
    clearInterval(tickTimer);
    tickTimer = null;
  }

  const mmss = (s) => `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
  const avatarStyle = () => bgStyle(CHAT_MINJI.avatar, solid(CHAT_MINJI.color));

  const ICON = {
    msg: '💬',
    alarm: '⏰',
    x: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    check: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  };

  const CONTROLS = [['📹', 'Video'], ['🔊', 'Speaker'], ['🎙️', 'Mute'], ['•••', 'More'], ['🖥️', 'Share']];

  // ----- Layar panggilan masuk -----
  function showIncoming() {
    if (screenEl) return;
    screenEl = el('div', 'call-screen incoming');
    screenEl.innerHTML = `
      <div class="cs-head">
        <div class="cs-kind">LINE Audio</div>
        <div class="cs-name">${esc(CHAT_MINJI.name)}</div>
      </div>
      <div class="cs-extra">
        <div class="cs-mini"><span class="cs-mini-circle">${ICON.msg}</span><span>Message</span></div>
        <div class="cs-mini"><span class="cs-mini-circle">${ICON.alarm}</span><span>Remind Me</span></div>
      </div>
      <div class="cs-bottom">
        <div class="cs-act">
          <button class="cs-circle decline" type="button" aria-label="Tolak">${ICON.x}</button>
          <span>Decline</span>
        </div>
        <div class="cs-act">
          <button class="cs-circle accept" type="button" aria-label="Terima">${ICON.check}</button>
          <span>Accept</span>
        </div>
      </div>`;
    $('.decline', screenEl).addEventListener('click', declineCall);
    $('.accept', screenEl).addEventListener('click', startCall);
    $('#screen').appendChild(screenEl);
  }

  // ----- Panggilan berlangsung -----
    // ----- Panggilan berlangsung -----
    // ----- Panggilan berlangsung -----
  function startCall() {
    if (!screenEl) return;
    startAt = Date.now();
    const myScreen = screenEl;
    myScreen.className = 'call-screen active';
    myScreen.innerHTML = `
      <div class="cs-top">
        <div class="cs-name">${esc(CHAT_MINJI.name)}</div>
        <div class="cs-timer">00:00</div>
      </div>
      <div class="cs-avatar" style="${avatarStyle()}"></div>
      <div class="cs-lines"></div>
      <div class="cs-controls">
        ${CONTROLS.map(([ico, label]) =>
          `<div class="cs-ctrl"><span class="cs-ctrl-circle">${ico}</span><span>${label}</span></div>`).join('')}
        <div class="cs-ctrl">
          <button class="cs-ctrl-circle end" type="button" aria-label="Akhiri">${phoneIcon('#fff', 30)}</button>
          <span>End</span>
        </div>
      </div>`;

    $('.end', myScreen).addEventListener('click', endCall);

    const linesEl = $('.cs-lines', myScreen);

    // Satu baris tampil sekaligus: baris baru menggantikan baris sebelumnya
    (async () => {
      for (const line of CALL_CONFIG.script) {
        await new Promise((resolve) => later(resolve, line.delay));
        if (screenEl !== myScreen || !startAt) return; // panggilan sudah berakhir
        linesEl.innerHTML = '';
        linesEl.appendChild(el('div', 'cs-line', esc(line.text)));
      }
      later(endCall, CALL_CONFIG.endHoldMs);
    })();

    tickTimer = setInterval(() => {
      const s = Math.floor((Date.now() - startAt) / 1000);
      const timerEl = screenEl && $('.cs-timer', screenEl);
      if (timerEl) timerEl.textContent = mmss(s);
    }, 500);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

  // ----- Akhiri panggilan (manual atau otomatis) -----
  function endCall() {
    if (!startAt) return;
    const duration = Math.floor((Date.now() - startAt) / 1000);
    startAt = 0;
    CHAT_MINJI.messages.push({
      from: 'minji', time: nextTime(CHAT_MINJI),
      type: 'call', status: 'answered', duration, read: true,
    });
    close();
    setTimeout(sendFollowUp, CALL_CONFIG.followUp.delayMs);
  }

  // ----- Tolak panggilan: tercatat sebagai tak terjawab -----
  function declineCall() {
    CHAT_MINJI.messages.push({
      from: 'minji', time: nextTime(CHAT_MINJI),
      type: 'call', status: 'missed', read: false,
    });
    updateLineBadge();
    close();
  }

  function close() {
    clearTimers();
    startAt = 0;
    if (!screenEl) return;
    const s = screenEl;
    screenEl = null;
    s.classList.add('out');
    setTimeout(() => s.remove(), 300);
  }

  // ----- Pesan dan foto Karel setelah panggilan selesai -----
  function sendFollowUp() {
    const f = CALL_CONFIG.followUp;
    CHAT_MINJI.messages.push({ from: 'minji', time: nextTime(CHAT_MINJI), text: f.text, read: false });
    updateLineBadge();
    setTimeout(() => {
      CHAT_MINJI.messages.push({
        from: 'minji', time: nextTime(CHAT_MINJI),
        type: 'photo', photos: [f.photo], read: false,
      });
      updateLineBadge();
    }, f.photoDelayMs);
  }

  function init() {
    setTimeout(showIncoming, CALL_CONFIG.incomingAfterMs);
  }

  return { init };
})();

Call.init();