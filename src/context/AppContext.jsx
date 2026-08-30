import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import { mcqs } from '../data/mcqs';
import { keywordMaps } from '../data/keywordMaps';
import {
  getOrCreateCardState,
  rateCard as rateCardFn,
  getDueCards,
  getNewCards,
} from '../lib/cardState';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [, forceRender] = useState(0);

  const topics = useMemo(() => [...new Set(flashcards.map(c => c.deck))], []);
  const mcqTopics = useMemo(() => [...new Set(mcqs.map(q => q.topic))], []);

  const refresh = useCallback(() => forceRender(n => n + 1), []);

  const getCardState = useCallback((cardId) => getOrCreateCardState(cardId), []);

  const rateCard = useCallback((cardId, grade) => {
    const result = rateCardFn(cardId, grade);
    refresh();
    return result;
  }, [refresh]);

  const getDueCount = useCallback((cards) => getDueCards(cards).length, []);
  const getNewCount = useCallback((cards) => getNewCards(cards).length, []);

  const value = {
    flashcards,
    mcqs,
    keywordMaps,
    topics,
    mcqTopics,
    getCardState,
    rateCard,
    getDueCount,
    getNewCount,
    refresh,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
