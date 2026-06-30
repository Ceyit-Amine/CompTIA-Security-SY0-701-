/* ============================================
   CompTIA Security+ SY0-701 Study Platform
   Core JavaScript Logic
   ============================================ */

// ============================
// STATE & DATA
// ============================
let qcmData = [];
let termsData = [];
let notesData = [];
let currentQCM = {
  mode: '',
  questions: [],
  index: 0,
  answers: {},
  shuffled: false,
};

// ============================
// NAVIGATION
// ============================
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + viewId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-link[data-view="${viewId}"]`);
  if (navBtn) navBtn.classList.add('active');

  document.getElementById('navLinks').classList.remove('open');

  // Lazy load data per view
  if (viewId === 'qcm' && qcmData.length === 0) loadQCM();
  if (viewId === 'terms' && termsData.length === 0) loadTerms();
  if (viewId === 'notes' && notesData.length === 0) loadNotes();

  // If data already cached, clear stale loading placeholders and render
  if (viewId === 'terms' && termsData.length > 0) {
    const loadingEl = document.getElementById('terms-loading');
    if (loadingEl) loadingEl.remove();
    renderTerms(termsData);
  }
  if (viewId === 'notes' && notesData.length > 0) {
    const sidebarLoading = document.getElementById('notes-sidebar-loading');
    const mainLoading = document.getElementById('notes-main-loading');
    if (sidebarLoading) sidebarLoading.remove();
    if (mainLoading) mainLoading.remove();
    renderNotesSidebar();
    renderNotesSection(0);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function switchTestSet(idx) {
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.querySelectorAll('.tab-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
}

// ============================
// RIPPLE EFFECT
// ============================
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.btn, .card, .mode-card, .exam-card, .nav-link, .tab-btn, .term-card');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  ripple.classList.add('ripple');
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ============================
// QCM QUIZ MODULE
// ============================
async function loadQCM() {
  if (qcmData.length) return;
  try {
    if (typeof QCM_DATA !== 'undefined') {
      qcmData = QCM_DATA;
    } else {
      const res = await fetch('./data_qcm.json');
      qcmData = await res.json();
    }
  } catch (e) {
    console.error('Failed to load QCM data', e);
  }
}

async function startQCM(mode) {
  if (!qcmData.length) {
    await loadQCM();
  }
  currentQCM.mode = mode;
  currentQCM.answers = {};
  currentQCM.index = 0;
  if (mode === 'shuffle') {
    currentQCM.questions = [...qcmData].sort(() => Math.random() - 0.5);
    currentQCM.shuffled = true;
  } else {
    currentQCM.questions = [...qcmData];
    currentQCM.shuffled = false;
  }
  document.getElementById('qcm-start').classList.add('hidden');
  document.getElementById('qcm-end').classList.add('hidden');
  document.getElementById('qcm-quiz').classList.remove('hidden');
  qcmRenderQuestion();
}

function qcmRenderQuestion() {
  const q = currentQCM.questions[currentQCM.index];
  const total = currentQCM.questions.length;
  const actualNum = currentQCM.shuffled ? currentQCM.index + 1 : q.id;

  document.getElementById('qcm-qnum').textContent =
    `Question ${actualNum} / ${total}` + (currentQCM.shuffled ? ` (Original #${q.id})` : '');

  const statusEl = document.getElementById('qcm-status');
  if (q.confirmed) {
    statusEl.textContent = 'Confirmed Answer';
    statusEl.className = 'question-status status-confirmed';
  } else {
    statusEl.textContent = 'Answer Hidden';
    statusEl.className = 'question-status status-hidden';
  }

  document.getElementById('qcm-qtext').textContent = q.question;

  const optsContainer = document.getElementById('qcm-options');
  optsContainer.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const letter = opt.charAt(0);
    const div = document.createElement('div');
    div.className = 'option-item';
    div.onclick = () => qcmSelectOption(letter);

    if (currentQCM.answers[q.id] === letter) {
      div.classList.add('selected');
    }

    // Study mode or answered + confirmed: show correct/incorrect
    if (currentQCM.mode === 'study' && q.confirmed && q.correct) {
      if (letter === q.correct) div.classList.add('correct');
    } else if (currentQCM.answers[q.id] && q.confirmed && q.correct) {
      if (letter === q.correct) div.classList.add('correct');
      else if (currentQCM.answers[q.id] === letter) div.classList.add('incorrect');
    }

    div.innerHTML = `
      <div class="option-letter">${letter}</div>
      <div class="option-text">${opt.substring(3)}</div>
    `;
    optsContainer.appendChild(div);
  });

  // Reveal / answer feedback
  const revealEl = document.getElementById('qcm-reveal');
  if (currentQCM.mode === 'study' && q.confirmed && q.correct) {
    revealEl.className = 'answer-reveal reveal-correct';
    revealEl.textContent = `Correct Answer: ${q.correct}`;
  } else if (currentQCM.answers[q.id] && q.confirmed && q.correct) {
    const userAns = currentQCM.answers[q.id];
    if (userAns === q.correct) {
      revealEl.className = 'answer-reveal reveal-correct';
      revealEl.textContent = `Correct! Answer: ${q.correct}`;
    } else {
      revealEl.className = 'answer-reveal reveal-incorrect';
      revealEl.textContent = `Incorrect. Correct Answer: ${q.correct}`;
    }
  } else if (!q.confirmed) {
    revealEl.className = 'answer-reveal reveal-hidden';
    revealEl.textContent = 'Answer was not visible in the source screenshot.';
  } else {
    revealEl.className = 'hidden';
    revealEl.textContent = '';
  }

  // Progress
  const progress = ((currentQCM.index + 1) / total) * 100;
  document.getElementById('qcm-progress').style.width = progress + '%';

  // Buttons
  document.getElementById('qcm-prev').disabled = currentQCM.index === 0;
  document.getElementById('qcm-next').textContent =
    currentQCM.index === total - 1 ? 'Finish' : 'Next \u2192';
}

