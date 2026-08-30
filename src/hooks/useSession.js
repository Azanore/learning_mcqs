import { useState, useCallback } from 'react';
import { buildSession } from '../lib/cardState';
import { addSession } from '../lib/persistence';

export function useSession(allCards) {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState(null);
  const [stats, setStats] = useState({ reviewed: 0, correct: 0, startTime: null });
  const [topic, setTopic] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  const start = useCallback((sessionMode, options = {}) => {
    const filteredCards = buildSession(allCards, {
      mode: sessionMode,
      topic: options.topic || topic,
      topics: options.topics,
      difficulty: options.difficulty || difficulty,
      difficulties: options.difficulties,
      size: options.size || 15,
    });
    setCards(filteredCards);
    setCurrentIndex(0);
    setMode(sessionMode);
    setStats({ reviewed: 0, correct: 0, startTime: Date.now() });
    if (options.topics) setTopic('all');
    else if (options.topic) setTopic(options.topic);
    if (options.difficulties) setDifficulty('all');
    else if (options.difficulty) setDifficulty(options.difficulty);
    return filteredCards;
  }, [allCards, topic, difficulty]);

  const advance = useCallback(() => {
    setCurrentIndex(prev => prev + 1);
  }, []);

  const rate = useCallback((grade) => {
    setStats(prev => ({
      ...prev,
      reviewed: prev.reviewed + 1,
      correct: prev.correct + (grade >= 3 ? 1 : 0),
    }));
  }, []);

  const end = useCallback(() => {
    if (stats.reviewed > 0) {
      addSession({
        mode,
        cardsReviewed: stats.reviewed,
        correct: stats.correct,
        timeSpent: Math.round((Date.now() - stats.startTime) / 1000),
        totalCards: cards.length,
        topic,
        difficulty,
      });
    }
    setCards([]);
    setCurrentIndex(0);
    setMode(null);
    setStats({ reviewed: 0, correct: 0, startTime: null });
  }, [stats, mode, cards, topic, difficulty]);

  const currentCard = cards[currentIndex] || null;
  const isComplete = currentIndex >= cards.length && cards.length > 0;
  const progress = cards.length > 0 ? currentIndex / cards.length : 0;

  return {
    cards,
    currentIndex,
    currentCard,
    mode,
    stats,
    topic,
    difficulty,
    isComplete,
    progress,
    start,
    advance,
    rate,
    end,
    setTopic,
    setDifficulty,
  };
}
