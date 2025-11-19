import { useState } from 'react';
import { RotateCw, ChevronLeft, ChevronRight, Flag } from 'lucide-react';

export default function FlashCard({ cards = [], topic, onToggleReview }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const filteredCards = topic === 'all'
    ? cards
    : cards.filter(c => c.deck === topic);

  if (!filteredCards || filteredCards.length === 0) {
    return <div className="empty-state">Aucune carte disponible</div>;
  }

  const safeIndex = Math.min(currentIndex, filteredCards.length - 1);
  const card = filteredCards[safeIndex];

  if (!card) {
    return <div className="empty-state">Aucune carte disponible</div>;
  }

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleToggle = () => {
    onToggleReview(card.id);
    if (card.needsReview && filteredCards.length === 1) {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="flashcard-container">
      <div className="card-header">
        <div className="card-badges">
          <span className="deck-badge">{card.deck}</span>
          <span className={`difficulty-badge ${card.difficulty.toLowerCase()}`}>{card.difficulty}</span>
        </div>
        <span className="card-counter">
          {currentIndex + 1} / {filteredCards.length}
        </span>
      </div>

      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-content">
          {isFlipped ? card.back : card.front}
        </div>
        <div className="flip-hint">
          <RotateCw size={16} />
          <span>Cliquer pour retourner</span>
        </div>
      </div>

      <div className="card-actions">
        <button onClick={handlePrev} className="btn-icon" disabled={filteredCards.length === 1}>
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleToggle}
          className={`btn-review ${card.needsReview ? 'active' : ''}`}
        >
          <Flag size={18} />
          <span>{card.needsReview ? 'À revoir' : 'Marquer'}</span>
        </button>

        <button onClick={handleNext} className="btn-icon" disabled={filteredCards.length === 1}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