function qcmSelectOption(letter) {
  const q = currentQCM.questions[currentQCM.index];
  currentQCM.answers[q.id] = letter;
  qcmRenderQuestion();
}

function qcmNext() {
  if (currentQCM.index === currentQCM.questions.length - 1) {
    qcmShowResults();
  } else {
    currentQCM.index++;
    qcmRenderQuestion();
  }
}

function qcmPrev() {
  if (currentQCM.index > 0) {
    currentQCM.index--;
    qcmRenderQuestion();
  }
}

function qcmShowResults() {
  let correct = 0, incorrect = 0, confirmedAnswered = 0, totalConfirmed = 0;
  currentQCM.questions.forEach(q => {
    if (q.confirmed && q.correct) {
      totalConfirmed++;
      if (currentQCM.answers[q.id]) {
        confirmedAnswered++;
        if (currentQCM.answers[q.id] === q.correct) correct++;
        else incorrect++;
      }
    }
  });
  const accuracy = confirmedAnswered > 0 ? Math.round((correct / confirmedAnswered) * 100) : 0;

  document.getElementById('qcm-score').textContent = `${correct}/${confirmedAnswered}`;
  document.getElementById('qcm-correct').textContent = correct;
  document.getElementById('qcm-incorrect').textContent = incorrect;
  document.getElementById('qcm-confirmed').textContent = confirmedAnswered;
  document.getElementById('qcm-percent').textContent = accuracy + '%';

  document.getElementById('qcm-quiz').classList.add('hidden');
  document.getElementById('qcm-end').classList.remove('hidden');
}

function restartQCM() {
  startQCM(currentQCM.mode);
}

function qcmToMenu() {
  document.getElementById('qcm-end').classList.add('hidden');
  document.getElementById('qcm-quiz').classList.add('hidden');
  document.getElementById('qcm-start').classList.remove('hidden');
}

// Keyboard navigation
window.addEventListener('keydown', (e) => {
  const quizScreen = document.getElementById('qcm-quiz');
  if (quizScreen.classList.contains('hidden')) return;
  if (e.key === 'ArrowRight' || e.key === 'Enter') qcmNext();
  else if (e.key === 'ArrowLeft') qcmPrev();
  else if (e.key >= 'a' && e.key <= 'f') qcmSelectOption(e.key.toUpperCase());
});

// ============================
// NOTES & CHEATSHEET MODULE
// ============================
async function loadNotes() {
  if (notesData.length) return;
  try {
    if (typeof NOTES_DATA !== 'undefined') {
      notesData = NOTES_DATA;
    } else {
      const res = await fetch('./data_notes.json');
      notesData = await res.json();
    }
    // Clear loading placeholders
    const sidebarLoading = document.getElementById('notes-sidebar-loading');
    const mainLoading = document.getElementById('notes-main-loading');
    if (sidebarLoading) sidebarLoading.remove();
    if (mainLoading) mainLoading.remove();
    renderNotesSidebar();
    if (notesData.length) renderNotesSection(0);
  } catch (e) {
    console.error('Failed to load notes', e);
    document.getElementById('notes-main').innerHTML = '<div class="no-results">Failed to load notes. Please check that data_notes.json exists.</div>';
  }
}

function renderNotesSidebar() {
  const toc = document.getElementById('notes-toc');
  toc.innerHTML = '';
  notesData.forEach((sec, idx) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = sec.header;
    btn.className = 'notes-toc-btn';
    btn.onclick = () => renderNotesSection(idx);
    li.appendChild(btn);
    toc.appendChild(li);
  });
}

function renderNotesSection(idx) {
  const sec = notesData[idx];
  if (!sec) return;

  // Update active sidebar state
  document.querySelectorAll('.notes-toc button').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });

  const main = document.getElementById('notes-main');
  const html = renderMarkdown(sec.body);
  main.innerHTML = `<h2>${escapeHtml(sec.header)}</h2>${html}`;
}

