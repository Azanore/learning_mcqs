import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flag, RotateCw } from 'lucide-react';

export default function FlashCard({ cards = [], topic, onToggleReview }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const filteredCards = topic === 'all' ? cards : cards.filter(c => c.deck === topic);

  // Reset to first card when cards array changes
  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [cards]);

  if (!filteredCards || filteredCards.length === 0) {
    return <div className="empty-state">Aucune carte disponible</div>;
  }

  const safeIndex = Math.min(currentIndex, filteredCards.length - 1);
  const card = filteredCards[safeIndex];

  if (!card) {
    return <div className="empty-state">Aucune carte disponible</div>;
  }

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleToggleReview = () => {
    onToggleReview(card.id);
  };

  return (
    <div className="flashcard-container">
      <div className="card-header">
        <div className="card-info">
          <span className="deck-badge">{card.deck}</span>
          <span className="card-counter">
            {currentIndex + 1} / {filteredCards.length}
          </span>
        </div>
      </div>

      <div
        className={`flashcard-wrapper difficulty-${card.difficulty.toLowerCase()}`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className={`flashcard-side ${showAnswer ? 'flashcard-back' : 'flashcard-front'}`}>
          <div className="card-label">{showAnswer ? 'Réponse' : 'Question'}</div>
          <div className={`difficulty-tag ${card.difficulty.toLowerCase()}`}>
            {card.difficulty}
          </div>
          <div className="card-content">{showAnswer ? card.back : card.front}</div>
          <div className="flip-icon-btn">
            <RotateCw size={18} />
          </div>
        </div>
      </div>

      <div className="card-actions">
        <button onClick={handlePrev} className="btn-icon" disabled={filteredCards.length === 1}>
          <ChevronLeft size={20} />
        </button>

        <button onClick={handleToggleReview} className={`btn-review ${card.needsReview ? 'active' : ''}`}>
          <Flag size={16} />
          <span>{card.needsReview ? 'À revoir' : 'Marquer'}</span>
        </button>

        <button onClick={handleNext} className="btn-icon" disabled={filteredCards.length === 1}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
