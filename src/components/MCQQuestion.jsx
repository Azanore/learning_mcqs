import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Circle, CheckSquare, Square } from 'lucide-react';

export default function MCQQuestion({ questions, topic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Reset to first question when questions array changes
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
  }, [questions]);

  const filteredQuestions = topic === 'all'
    ? questions
    : questions.filter(q => q.topic === topic);

  if (!filteredQuestions || filteredQuestions.length === 0) {
    return <div className="empty-state">Aucune question disponible</div>;
  }

  const safeIndex = Math.min(currentIndex, filteredQuestions.length - 1);
  const question = filteredQuestions[safeIndex];

  if (!question) {
    return <div className="empty-state">Aucune question disponible</div>;
  }

  const handleSelect = (index) => {
    if (showResult) return;

    if (question.multiSelect) {
      setSelectedAnswers(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setSelectedAnswers([index]);
    }
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  const handleNext = () => {
    setSelectedAnswers([]);
    setShowResult(false);
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handlePrev = () => {
    setSelectedAnswers([]);
    setShowResult(false);
    setCurrentIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  const isCorrect = showResult &&
    selectedAnswers.length === question.correctAnswers.length &&
    selectedAnswers.every(a => question.correctAnswers.includes(a));

  return (
    <div className={`mcq-container difficulty-${question.difficulty.toLowerCase()}`}>
      <div className="card-header">
        <div className="card-info">
          <span className="deck-badge">{question.topic}</span>
          <span className="card-counter">
            {currentIndex + 1} / {filteredQuestions.length}
          </span>
        </div>
      </div>

      <div className="mcq-question">
        <div className={`difficulty-tag ${question.difficulty.toLowerCase()}`}>
          {question.difficulty}
        </div>
        <h3>{question.question}</h3>
      </div>

      <div className="mcq-choices">
        {question.choices.map((choice, index) => {
          const isSelected = selectedAnswers.includes(index);
          const isCorrectAnswer = question.correctAnswers.includes(index);
          const showCorrect = showResult && isCorrectAnswer;
          const showWrong = showResult && isSelected && !isCorrectAnswer;

          return (
            <label
              key={index}
              className={`choice ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
            >
              <input
                type={question.multiSelect ? 'checkbox' : 'radio'}
                checked={isSelected}
                onChange={() => handleSelect(index)}
                disabled={showResult}
                style={{ display: 'none' }}
              />
              <span className="choice-text">{choice}</span>
              <span className="choice-icon">
                {showCorrect && <CheckCircle size={18} />}
                {showWrong && <XCircle size={18} />}
                {!showResult && (
                  question.multiSelect ? (
                    isSelected ? <CheckSquare size={18} /> : <Square size={18} />
                  ) : (
                    isSelected ? <CheckCircle size={18} /> : <Circle size={18} />
                  )
                )}
              </span>
            </label>
          );
        })}
      </div>

      {showResult && (
        <div className={`result ${isCorrect ? 'correct' : 'wrong'}`}>
          <strong>{isCorrect ? '✓ Correct !' : '✗ Incorrect'}</strong>
          <p>{question.explanation}</p>
        </div>
      )}

      <div className="card-actions">
        <button onClick={handlePrev} className="btn-icon">
          <ChevronLeft size={20} />
        </button>

        {!showResult ? (
          <button
            onClick={handleCheck}
            className="btn-primary"
            disabled={selectedAnswers.length === 0}
          >
            Vérifier
          </button>
        ) : (
          <button onClick={handleNext} className="btn-primary">
            Suivant
          </button>
        )}

        <button onClick={handleNext} className="btn-icon">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
