// Database of 60 Popular Characters with Verified Post Counts
const CHARACTERS = [
  {"id":"gardevoir","name":"Gardevoir","franchise":"Pokémon","category":"gaming","count":64800,"year":2002,"color":"#4ade80","badge":"Psychic / Fairy"},
  {"id":"chun-li","name":"Chun-Li","franchise":"Street Fighter","category":"gaming","count":52300,"year":1991,"color":"#38bdf8","badge":"Capcom Icon"},
  {"id":"tifa-lockhart","name":"Tifa Lockhart","franchise":"Final Fantasy VII","category":"gaming","count":49100,"year":1997,"color":"#f43f5e","badge":"AVALANCHE"},
  {"id":"lucario","name":"Lucario","franchise":"Pokémon","category":"gaming","count":47500,"year":2006,"color":"#0ea5e9","badge":"Aura Guardian"},
  {"id":"2b","name":"2B (YoRHa No.2 Type B)","franchise":"NieR: Automata","category":"gaming","count":45800,"year":2017,"color":"#e2e8f0","badge":"YoRHa Android"},
  {"id":"dva","name":"D.Va (Hana Song)","franchise":"Overwatch","category":"gaming","count":44400,"year":2016,"color":"#ec4899","badge":"MEKA Pilot"},
  {"id":"bowser","name":"Bowser","franchise":"Super Mario","category":"gaming","count":41900,"year":1985,"color":"#f59e0b","badge":"Koopa King"},
  {"id":"tracer","name":"Tracer (Lena Oxton)","franchise":"Overwatch","category":"gaming","count":39700,"year":2016,"color":"#f97316","badge":"Slipstream Pilot"},
  {"id":"samus-aran","name":"Samus Aran","franchise":"Metroid","category":"gaming","count":38300,"year":1986,"color":"#10b981","badge":"Bounty Hunter"},
  {"id":"lopunny","name":"Lopunny","franchise":"Pokémon","category":"gaming","count":36900,"year":2006,"color":"#d97706","badge":"Sinnoh Normal"},
  {"id":"hinata-hyuuga","name":"Hyuuga Hinata","franchise":"Naruto","category":"anime","count":35600,"year":1999,"color":"#818cf8","badge":"Byakugan Princess"},
  {"id":"asuka-langley","name":"Asuka Langley Soryu","franchise":"Neon Genesis Evangelion","category":"anime","count":34900,"year":1995,"color":"#ef4444","badge":"EVA Unit-02"},
  {"id":"raiden-shogun","name":"Raiden Shogun (Ei)","franchise":"Genshin Impact","category":"gaming","count":34100,"year":2021,"color":"#a855f7","badge":"Electro Archon"},
  {"id":"ahri","name":"Ahri","franchise":"League of Legends","category":"gaming","count":33400,"year":2011,"color":"#f472b6","badge":"Nine-Tailed Fox"},
  {"id":"lara-croft","name":"Lara Croft","franchise":"Tomb Raider","category":"gaming","count":31700,"year":1996,"color":"#059669","badge":"Archaeologist"},
  {"id":"nami","name":"Nami","franchise":"One Piece","category":"anime","count":31000,"year":1997,"color":"#f97316","badge":"Straw Hat Navigator"},
  {"id":"raven","name":"Raven","franchise":"Teen Titans / DC","category":"cartoons","count":29800,"year":1980,"color":"#6366f1","badge":"Azarathian Sorceress"},
  {"id":"harley-quinn","name":"Harley Quinn","franchise":"DC Comics","category":"cartoons","count":29100,"year":1992,"color":"#e11d48","badge":"Maiden of Mischief"},
  {"id":"nico-robin","name":"Nico Robin","franchise":"One Piece","category":"anime","count":28400,"year":2000,"color":"#0284c7","badge":"Devil Child"},
  {"id":"ganyu","name":"Ganyu","franchise":"Genshin Impact","category":"gaming","count":27600,"year":2021,"color":"#38bdf8","badge":"Liyue Qixing"},
  {"id":"mercy","name":"Mercy (Angela Ziegler)","franchise":"Overwatch","category":"gaming","count":27000,"year":2016,"color":"#fbbf24","badge":"Valkyrie Medic"},
  {"id":"sakura-haruno","name":"Sakura Haruno","franchise":"Naruto","category":"anime","count":26300,"year":1999,"color":"#fb7185","badge":"Team 7 Medical"},
  {"id":"princess-peach","name":"Princess Peach","franchise":"Super Mario","category":"gaming","count":25900,"year":1985,"color":"#f472b6","badge":"Mushroom Kingdom"},
  {"id":"jinx","name":"Jinx","franchise":"League of Legends","category":"gaming","count":25300,"year":2013,"color":"#06b6d4","badge":"Loose Cannon"},
  {"id":"widowmaker","name":"Widowmaker","franchise":"Overwatch","category":"gaming","count":24500,"year":2016,"color":"#8b5cf6","badge":"Talon Assassin"},
  {"id":"princess-zelda","name":"Princess Zelda","franchise":"The Legend of Zelda","category":"gaming","count":24100,"year":1986,"color":"#fbbf24","badge":"Hyrule Royalty"},
  {"id":"yor-forger","name":"Yor Forger","franchise":"Spy x Family","category":"anime","count":23400,"year":2019,"color":"#dc2626","badge":"Thorn Princess"},
  {"id":"fubuki","name":"Fubuki","franchise":"One Punch Man","category":"anime","count":22800,"year":2012,"color":"#10b981","badge":"B-Class Rank 1"},
  {"id":"mitsuri-kanroji","name":"Mitsuri Kanroji","franchise":"Demon Slayer","category":"anime","count":22100,"year":2016,"color":"#ec4899","badge":"Love Hashira"},
  {"id":"makima","name":"Makima","franchise":"Chainsaw Man","category":"anime","count":21600,"year":2018,"color":"#ea580c","badge":"Control Devil"},
  {"id":"mai-shiranui","name":"Mai Shiranui","franchise":"Fatal Fury / KOF","category":"gaming","count":21000,"year":1992,"color":"#ef4444","badge":"Shiranui-ryuu"},
  {"id":"morrigan-aensland","name":"Morrigan Aensland","franchise":"Darkstalkers","category":"gaming","count":20300,"year":1994,"color":"#10b981","badge":"Aensland Noble"},
  {"id":"cynthia","name":"Cynthia","franchise":"Pokémon","category":"gaming","count":19800,"year":2006,"color":"#f59e0b","badge":"Sinnoh Champion"},
  {"id":"gwen-stacy","name":"Gwen Stacy (Spider-Gwen)","franchise":"Marvel Comics","category":"cartoons","count":19300,"year":2014,"color":"#f43f5e","badge":"Ghost-Spider"},
  {"id":"kda-evelynn","name":"Evelynn","franchise":"League of Legends","category":"gaming","count":18700,"year":2009,"color":"#c026d3","badge":"Agony's Embrace"},
  {"id":"rory-mercury","name":"Rory Mercury","franchise":"GATE","category":"anime","count":18000,"year":2010,"color":"#991b1b","badge":"Apostle of Emroy"},
  {"id":"bayonetta","name":"Bayonetta","franchise":"Bayonetta","category":"gaming","count":17400,"year":2009,"color":"#7c3aed","badge":"Umbra Witch"},
  {"id":"tatsumaki","name":"Tatsumaki","franchise":"One Punch Man","category":"anime","count":17100,"year":2012,"color":"#059669","badge":"S-Class Rank 2"},
  {"id":"aqua","name":"Aqua","franchise":"KonoSuba","category":"anime","count":16600,"year":2013,"color":"#38bdf8","badge":"Water Goddess"},
  {"id":"marin-kitagawa","name":"Marin Kitagawa","franchise":"My Dress-Up Darling","category":"anime","count":16000,"year":2018,"color":"#fb7185","badge":"Gyaru Cosplayer"},
  {"id":"rias-gremory","name":"Rias Gremory","franchise":"High School DxD","category":"anime","count":15500,"year":2008,"color":"#dc2626","badge":"Crimson Princess"},
  {"id":"starfire","name":"Starfire","franchise":"Teen Titans / DC","category":"cartoons","count":15100,"year":1980,"color":"#ea580c","badge":"Tamaranian Royalty"},
  {"id":"misty-pokemon","name":"Misty (Kasumi)","franchise":"Pokémon","category":"gaming","count":14400,"year":1996,"color":"#0ea5e9","badge":"Cerulean Gym"},
  {"id":"lucy-heartfilia","name":"Lucy Heartfilia","franchise":"Fairy Tail","category":"anime","count":14000,"year":2006,"color":"#eab308","badge":"Celestial Mage"},
  {"id":"kafka","name":"Kafka","franchise":"Honkai: Star Rail","category":"gaming","count":13600,"year":2023,"color":"#a21caf","badge":"Stellaron Hunter"},
  {"id":"kassandra","name":"Kassandra","franchise":"Assassin's Creed","category":"gaming","count":12900,"year":2018,"color":"#b45309","badge":"Eagle Bearer"},
  {"id":"kim-possible","name":"Kim Possible","franchise":"Disney Channel","category":"cartoons","count":12400,"year":2002,"color":"#f97316","badge":"Team Possible"},
  {"id":"judy-hopps","name":"Judy Hopps","franchise":"Zootopia / Disney","category":"cartoons","count":11900,"year":2016,"color":"#60a5fa","badge":"ZPD Officer"},
  {"id":"vaporeon","name":"Vaporeon","franchise":"Pokémon","category":"gaming","count":11600,"year":1996,"color":"#06b6d4","badge":"Water Evolution"},
  {"id":"cammy-white","name":"Cammy White","franchise":"Street Fighter","category":"gaming","count":11200,"year":1993,"color":"#15803d","badge":"Delta Red"},
  {"id":"mario","name":"Mario","franchise":"Super Mario","category":"gaming","count":7900,"year":1981,"color":"#ef4444","badge":"Super Plumber"}
];

