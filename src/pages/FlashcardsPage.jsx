import { useState } from 'react';
import FlashCard from '../components/FlashCard';
import { flashcards as initialCards } from '../data/flashcards';

export default function FlashcardsPage() {
  const [cards, setCards] = useState(initialCards);
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showReviewOnly, setShowReviewOnly] = useState(false);

  const topics = ['all', ...new Set(cards.map(c => c.deck))];

  let displayCards = cards;

  // Filter by topic
  if (selectedTopic !== 'all') {
    displayCards = displayCards.filter(c => c.deck === selectedTopic);
  }

  // Filter by difficulty
  if (selectedDifficulty !== 'all') {
    displayCards = displayCards.filter(c => c.difficulty.toLowerCase() === selectedDifficulty);
  }

  // Filter by review status
  if (showReviewOnly) {
    displayCards = displayCards.filter(c => c.needsReview);
  }

  const handleToggleReview = (id) => {
    setCards(prev => prev.map(c =>
      c.id === id ? { ...c, needsReview: !c.needsReview } : c
    ));
  };

  return (
    <div className="page">
      <div className="filters">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="select"
        >
          {topics.map(topic => (
            <option key={topic} value={topic}>
              {topic === 'all' ? 'Tous les sujets' : topic}
            </option>
          ))}
        </select>

        <div className="difficulty-filters">
          <button
            onClick={() => setSelectedDifficulty('all')}
            className={`difficulty-filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedDifficulty('base')}
            className={`difficulty-filter-btn base ${selectedDifficulty === 'base' ? 'active' : ''}`}
          >
            Base
          </button>
          <button
            onClick={() => setSelectedDifficulty('junior')}
            className={`difficulty-filter-btn junior ${selectedDifficulty === 'junior' ? 'active' : ''}`}
          >
            Junior
          </button>
          <button
            onClick={() => setSelectedDifficulty('intermédiaire')}
            className={`difficulty-filter-btn intermédiaire ${selectedDifficulty === 'intermédiaire' ? 'active' : ''}`}
          >
            Inter
          </button>
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showReviewOnly}
            onChange={(e) => setShowReviewOnly(e.target.checked)}
          />
          <span>À revoir uniquement</span>
        </label>
      </div>

      <FlashCard
        cards={displayCards}
        topic="all"
        onToggleReview={handleToggleReview}
      />
    </div>
  );
}
