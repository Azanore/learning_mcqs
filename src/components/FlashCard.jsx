import { useState, useCallback } from 'react';
import { RotateCw } from 'lucide-react';
import RatingBar from './RatingBar';

export default function FlashCard({ card, onRate, showRating = true }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const reveal = useCallback(() => setShowAnswer(true), []);
  const handleRate = useCallback((grade) => {
    onRate(grade);
    setShowAnswer(false);
  }, [onRate]);

  if (!card) {
    return <div className="empty-state">Aucune carte disponible</div>;
  }

  const difficulty = card.difficulty.toLowerCase();

  return (
    <div className="flashcard-container">
      <div className="card-header">
        <div className="card-info">
          <span className="deck-badge">{card.deck}</span>
          <span className={`difficulty-tag ${difficulty}`}>{card.difficulty}</span>
        </div>
        <span className="faint card-meta-hint" aria-hidden>
          {showAnswer ? 'réponse' : 'question'} · appuyez pour {showAnswer ? 'évaluer' : 'révéler'}
        </span>
      </div>

      <button
        type="button"
        className={`flashcard-btn difficulty-${difficulty} ${showAnswer ? 'revealed' : ''}`}
        onClick={() => { if (!showAnswer) reveal(); }}
        aria-label={showAnswer ? 'Carte révélée — choisissez une évaluation ci-dessous' : 'Question — appuyez pour voir la réponse'}
        aria-expanded={showAnswer}
      >
        <span className="flashcard-side">
          <span className="card-label">
            <span className="card-label-dot" aria-hidden />
            {showAnswer ? 'Réponse' : 'Question'}
          </span>

          <span className="card-content" role="text">
            {showAnswer ? card.back : card.front}
          </span>

          {!showAnswer && (
            <span className="flip-hint-row" aria-hidden>
              <RotateCw size={16} />
              Voir la réponse
            </span>
          )}
        </span>
      </button>

      {showAnswer && showRating && (
        <RatingBar onRate={handleRate} />
      )}
    </div>
  );
}