function renderMarkdown(md) {
  // Simple markdown parser for the notes content
  const lines = md.split('\n');
  let out = '';
  let inList = false;
  let inBlock = false;

  const flushList = () => {
    if (inList) { out += '</ul>'; inList = false; }
  };
  const flushBlock = () => {
    if (inBlock) { out += '</blockquote>'; inBlock = false; }
  };

  for (let line of lines) {
    const raw = line.trimEnd();
    const trimmed = raw.trim();

    if (trimmed === '') {
      flushList();
      flushBlock();
      continue;
    }

    // Images: ![[...]] or ![...](...)
    let processed = trimmed;
    processed = processed.replace(/!\[\[([^\]]+)\]\]/g, '<img src="./Notes-and-Cheatsheet/images/$1" alt="$1" style="max-width:100%;border-radius:8px;margin:12px 0;" />');
    processed = processed.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;border-radius:8px;margin:12px 0;" />');

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushList();
      if (!inBlock) { out += '<blockquote>'; inBlock = true; }
      out += '<p>' + formatInline(processed.substring(2)) + '</p>';
      continue;
    }
    flushBlock();

    // List item
    if (trimmed.startsWith('- ')) {
      if (!inList) { out += '<ul>'; inList = true; }
      out += '<li>' + formatInline(processed.substring(2)) + '</li>';
      continue;
    }
    flushList();

    // Horizontal rule
    if (trimmed === '---') {
      out += '<hr style="border:0;border-top:1px solid var(--border-glass);margin:20px 0;" />';
      continue;
    }

    // Paragraph
    out += '<p>' + formatInline(processed) + '</p>';
  }

  flushList();
  flushBlock();
  return out;
}

function formatInline(text) {
  // Bold
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Inline code
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color:var(--accent-cyan);text-decoration:none;">$1</a>');
  return text;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================
// TERMS DICTIONARY MODULE
// ============================
async function loadTerms() {
  if (termsData.length) return;
  try {
    if (typeof TERMS_DATA !== 'undefined') {
      termsData = TERMS_DATA;
    } else {
      const res = await fetch('./data_terms.json');
      termsData = await res.json();
    }
    // Clear loading placeholder
    const loadingEl = document.getElementById('terms-loading');
    if (loadingEl) loadingEl.remove();
    renderTerms(termsData);
  } catch (e) {
    console.error('Failed to load terms', e);
    document.getElementById('term-count').textContent = 'Failed to load terms.';
    document.getElementById('terms-grid').innerHTML = '<div class="no-results">Failed to load terms. Please check that data_terms.json exists.</div>';
  }
}

function renderTerms(list) {
  const grid = document.getElementById('terms-grid');
  const count = document.getElementById('term-count');
  grid.innerHTML = '';
  count.textContent = `Showing ${list.length} of ${termsData.length} terms`;

  list.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'term-card';
    card.style.animationDelay = (i * 0.02) + 's';
    card.innerHTML = `
      <div class="abbr">${escapeHtml(t.abbr)}</div>
      <div class="definition">${escapeHtml(t.term)}</div>
    `;
    card.onclick = () => openTermModal(t);
    grid.appendChild(card);
  });

  if (list.length === 0) {
    grid.innerHTML = '<div class="no-results">No matching terms found. Try a different search.</div>';
  }
}

function searchTerms(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    renderTerms(termsData);
    return;
  }
  const filtered = termsData.filter(t =>
    t.abbr.toLowerCase().includes(q) ||
    t.term.toLowerCase().includes(q)
  );
  renderTerms(filtered);
}

function openTermModal(term) {
  const modal = document.getElementById('term-modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="term-abbr">${escapeHtml(term.abbr)}</div>
    <div class="term-def">${escapeHtml(term.term)}</div>
  `;
  modal.classList.add('open');
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('term-modal')) {
    document.getElementById('term-modal').classList.remove('open');
  }
}

// ============================
// IFRAME WRAPPER
// ============================
function openIframe(url, title) {
  document.getElementById('exam-frame').src = url;
  document.getElementById('iframe-title').textContent = title || 'Practice Exam';
  switchView('iframe');
}

function closeIframe() {
  document.getElementById('exam-frame').src = '';
  switchView('practice');
}

// ============================
// THEME TOGGLE (Dark / Light)
// ============================
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  html.setAttribute('data-theme', theme);
  localStorage.setItem('sy0701-theme', theme);
  if (btn) {
    btn.innerHTML = theme === 'light' ? '&#9728;&#65039;' : '&#127769;';
    btn.title = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  }
}

function initTheme() {
  const saved = localStorage.getItem('sy0701-theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (prefersLight ? 'light' : 'dark');
  applyTheme(theme);
}

// ============================
// INIT
// ============================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});
