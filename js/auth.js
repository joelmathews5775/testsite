/**
 * Auth — real client-side sign-up/login/logout via email + password.
 *
 * There's no server here, so "the database" is this browser's
 * localStorage. Passwords are never stored in the clear: each one is
 * run through PBKDF2 (WebCrypto, 150,000 iterations, SHA-256, a
 * random salt per account) and only the derived hash + salt are
 * saved. That's a legitimate hashing scheme, but it's still only as
 * safe as the browser it's stored in — there's no server-side
 * account recovery, no rate limiting, and accounts don't sync across
 * browsers or devices. Treat this as a real demo of the flow, not
 * production-grade auth.
 *
 * A successful sign-up or login ends with a "session" object
 * (name + email) saved in localStorage, which the rest of the app
 * reads to decide what's signed in and whose saved-briefs list to
 * use.
 */
const Auth = (function () {
  const ACCOUNTS_KEY = 'draftedux_accounts';
  const SESSION_KEY = 'draftedux_session';
  const PBKDF2_ITERATIONS = 150000;

  // ---------------------------------------------------------
  // Byte/base64 helpers
  // ---------------------------------------------------------
  function bytesToBase64(bytes) {
    let binary = '';
    bytes.forEach(function (b) { binary += String.fromCharCode(b); });
    return btoa(binary);
  }

  function base64ToBytes(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  // ---------------------------------------------------------
  // Password hashing (PBKDF2-SHA256 via WebCrypto)
  // ---------------------------------------------------------
  async function deriveHash(password, saltBytes) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveBits']
    );
    const bits = await crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt: saltBytes, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
      keyMaterial,
      256
    );
    return bytesToBase64(new Uint8Array(bits));
  }

  async function hashNewPassword(password) {
    const saltBytes = crypto.getRandomValues(new Uint8Array(16));
    const hash = await deriveHash(password, saltBytes);
    return { hash, salt: bytesToBase64(saltBytes) };
  }

  async function verifyPassword(password, storedHash, storedSaltBase64) {
    const saltBytes = base64ToBytes(storedSaltBase64);
    const hash = await deriveHash(password, saltBytes);
    return hash === storedHash;
  }

  // ---------------------------------------------------------
  // Account storage
  // ---------------------------------------------------------
  function getAccounts() {
    try {
      const raw = localStorage.getItem(ACCOUNTS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      return {};
    }
  }

  function setAccounts(accounts) {
    try {
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
    } catch (err) {
      /* ignore storage failures */
    }
  }

  // ---------------------------------------------------------
  // Session
  // ---------------------------------------------------------
  function getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function setSession(session) {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (err) {
      /* ignore storage failures */
    }
    document.dispatchEvent(new CustomEvent('draftedux:authchange', { detail: { session } }));
  }

  function isSignedIn() {
    return !!getSession();
  }

  function logout() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (err) {
      /* ignore storage failures */
    }
    document.dispatchEvent(new CustomEvent('draftedux:authchange', { detail: { session: null } }));
  }

  // ---------------------------------------------------------
  // Email + password sign-up / login
  //
  // The sign-up form only collects an email and password (no name
  // field), so the display name shown around the site is derived
  // from the email's local part — "ada.lovelace@x.com" becomes
  // "Ada Lovelace". It's computed fresh each time rather than
  // stored, so accounts only need to keep a hash and salt.
  // ---------------------------------------------------------
  function deriveNameFromEmail(email) {
    const local = email.split('@')[0] || email;
    return local
      .split(/[._-]+/)
      .filter(Boolean)
      .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
      .join(' ') || email;
  }

  async function signUp(email, password) {
    const emailKey = email.trim().toLowerCase();
    const accounts = getAccounts();

    if (accounts[emailKey]) {
      throw new Error('An account with that email already exists. Try logging in instead.');
    }

    const { hash, salt } = await hashNewPassword(password);
    accounts[emailKey] = { hash, salt };
    setAccounts(accounts);

    const session = { name: deriveNameFromEmail(emailKey), email: emailKey, provider: 'password' };
    setSession(session);
    return session;
  }

  async function login(email, password) {
    const emailKey = email.trim().toLowerCase();
    const accounts = getAccounts();
    const account = accounts[emailKey];

    if (!account) {
      throw new Error('No account found for that email. Try signing up instead.');
    }

    const ok = await verifyPassword(password, account.hash, account.salt);
    if (!ok) {
      throw new Error('Incorrect password. Please try again.');
    }

    const session = { name: deriveNameFromEmail(emailKey), email: emailKey, provider: 'password' };
    setSession(session);
    return session;
  }

  return {
    getSession,
    isSignedIn,
    logout,
    signUp,
    login
  };
})();
