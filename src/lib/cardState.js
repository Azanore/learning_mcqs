import { getCardStates, setCardStates } from './persistence';
import { createNewCardState, reviewCard, getRetrievability, isDue, RATING } from './fsrs';

export function peekCardState(cardId) {
  const states = getCardStates();
  return states[cardId] || null;
}

export function getOrCreateCardState(cardId) {
  const states = getCardStates();
  if (states[cardId]) return states[cardId];
  const newState = createNewCardState();
  states[cardId] = newState;
  setCardStates(states);
  return newState;
}

export function rateCard(cardId, grade) {
  const states = getCardStates();
  const current = states[cardId] || createNewCardState();
  const updated = reviewCard(current, grade);
  states[cardId] = updated;
  setCardStates(states);
  return updated;
}

export function getAllCardStates() {
  return getCardStates();
}

export function getDueCards(allCards, now = new Date()) {
  const states = getCardStates();
  return allCards.filter(card => {
    const state = states[card.id];
    if (!state) return false;
    return isDue(state, now);
  });
}

export function getCardRetrievability(cardId) {
  const states = getCardStates();
  const state = states[cardId];
  if (!state) return 1.0;
  return getRetrievability(state);
}

export function getWeakCards(allCards, threshold = 0.7) {
  const states = getCardStates();
  return allCards.filter(card => {
    const state = states[card.id];
    if (!state) return false;
    const r = getRetrievability(state);
    return r < threshold;
  });
}

export function getNewCards(allCards) {
  const states = getCardStates();
  return allCards.filter(card => !states[card.id]);
}

export function getReviewedCards(allCards) {
  const states = getCardStates();
  return allCards.filter(card => states[card.id]);
}

export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function buildSession(allCards, { mode = 'review', size = 15, topic = 'all', topics = null, difficulty = 'all', difficulties = null } = {}) {
  let pool = allCards;

  // legacy single values + new multi-select arrays (localStorage checkboxes)
  const topicList = topics || (topic !== 'all' ? [topic] : null);
  const diffList = difficulties || (difficulty !== 'all' ? [difficulty] : null);

  if (topicList && topicList.length > 0) {
    pool = pool.filter(c => topicList.includes(c.deck) || topicList.includes(c.topic));
  }
  if (diffList && diffList.length > 0) {
    const lower = diffList.map(d => d.toLowerCase());
    pool = pool.filter(c => lower.includes(c.difficulty.toLowerCase()));
  }

  let selected = [];

  if (mode === 'review') {
    const due = getDueCards(pool);
    // Keep due-date priority: most overdue first, then shuffle only the top candidate window
    const states = getCardStates();
    due.sort((a, b) => {
      const sa = states[a.id];
      const sb = states[b.id];
      if (!sa) return -1;
      if (!sb) return 1;
      return new Date(sa.due) - new Date(sb.due);
    });
    const window = due.slice(0, Math.max(size * 2, size));
    selected = shuffleArray(window).slice(0, size);
  } else if (mode === 'learn') {
    const newCards = getNewCards(pool);
    selected = shuffleArray(newCards).slice(0, size);
  } else if (mode === 'mock') {
    selected = shuffleArray(pool).slice(0, size);
  }

  return selected;
}