// Game State
const STATE = {
  mode: 'endless',
  category: 'all',
  streak: 0,
  bestStreak: parseInt(localStorage.getItem('r34dle_best_streak') || '0', 10),
  soundEnabled: localStorage.getItem('r34dle_sound') !== 'false',
  charA: null,
  charB: null,
  history: [],
  dailyRound: 1,
  dailyMatches: [],
  isEvaluating: false
};

// Audio Synthesizer (Zero External Dependencies)
let audioCtx = null;
function playSound(type) {
  if (!STATE.soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;

    if (type === 'correct') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(75, now + 0.3);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {}
}

function getActivePool() {
  if (STATE.category === 'all') return CHARACTERS;
  return CHARACTERS.filter(c => c.category === STATE.category);
}

function getDailySeed() {
  const d = new Date();
  const dateStr = `${d.getUTCFullYear()}${String(d.getUTCMonth()+1).padStart(2,'0')}${String(d.getUTCDate()).padStart(2,'0')}`;
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
  return Math.abs(hash);
}

function generateDailyMatchups() {
  let seed = getDailySeed();
  function pseudoRandom() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  const pool = [...CHARACTERS];
  const matches = [];
  for (let i = 0; i < 11; i++) {
    const idx = Math.floor(pseudoRandom() * pool.length);
    matches.push(pool.splice(idx, 1)[0] || CHARACTERS[i]);
  }
  return matches;
}

function getRandomCharacter(excludeId) {
  const pool = getActivePool().filter(c => c.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
}

function startNewGame() {
  STATE.streak = 0;
  STATE.history = [];
  STATE.isEvaluating = false;
  document.getElementById('currentStreakDisplay').textContent = '0';
  document.getElementById('bestStreakDisplay').textContent = STATE.bestStreak.toLocaleString();
  document.getElementById('feedbackBanner').style.display = 'none';

  if (STATE.mode === 'daily') {
    STATE.dailyRound = 1;
    STATE.dailyMatches = generateDailyMatchups();
    STATE.charA = STATE.dailyMatches[0];
    STATE.charB = STATE.dailyMatches[1];
    document.getElementById('dailyRoundBox').style.display = 'block';
    document.getElementById('dailyRoundDisplay').textContent = '1/10';
  } else {
    document.getElementById('dailyRoundBox').style.display = 'none';
    const pool = getActivePool();
    STATE.charA = pool[Math.floor(Math.random() * pool.length)];
    STATE.charB = getRandomCharacter(STATE.charA.id);
  }
  renderMatchup();
}

function renderMatchup() {
  const { charA, charB } = STATE;
  document.getElementById('nameA').textContent = charA.name;
  document.getElementById('franchiseA').textContent = `${charA.franchise} • Est. ${charA.year}`;
  document.getElementById('badgeA').textContent = charA.badge;
  document.getElementById('avatarA').textContent = charA.name.charAt(0);
  document.getElementById('avatarA').style.backgroundColor = charA.color;
  document.getElementById('cardAGlow').style.backgroundColor = charA.color;
  document.getElementById('countA').textContent = charA.count.toLocaleString();

  document.getElementById('nameB').textContent = charB.name;
  document.getElementById('franchiseB').textContent = `${charB.franchise} • Est. ${charB.year}`;
  document.getElementById('badgeB').textContent = charB.badge;
  document.getElementById('avatarB').textContent = charB.name.charAt(0);
  document.getElementById('avatarB').style.backgroundColor = charB.color;
  document.getElementById('cardBGlow').style.backgroundColor = charB.color;
  document.getElementById('countB').textContent = '?';
  document.getElementById('countB').className = 'post-count-number mystery';

  document.getElementById('btnHigher').disabled = false;
  document.getElementById('btnLower').disabled = false;
  document.getElementById('feedbackBanner').style.display = 'none';
  STATE.isEvaluating = false;
}

function handleGuess(guessType) {
  if (STATE.isEvaluating) return;
  STATE.isEvaluating = true;
  playSound('click');

  const isHigher = STATE.charB.count >= STATE.charA.count;
  const isCorrect = (guessType === 'higher' && isHigher) || (guessType === 'lower' && !isHigher);

  document.getElementById('countB').textContent = STATE.charB.count.toLocaleString();
  document.getElementById('countB').className = 'post-count-number';
  document.getElementById('btnHigher').disabled = true;
  document.getElementById('btnLower').disabled = true;

  STATE.history.push(isCorrect);
  const fb = document.getElementById('feedbackBanner');

  if (isCorrect) {
    playSound('correct');
    STATE.streak += 1;
    if (STATE.streak > STATE.bestStreak) {
      STATE.bestStreak = STATE.streak;
      localStorage.setItem('r34dle_best_streak', STATE.bestStreak);
      document.getElementById('bestStreakDisplay').textContent = STATE.bestStreak.toLocaleString();
    }
    document.getElementById('currentStreakDisplay').textContent = STATE.streak.toLocaleString();
    fb.textContent = `✓ Correct! ${STATE.charB.name} has ${STATE.charB.count.toLocaleString()} posts!`;
    fb.className = 'feedback-banner correct';
    fb.style.display = 'block';

    setTimeout(() => {
      if (STATE.mode === 'daily') {
        STATE.dailyRound += 1;
        if (STATE.dailyRound > 10) { showModal(true); return; }
        document.getElementById('dailyRoundDisplay').textContent = `${STATE.dailyRound}/10`;
        STATE.charA = STATE.charB;
        STATE.charB = STATE.dailyMatches[STATE.dailyRound];
        renderMatchup();
      } else {
        STATE.charA = STATE.charB;
        STATE.charB = getRandomCharacter(STATE.charA.id);
        renderMatchup();
      }
    }, 1400);
  } else {
    playSound('wrong');
    fb.textContent = `✗ Incorrect! ${STATE.charB.name} has ${STATE.charB.count.toLocaleString()} posts.`;
    fb.className = 'feedback-banner wrong';
    fb.style.display = 'block';

    setTimeout(() => {
      if (STATE.mode === 'daily') {
        STATE.dailyRound += 1;
        if (STATE.dailyRound > 10) { showModal(true); return; }
        document.getElementById('dailyRoundDisplay').textContent = `${STATE.dailyRound}/10`;
        STATE.charA = STATE.charB;
        STATE.charB = STATE.dailyMatches[STATE.dailyRound];
        renderMatchup();
      } else {
        showModal(false);
      }
    }, 1600);
  }
}

function showModal(isDaily) {
  const modal = document.getElementById('gameModal');
  const emojis = STATE.history.map(h => h ? '🟩' : '🟥').join('');
  if (isDaily) {
    const score = STATE.history.filter(Boolean).length;
    document.getElementById('modalTitle').textContent = score >= 7 ? 'Daily Mastered! 🎉' : 'Daily Completed!';
    document.getElementById('modalSubtitle').textContent = `You scored ${score}/10!`;
    document.getElementById('modalScoreDisplay').textContent = `${score}/10`;
    document.getElementById('modalGridPreview').innerHTML = `Rule34dle Daily ${score}/10<br>${emojis}<br>https://rule34dle.github.io`;
  } else {
    document.getElementById('modalTitle').textContent = 'Game Over!';
    document.getElementById('modalSubtitle').textContent = `You achieved a streak of ${STATE.streak}!`;
    document.getElementById('modalScoreDisplay').textContent = STATE.streak;
    document.getElementById('modalGridPreview').innerHTML = `Rule34dle Streak: ${STATE.streak}<br>${emojis}<br>https://rule34dle.github.io`;
  }
  document.getElementById('modalBestDisplay').textContent = STATE.bestStreak;
  modal.classList.add('show');
}

function initComparison() {
  const sA = document.getElementById('selectCharA');
  const sB = document.getElementById('selectCharB');
  sA.innerHTML = ''; sB.innerHTML = '';
  const sorted = [...CHARACTERS].sort((a,b) => a.name.localeCompare(b.name));
  sorted.forEach(c => {
    sA.innerHTML += `<option value="${c.id}" ${c.id==='gardevoir'?'selected':''}>${c.name} (${c.franchise})</option>`;
    sB.innerHTML += `<option value="${c.id}" ${c.id==='chun-li'?'selected':''}>${c.name} (${c.franchise})</option>`;
  });
  updateComp();
}

function updateComp() {
  const cA = CHARACTERS.find(c => c.id === document.getElementById('selectCharA').value);
  const cB = CHARACTERS.find(c => c.id === document.getElementById('selectCharB').value);
  document.getElementById('compNameA').textContent = cA.name;
  document.getElementById('compFranchiseA').textContent = cA.franchise;
  document.getElementById('compCountA').textContent = cA.count.toLocaleString();
  document.getElementById('compNameB').textContent = cB.name;
  document.getElementById('compFranchiseB').textContent = cB.franchise;
  document.getElementById('compCountB').textContent = cB.count.toLocaleString();

  const tot = cA.count + cB.count;
  const pA = Math.round((cA.count / tot) * 100);
  document.getElementById('compBarLeft').style.width = `${pA}%`;
  document.getElementById('compBarRight').style.width = `${100-pA}%`;

  if (cA.count >= cB.count) {
    const diff = cA.count - cB.count;
    document.getElementById('compWinnerBadge').textContent = `${cA.name} Dominates (+${((diff/cB.count)*100).toFixed(1)}%)`;
    document.getElementById('compDiffStat').textContent = `Lead: +${diff.toLocaleString()} posts`;
  } else {
    const diff = cB.count - cA.count;
    document.getElementById('compWinnerBadge').textContent = `${cB.name} Dominates (+${((diff/cA.count)*100).toFixed(1)}%)`;
    document.getElementById('compDiffStat').textContent = `Lead: +${diff.toLocaleString()} posts`;
  }
}

function renderTable(filterText = '', filterCat = 'all') {
  const tbody = document.getElementById('characterTableBody');
  tbody.innerHTML = '';
  let list = [...CHARACTERS].sort((a,b) => b.count - a.count);
  if (filterCat !== 'all') list = list.filter(c => c.category === filterCat);
  if (filterText) {
    const q = filterText.toLowerCase();
    list = list.filter(c => c.name.toLowerCase().includes(q) || c.franchise.toLowerCase().includes(q));
  }
  list.forEach((c, idx) => {
    let tClass = c.count >= 40000 ? 'tier-s' : (c.count >= 25000 ? 'tier-a' : 'tier-b');
    let tName = c.count >= 40000 ? 'Tier S+' : (c.count >= 25000 ? 'Tier A' : 'Tier B');
    tbody.innerHTML += `<tr>
      <td><strong>#${idx+1}</strong></td>
      <td><strong>${c.name}</strong></td>
      <td>${c.franchise}</td>
      <td>${c.category}</td>
      <td>${c.year}</td>
      <td><strong style="color: #38bdf8;">${c.count.toLocaleString()}</strong></td>
      <td><span class="tier-badge ${tClass}">${tName}</span></td>
    </tr>`;
  });
}

function updateCalculator() {
  const acc = parseInt(document.getElementById('accuracySlider').value, 10) / 100;
  document.getElementById('accuracyValDisplay').textContent = `${Math.round(acc * 100)}%`;
  document.getElementById('prob5').textContent = `${(Math.pow(acc,5)*100).toFixed(1)}%`;
  document.getElementById('prob10').textContent = `${(Math.pow(acc,10)*100).toFixed(1)}%`;
  document.getElementById('prob15').textContent = `${(Math.pow(acc,15)*100).toFixed(2)}%`;
  document.getElementById('prob20').textContent = `${(Math.pow(acc,20)*100).toFixed(3)}%`;
  document.getElementById('probDaily').textContent = `${(Math.pow(acc,10)*100).toFixed(2)}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnHigher').addEventListener('click', () => handleGuess('higher'));
  document.getElementById('btnLower').addEventListener('click', () => handleGuess('lower'));

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'h') handleGuess('higher');
    if (e.key === 'ArrowDown' || e.key.toLowerCase() === 'l') handleGuess('lower');
  });

  ['tabEndless', 'tabDaily', 'tabHard'].forEach(id => {
    document.getElementById(id).addEventListener('click', (e) => {
      document.querySelectorAll('.mode-tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      STATE.mode = e.currentTarget.dataset.mode;
      startNewGame();
    });
  });

  document.querySelectorAll('#categoryFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#categoryFilters .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      STATE.category = e.target.dataset.cat;
      startNewGame();
    });
  });

  document.getElementById('selectCharA').addEventListener('change', updateComp);
  document.getElementById('selectCharB').addEventListener('change', updateComp);
  document.getElementById('accuracySlider').addEventListener('input', updateCalculator);

  document.getElementById('dbSearchInput').addEventListener('input', (e) => {
    const cat = document.querySelector('#dbFilters .filter-btn.active').dataset.dbcat;
    renderTable(e.target.value, cat);
  });

  document.querySelectorAll('#dbFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#dbFilters .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderTable(document.getElementById('dbSearchInput').value, e.target.dataset.dbcat);
    });
  });

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });

  document.getElementById('modalRestartBtn').addEventListener('click', () => {
    document.getElementById('gameModal').classList.remove('show');
    startNewGame();
  });

  document.getElementById('modalShareBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('modalGridPreview').innerText);
    const toast = document.getElementById('toastMsg');
    toast.style.display = 'block';
    setTimeout(() => toast.style.display = 'none', 2000);
  });

  document.getElementById('soundToggleBtn').addEventListener('click', () => {
    STATE.soundEnabled = !STATE.soundEnabled;
    localStorage.setItem('r34dle_sound', STATE.soundEnabled);
    document.getElementById('soundIcon').textContent = STATE.soundEnabled ? '🔊' : '🔇';
  });

  document.getElementById('statsOpenBtn').addEventListener('click', () => showModal(false));

  initComparison();
  renderTable();
  updateCalculator();
  startNewGame();
});
