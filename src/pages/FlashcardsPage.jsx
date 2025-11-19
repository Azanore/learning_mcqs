import { useState } from 'react';
import FlashCard from '../components/FlashCard';
import { flashcards as initialCards } from '../data/flashcards';

export default function FlashcardsPage() {
  const [cards, setCards] = useState(initialCards);
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showReviewOnly, setShowReviewOnly] = useState(false);

  const topics = ['all', ...new Set(cards.map(c => c.deck))];

  const displayCards = showReviewOnly
    ? cards.filter(c => c.needsReview)
    : cards;

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
        topic={selectedTopic}
        onToggleReview={handleToggleReview}
      />
    </div>
  );
}
