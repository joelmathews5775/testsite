(function () {
  'use strict';

  // ---------------------------------------------------------
  // Elements
  // ---------------------------------------------------------
  const skillSelect = document.getElementById('skill-select');
  const platformSelect = document.getElementById('platform-select');
  const generatorForm = document.getElementById('generator-form');
  const anotherBtn = document.getElementById('another-btn');
  const resultRegion = document.getElementById('result-region');
  const savedRegion = document.getElementById('saved-region');
  const accountBtn = document.getElementById('account-btn');
  const toastEl = document.getElementById('toast');

  const signinOverlay = document.getElementById('signin-overlay');
  const signinModal = document.getElementById('signin-modal');
  const signinTitle = document.getElementById('signin-title');
  const signinSubtitle = document.getElementById('signin-subtitle');

  const loginForm = document.getElementById('login-form');
  const loginEmailInput = document.getElementById('login-email');
  const loginPasswordInput = document.getElementById('login-password');
  const signinError = document.getElementById('signin-error');

  const signupForm = document.getElementById('signup-form');
  const signupEmailInput = document.getElementById('signup-email');
  const signupPasswordInput = document.getElementById('signup-password');
  const signupConfirmInput = document.getElementById('signup-confirm');
  const signupError = document.getElementById('signup-error');

  const signinClose = document.getElementById('signin-close');
  const signinCancel = document.getElementById('signin-cancel');
  const signupCancel = document.getElementById('signup-cancel');
  const signinModeToggle = document.getElementById('signin-mode-toggle');

  const FILTER_STORAGE_KEY = 'draftedux_filters';
  const CURRENT_STORAGE_KEY = 'draftedux_current_ticket';

  // Password toggle icon markup — swapped in/out of a single <svg>
  // per field, rather than showing/hiding two separate icons, so
  // there's never a moment where both are present at once.
  const EYE_ICON_MARKUP =
    '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>' +
    '<circle cx="12" cy="12" r="3"></circle>';
  const EYE_OFF_ICON_MARKUP =
    '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a18.6 18.6 0 0 1 4.22-5.06M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 7 11 7a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>' +
    '<line x1="1" y1="1" x2="23" y2="23"></line>';

  let currentBrief = null;
  let currentDateStr = null;
  let lastTicketId = null;
  let pendingSaveTicketId = null;
  let lastFocusedBeforeModal = null;
  let toastTimer = null;
  let modalMode = 'login';

  // ---------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function todayLabel() {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(new Date());
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.hidden = true;
    }, 3200);
  }

  function uniqueSorted(list) {
    return Array.from(new Set(list)).sort();
  }

  // ---------------------------------------------------------
  // Populate platform select from the data itself
  // ---------------------------------------------------------
  function initFilterOptions() {
    const platforms = uniqueSorted(PROJECT_BRIEFS.map(function (b) { return b.platform; }));
    platforms.forEach(function (p) {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      platformSelect.appendChild(opt);
    });
  }

  function restoreFilters() {
    try {
      const raw = sessionStorage.getItem(FILTER_STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved.skill) skillSelect.value = saved.skill;
      if (saved.platform) platformSelect.value = saved.platform;
    } catch (err) {
      /* ignore */
    }
  }

  function persistFilters() {
    try {
      sessionStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify({
        skill: skillSelect.value,
        platform: platformSelect.value
      }));
    } catch (err) {
      /* ignore */
    }
  }

  // ---------------------------------------------------------
  // Brief selection
  // ---------------------------------------------------------
  function getFilteredPool() {
    const skill = skillSelect.value;
    const platform = platformSelect.value;
    return PROJECT_BRIEFS.filter(function (b) {
      const skillMatch = skill === 'any' || b.difficulty === skill;
      const platformMatch = platform === 'any' || b.platform === platform;
      return skillMatch && platformMatch;
    });
  }

  function pickBrief(pool) {
    if (pool.length === 0) return null;
    if (pool.length === 1) return pool[0];
    let choice;
    let attempts = 0;
    do {
      choice = pool[Math.floor(Math.random() * pool.length)];
      attempts += 1;
    } while (choice.ticketId === lastTicketId && attempts < 10);
    return choice;
  }

  // ---------------------------------------------------------
  // Rendering the ticket
  // ---------------------------------------------------------
  function listItems(items) {
    return items.map(function (item) {
      return '<li>' + escapeHtml(item) + '</li>';
    }).join('');
  }

  function tagList(items) {
    return items.map(function (item) {
      return '<span class="tag">' + escapeHtml(item) + '</span>';
    }).join('');
  }

  function isSaved(ticketId) {
    if (!Auth.isSignedIn()) return false;
    const saved = getSavedList();
    return saved.some(function (item) { return item.ticketId === ticketId; });
  }

  function renderTicket(brief, dateStr) {
    const saved = isSaved(brief.ticketId);

    resultRegion.innerHTML =
      '<div class="ticket" id="ticket-card" tabindex="-1">' +
        '<div class="ticket__stub">' +
          '<span class="ticket__id">Ticket ' + escapeHtml(brief.ticketId) + ' &middot; opened ' + escapeHtml(dateStr) + '</span>' +
          '<span class="ticket__stamp">Open</span>' +
        '</div>' +
        '<div class="ticket__body">' +
          '<div class="ticket__title-row">' +
            '<h3 class="ticket__title">' + escapeHtml(brief.title) + '</h3>' +
          '</div>' +
          '<div class="ticket__tags">' +
            '<span class="tag">' + escapeHtml(brief.difficulty) + '</span>' +
            '<span class="tag">' + escapeHtml(brief.platform) + '</span>' +
            '<span class="tag">' + escapeHtml(brief.industry) + '</span>' +
          '</div>' +
          '<p class="ticket__overview">' + escapeHtml(brief.overview) + '</p>' +
          '<div class="ticket__grid">' +
            '<div class="ticket__block">' +
              '<h3>Problem to solve</h3>' +
              '<p>' + escapeHtml(brief.problemToSolve) + '</p>' +
            '</div>' +
            '<div class="ticket__block">' +
              '<h3>Target users</h3>' +
              '<p>' + escapeHtml(brief.targetUsers) + '</p>' +
            '</div>' +
            '<div class="ticket__block">' +
              '<h3>Key screens</h3>' +
              '<ol>' + listItems(brief.keyScreens) + '</ol>' +
            '</div>' +
            '<div class="ticket__block">' +
              '<h3>Constraints</h3>' +
              '<ul>' + listItems(brief.constraints) + '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="ticket__block ticket__block--stack">' +
            '<h3>Deliverables</h3>' +
            '<ul>' + listItems(brief.deliverables) + '</ul>' +
          '</div>' +
          '<div class="ticket__block ticket__block--stack">' +
            '<h3>Skills you\u2019ll practice</h3>' +
            '<div class="ticket__tags">' + tagList(brief.skillsPracticed) + '</div>' +
          '</div>' +
          '<div class="ticket__meta-strip">' +
            '<div class="meta-item"><span class="meta-label">Estimated time</span><span class="meta-value">' + escapeHtml(brief.estimatedTime) + '</span></div>' +
          '</div>' +
          '<div class="ticket__actions">' +
            '<button type="button" class="btn btn--primary" id="save-btn" aria-pressed="' + saved + '">' +
              (saved ? 'Saved to your list' : 'Save to my list') +
            '</button>' +
            '<button type="button" class="btn btn--ghost" id="copy-btn">Copy brief as text</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    anotherBtn.hidden = false;

    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', function () { handleSaveClick(brief, dateStr); });

    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', function () { handleCopyClick(brief, dateStr); });
  }

  function renderEmpty(message) {
    resultRegion.innerHTML =
      '<div class="empty-state" id="empty-state">' +
        '<h3>No matching brief</h3>' +
        '<p>' + escapeHtml(message) + '</p>' +
      '</div>';
    anotherBtn.hidden = true;
  }

  function generate() {
    const pool = getFilteredPool();
    const brief = pickBrief(pool);
    persistFilters();

    if (!brief) {
      currentBrief = null;
      currentDateStr = null;
      renderEmpty('There\u2019s no brief for that exact combination yet. Try a different platform or skill level.');
      return;
    }

    lastTicketId = brief.ticketId;
    currentBrief = brief;
    currentDateStr = todayLabel();
    renderTicket(brief, currentDateStr);

    try {
      sessionStorage.setItem(CURRENT_STORAGE_KEY, JSON.stringify({
        ticketId: brief.ticketId,
        dateStr: currentDateStr
      }));
    } catch (err) {
      /* ignore */
    }

    const card = document.getElementById('ticket-card');
    if (card) card.focus({ preventScroll: false });
  }

  function restoreCurrentTicket() {
    try {
      const raw = sessionStorage.getItem(CURRENT_STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      const brief = PROJECT_BRIEFS.find(function (b) { return b.ticketId === saved.ticketId; });
      if (!brief) return;
      currentBrief = brief;
      currentDateStr = saved.dateStr;
      lastTicketId = brief.ticketId;
      renderTicket(brief, saved.dateStr);
    } catch (err) {
      /* ignore */
    }
  }

  // ---------------------------------------------------------
  // Save to portfolio list (per signed-in user)
  // ---------------------------------------------------------
  function savedKeyFor(email) {
    return 'draftedux_saved_' + email;
  }

  function getSavedList() {
    const session = Auth.getSession();
    if (!session) return [];
    try {
      const raw = localStorage.getItem(savedKeyFor(session.email));
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  }

  function setSavedList(list) {
    const session = Auth.getSession();
    if (!session) return;
    try {
      localStorage.setItem(savedKeyFor(session.email), JSON.stringify(list));
    } catch (err) {
      /* ignore */
    }
  }

  function saveBrief(brief, dateStr) {
    const list = getSavedList();
    if (list.some(function (item) { return item.ticketId === brief.ticketId; })) return;
    list.unshift({
      ticketId: brief.ticketId,
      title: brief.title,
      difficulty: brief.difficulty,
      platform: brief.platform,
      savedDate: dateStr
    });
    setSavedList(list);
  }

  function removeSavedBrief(ticketId) {
    const list = getSavedList().filter(function (item) { return item.ticketId !== ticketId; });
    setSavedList(list);
    renderSavedSection();
    if (currentBrief && currentBrief.ticketId === ticketId) {
      renderTicket(currentBrief, currentDateStr);
    }
    showToast('Removed from your saved list.');
  }

  function handleSaveClick(brief, dateStr) {
    if (!Auth.isSignedIn()) {
      pendingSaveTicketId = brief.ticketId;
      openSigninModal('login');
      return;
    }
    saveBrief(brief, dateStr);
    renderTicket(brief, dateStr);
    renderSavedSection();
    showToast('Saved \u201c' + brief.title + '\u201d to your list.');
  }

  function handleCopyClick(brief, dateStr) {
    const text =
      brief.title + ' (' + brief.ticketId + ')\n' +
      brief.difficulty + ' \u00b7 ' + brief.platform + ' \u00b7 ' + brief.industry + '\n' +
      'Opened ' + dateStr + '\n\n' +
      'Overview\n' + brief.overview + '\n\n' +
      'Problem to solve\n' + brief.problemToSolve + '\n\n' +
      'Target users\n' + brief.targetUsers + '\n\n' +
      'Key screens\n' + brief.keyScreens.map(function (s, i) { return (i + 1) + '. ' + s; }).join('\n') + '\n\n' +
      'Constraints\n' + brief.constraints.map(function (s) { return '- ' + s; }).join('\n') + '\n\n' +
      'Deliverables\n' + brief.deliverables.map(function (s) { return '- ' + s; }).join('\n') + '\n\n' +
      'Skills practiced: ' + brief.skillsPracticed.join(', ') + '\n' +
      'Estimated time: ' + brief.estimatedTime + '\n';

    copyToClipboard(text).then(function () {
      showToast('Brief copied to your clipboard.');
    }).catch(function () {
      showToast('Could not copy automatically \u2014 select and copy the text manually.');
    });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  // ---------------------------------------------------------
  // Saved section rendering
  // ---------------------------------------------------------
  function renderSavedSection() {
    if (!Auth.isSignedIn()) {
      savedRegion.innerHTML =
        '<div class="signed-out-panel">' +
          '<p>Log in to keep a running list of the briefs you plan to design.</p>' +
          '<button type="button" class="btn btn--primary" id="saved-signin-btn">Log in</button>' +
        '</div>';
      const btn = document.getElementById('saved-signin-btn');
      btn.addEventListener('click', function () { openSigninModal('login'); });
      return;
    }

    const list = getSavedList();
    if (list.length === 0) {
      savedRegion.innerHTML =
        '<div class="empty-state">' +
          '<h3>Nothing saved yet</h3>' +
          '<p>Generate a brief above and select "Save to my list" to add it here.</p>' +
        '</div>';
      return;
    }

    savedRegion.innerHTML = '<div class="saved-list">' +
      list.map(function (item) {
        return '<div class="saved-item">' +
          '<div class="saved-item__info">' +
            '<span class="saved-item__title">' + escapeHtml(item.title) + '</span>' +
            '<span class="saved-item__meta">' + escapeHtml(item.ticketId) + ' \u00b7 ' + escapeHtml(item.difficulty) + ' \u00b7 ' + escapeHtml(item.platform) + ' \u00b7 saved ' + escapeHtml(item.savedDate) + '</span>' +
          '</div>' +
          '<div class="saved-item__actions">' +
            '<button type="button" class="btn btn--ghost btn--small" data-view="' + escapeHtml(item.ticketId) + '">View</button>' +
            '<button type="button" class="btn btn--ghost btn--small" data-remove="' + escapeHtml(item.ticketId) + '">Remove</button>' +
          '</div>' +
        '</div>';
      }).join('') +
      '</div>';

    savedRegion.querySelectorAll('[data-view]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const ticketId = btn.getAttribute('data-view');
        const brief = PROJECT_BRIEFS.find(function (b) { return b.ticketId === ticketId; });
        const item = list.find(function (i) { return i.ticketId === ticketId; });
        if (!brief) return;
        currentBrief = brief;
        currentDateStr = item ? item.savedDate : todayLabel();
        lastTicketId = brief.ticketId;
        renderTicket(brief, currentDateStr);
        document.getElementById('result-heading').scrollIntoView({ block: 'start' });
      });
    });

    savedRegion.querySelectorAll('[data-remove]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        removeSavedBrief(btn.getAttribute('data-remove'));
      });
    });
  }

  // ---------------------------------------------------------
  // Log in / sign up modal
  // ---------------------------------------------------------
  function getFocusableInModal() {
    return Array.from(signinModal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (el) { return el.offsetParent !== null || el === document.activeElement; });
  }

  function setModalMode(mode) {
    modalMode = mode;
    signinError.textContent = '';
    signupError.textContent = '';

    if (mode === 'signup') {
      signinTitle.textContent = 'Create your account';
      signinSubtitle.textContent = 'Sign up to keep a running list of the briefs you plan to design.';
      loginForm.hidden = true;
      signupForm.hidden = false;
      signinModeToggle.innerHTML = 'Already have an account? <span class="modal-alt-action__emph">Log in</span>';
    } else {
      signinTitle.textContent = 'Log in to DRAFTED UX';
      signinSubtitle.textContent = 'Log in to keep a running list of the briefs you plan to design.';
      loginForm.hidden = false;
      signupForm.hidden = true;
      signinModeToggle.innerHTML = 'New here? <span class="modal-alt-action__emph">Create an account</span>';
    }
  }

  function setPasswordToggleIcon(btn, masked) {
    const svg = btn.querySelector('.password-toggle-icon');
    if (svg) svg.innerHTML = masked ? EYE_ICON_MARKUP : EYE_OFF_ICON_MARKUP;
  }

  function resetPasswordVisibility() {
    document.querySelectorAll('.password-toggle').forEach(function (btn) {
      const input = document.getElementById(btn.getAttribute('data-target'));
      if (input) input.type = 'password';
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', 'Show password');
      setPasswordToggleIcon(btn, true);
    });
  }

  function openSigninModal(mode) {
    lastFocusedBeforeModal = document.activeElement;
    signinOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    loginForm.reset();
    signupForm.reset();
    resetPasswordVisibility();
    setModalMode(mode || 'login');
    (mode === 'signup' ? signupEmailInput : loginEmailInput).focus();
    document.addEventListener('keydown', handleModalKeydown, true);
  }

  function closeSigninModal() {
    signinOverlay.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleModalKeydown, true);
    pendingSaveTicketId = null;
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
      lastFocusedBeforeModal.focus();
    }
  }

  function handleModalKeydown(e) {
    if (signinOverlay.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSigninModal();
      return;
    }
    if (e.key === 'Tab') {
      const focusable = getFocusableInModal();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function finishSignin(session, successMessage) {
    const ticketToSave = pendingSaveTicketId; // capture before closeSigninModal() clears it
    closeSigninModal();
    updateAccountUI();
    renderSavedSection();

    if (ticketToSave && currentBrief && currentBrief.ticketId === ticketToSave) {
      saveBrief(currentBrief, currentDateStr);
      renderTicket(currentBrief, currentDateStr);
      renderSavedSection();
      showToast('Logged in and saved \u201c' + currentBrief.title + '\u201d.');
    } else {
      showToast(successMessage);
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value;

    if (!email || !password) {
      signinError.textContent = 'Enter both an email and a password.';
      return;
    }

    const submitBtn = loginForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    signinError.textContent = '';

    try {
      const session = await Auth.login(email, password);
      finishSignin(session, 'Logged in as ' + session.name + '.');
    } catch (err) {
      signinError.textContent = err.message || 'Something went wrong. Please try again.';
    } finally {
      submitBtn.disabled = false;
    }
  }

  async function handleSignupSubmit(e) {
    e.preventDefault();
    const email = signupEmailInput.value.trim();
    const password = signupPasswordInput.value;
    const confirm = signupConfirmInput.value;

    if (!email || !password || !confirm) {
      signupError.textContent = 'Fill in every field to create your account.';
      return;
    }
    if (password.length < 8) {
      signupError.textContent = 'Use a password with at least 8 characters.';
      signupPasswordInput.focus();
      return;
    }
    if (password !== confirm) {
      signupError.textContent = 'Those passwords don\u2019t match.';
      signupConfirmInput.focus();
      return;
    }

    const submitBtn = signupForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    signupError.textContent = '';

    try {
      const session = await Auth.signUp(email, password);
      finishSignin(session, 'Account created \u2014 logged in as ' + session.name + '.');
    } catch (err) {
      signupError.textContent = err.message || 'Something went wrong. Please try again.';
    } finally {
      submitBtn.disabled = false;
    }
  }

  // ---------------------------------------------------------
  // Account button
  // ---------------------------------------------------------
  function updateAccountUI() {
    const session = Auth.getSession();
    if (session) {
      accountBtn.textContent = 'Log out (' + session.name + ')';
      accountBtn.title = 'Logged in as ' + session.name + ' (' + session.email + ')';
    } else {
      accountBtn.textContent = 'Log in';
      accountBtn.removeAttribute('title');
    }
  }

  function handleAccountClick() {
    if (Auth.isSignedIn()) {
      Auth.logout();
      updateAccountUI();
      renderSavedSection();
      if (currentBrief) renderTicket(currentBrief, currentDateStr);
      showToast('Logged out.');
    } else {
      openSigninModal('login');
    }
  }

  // ---------------------------------------------------------
  // Password visibility toggles
  // ---------------------------------------------------------
  function initPasswordToggles() {
    document.querySelectorAll('.password-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        if (!input) return;

        const wasMasked = input.type === 'password';
        input.type = wasMasked ? 'text' : 'password';
        const nowMasked = !wasMasked;

        // Masked -> show the "eye" icon (click to reveal).
        // Plaintext -> show the "eye-off" icon (click to hide).
        btn.setAttribute('aria-pressed', String(!nowMasked));
        btn.setAttribute('aria-label', nowMasked ? 'Show password' : 'Hide password');
        setPasswordToggleIcon(btn, nowMasked);

        input.focus();
      });
    });
  }

  // ---------------------------------------------------------
  // Wire everything up
  // ---------------------------------------------------------
  function init() {
    initFilterOptions();
    restoreFilters();
    updateAccountUI();
    renderSavedSection();
    restoreCurrentTicket();
    initPasswordToggles();

    generatorForm.addEventListener('submit', function (e) {
      e.preventDefault();
      generate();
    });

    anotherBtn.addEventListener('click', generate);
    accountBtn.addEventListener('click', handleAccountClick);

    loginForm.addEventListener('submit', handleLoginSubmit);
    signupForm.addEventListener('submit', handleSignupSubmit);
    signinClose.addEventListener('click', closeSigninModal);
    signinCancel.addEventListener('click', closeSigninModal);
    signupCancel.addEventListener('click', closeSigninModal);
    signinModeToggle.addEventListener('click', function () {
      setModalMode(modalMode === 'signup' ? 'login' : 'signup');
      (modalMode === 'signup' ? signupEmailInput : loginEmailInput).focus();
    });
    signinOverlay.addEventListener('click', function (e) {
      if (e.target === signinOverlay) closeSigninModal();
    });

    document.addEventListener('draftedux:authchange', function () {
      updateAccountUI();
      renderSavedSection();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
