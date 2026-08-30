const KEYS = {
  CARD_STATES: 'learning-mcq-card-states',
  SESSIONS: 'learning-mcq-sessions',
  SETTINGS: 'learning-mcq-settings',
};

// LS security: availability check, prototype-pollution guard, type validation
function isStorageAvailable() {
  try {
    return typeof localStorage !== 'undefined' && localStorage !== null;
  } catch {
    return false;
  }
}

function isSafeKey(k) {
  return k !== '__proto__' && k !== 'constructor' && k !== 'prototype';
}

function sanitizeCardStates(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return {};
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (!isSafeKey(k)) continue;
    // allow only fc- / mcq- prefixed ids, basic shape check
    if (!(k.startsWith('fc-') || k.startsWith('mcq-'))) continue;
    if (!v || typeof v !== 'object') continue;
    out[k] = v;
  }
  return out;
}

function load(key) {
  if (!isStorageAvailable()) return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // type validation per key
    if (key === KEYS.CARD_STATES) return sanitizeCardStates(parsed);
    if (key === KEYS.SESSIONS) return Array.isArray(parsed) ? parsed : [];
    if (key === KEYS.SETTINGS) return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : null;
    return parsed;
  } catch {
    return null;
  }
}

function save(key, data) {
  if (!isStorageAvailable()) return;
  try {
    // sanitize before saving card states
    const toSave = key === KEYS.CARD_STATES ? sanitizeCardStates(data) : data;
    localStorage.setItem(key, JSON.stringify(toSave));
  } catch (e) {
    // QuotaExceededError or unavailable — fail silently, optionally log
    if (e && e.name === 'QuotaExceededError') {
      try { console.warn('[persistence] LS quota exceeded for', key); } catch (e2) { void e2; }
    }
  }
}

export function getCardStates() {
  return load(KEYS.CARD_STATES) || {};
}

export function setCardStates(states) {
  save(KEYS.CARD_STATES, states);
}

export function getCardState(cardId) {
  const states = getCardStates();
  return states[cardId] || null;
}

export function setCardState(cardId, state) {
  const states = getCardStates();
  states[cardId] = state;
  setCardStates(states);
}

export function getSessions() {
  return load(KEYS.SESSIONS) || [];
}

export function addSession(session) {
  const sessions = getSessions();
  sessions.push({ ...session, date: new Date().toISOString() });
  save(KEYS.SESSIONS, sessions);
}

export function clearProgress({ scope = 'all' } = {}) {
  try {
    if (scope === 'all') {
      localStorage.removeItem(KEYS.CARD_STATES);
      localStorage.removeItem(KEYS.SESSIONS);
    } else if (scope === 'flashcards') {
      const states = load(KEYS.CARD_STATES) || {};
      const filtered = Object.fromEntries(Object.entries(states).filter(([k]) => !k.startsWith('fc-')));
      save(KEYS.CARD_STATES, filtered);
    } else if (scope === 'mcq') {
      const states = load(KEYS.CARD_STATES) || {};
      const filtered = Object.fromEntries(Object.entries(states).filter(([k]) => !k.startsWith('mcq-')));
      save(KEYS.CARD_STATES, filtered);
    }
    if (scope !== 'all') {
      // Scoped clear: card states are filtered above (fc- vs mcq-).
      // Sessions now share modes (review/learn) for both, so we keep all history
      // instead of filtering by mode (legacy mock distinction removed with 58fe3cb).
    }
  } catch (e) {
    void e;
  }
}

export function clearFlashcardsProgress() { return clearProgress({ scope: 'flashcards' }); }
export function clearMcqProgress() { return clearProgress({ scope: 'mcq' }); }

export function getSettings() {
  return load(KEYS.SETTINGS) || {
    sessionSize: 15,
    targetRetention: 0.9,
    showTimer: false,
  };
}

export function setSettings(settings) {
  save(KEYS.SETTINGS, settings);
}
