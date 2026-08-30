const KEYS = {
  CARD_STATES: 'learning-mcq-card-states',
  SESSIONS: 'learning-mcq-sessions',
  SETTINGS: 'learning-mcq-settings',
};

function load(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable
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
      // also prune sessions by mode if present
      const sessions = load(KEYS.SESSIONS) || [];
      const keep = sessions.filter(s => {
        if (scope === 'flashcards') return s.mode === 'mock';
        if (scope === 'mcq') return s.mode !== 'mock';
        return true;
      });
      save(KEYS.SESSIONS, keep);
    }
  } catch {
    // ignore
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
