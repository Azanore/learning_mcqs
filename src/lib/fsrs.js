import { createEmptyCard, fsrs, Rating } from 'ts-fsrs';

const scheduler = fsrs({
  request_retention: 0.9,
  maximum_interval: 36500,
  enable_fuzz: true,
  enable_short_term: true,
  learning_steps: ['1m', '10m'],
  relearning_steps: ['10m'],
});

export function createNewCardState(now = new Date()) {
  const card = createEmptyCard(now);
  return {
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    due: card.due.toISOString(),
    last_review: null,
    reviewHistory: [],
  };
}

export function reviewCard(cardState, grade, now = new Date()) {
  const card = {
    stability: cardState.stability,
    difficulty: cardState.difficulty,
    elapsed_days: cardState.elapsed_days,
    scheduled_days: cardState.scheduled_days,
    reps: cardState.reps,
    lapses: cardState.lapses,
    state: cardState.state,
    due: new Date(cardState.due),
    last_review: cardState.last_review ? new Date(cardState.last_review) : null,
  };

  const result = scheduler.next(card, now, grade);
  const updated = result.card;

  // Oublié/Difficile must be available on next session same day, not next day.
  // FSRS gives 1m/10m — not available if you relaunch instantly.
  // Override to now so isDue() is true on next buildSession.
  if (grade === Rating.Again || grade === Rating.Hard) {
    updated.due = new Date(now);
  }

  return {
    stability: updated.stability,
    difficulty: updated.difficulty,
    elapsed_days: updated.elapsed_days,
    scheduled_days: updated.scheduled_days,
    reps: updated.reps,
    lapses: updated.lapses,
    state: updated.state,
    due: updated.due.toISOString(),
    last_review: now.toISOString(),
    reviewHistory: [
      ...(cardState.reviewHistory || []),
      { rating: grade, timestamp: now.toISOString() },
    ],
  };
}

export function getRetrievability(cardState, now = new Date()) {
  const card = {
    stability: cardState.stability,
    difficulty: cardState.difficulty,
    elapsed_days: cardState.elapsed_days,
    scheduled_days: cardState.scheduled_days,
    reps: cardState.reps,
    lapses: cardState.lapses,
    state: cardState.state,
    due: new Date(cardState.due),
    last_review: cardState.last_review ? new Date(cardState.last_review) : null,
  };
  return scheduler.get_retrievability(card, now, false);
}

export function isDue(cardState, now = new Date()) {
  return new Date(cardState.due) <= now;
}

export function previewIntervals(cardState, now = new Date()) {
  const base = cardState ? {
    stability: cardState.stability,
    difficulty: cardState.difficulty,
    elapsed_days: cardState.elapsed_days,
    scheduled_days: cardState.scheduled_days,
    reps: cardState.reps,
    lapses: cardState.lapses,
    state: cardState.state,
    due: new Date(cardState.due),
    last_review: cardState.last_review ? new Date(cardState.last_review) : null,
  } : null;

  const empty = !base ? createEmptyCard(now) : null;
  const grades = [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy];
  const out = {};
  for (const g of grades) {
    const card = base || empty;
    // clone to avoid mutation
    const clone = { ...card, due: new Date(card.due), last_review: card.last_review ? new Date(card.last_review) : null };
    const res = scheduler.next(clone, now, g);
    const due = res.card.due;
    const diffMs = due - now;
    out[g] = { due, intervalMs: diffMs, label: formatInterval(diffMs) };
  }
  return out;
}

function formatInterval(ms) {
  const sec = Math.round(ms / 1000);
  if (sec < 60) return `${sec}s`;
  const min = Math.round(sec / 60);
  if (min < 60) return `${min} min`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h`;
  const days = Math.round(hr / 24);
  if (days < 30) return `${days}j`;
  const mo = Math.round(days / 30);
  if (mo < 12) return `${mo} mois`;
  const yr = (days / 365).toFixed(1);
  return `${yr} an${parseFloat(yr) >= 2 ? 's' : ''}`;
}

export const RATING = {
  Again: Rating.Again,
  Hard: Rating.Hard,
  Good: Rating.Good,
  Easy: Rating.Easy,
};

export { Rating };
