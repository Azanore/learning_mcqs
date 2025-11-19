import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';

export default function MCQQuestion({ questions, topic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const filteredQuestions = topic === 'all'
    ? questions
    : questions.filter(q => q.topic === topic);

  if (filteredQuestions.length === 0) {
    return <div className="empty-state">Aucune question disponible</div>;
  }

  const question = filteredQuestions[currentIndex];

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
    <div className="mcq-container">
      <div className="card-header">
        <div className="card-badges">
          <span className="deck-badge">{question.topic}</span>
          <span className={`difficulty-badge ${question.difficulty.toLowerCase()}`}>{question.difficulty}</span>
        </div>
        <span className="card-counter">
          {currentIndex + 1} / {filteredQuestions.length}
        </span>
      </div>

      <div className="mcq-question">
        <h3>{question.question}</h3>
        <p className="question-hint">
          {question.multiSelect
            ? '(Sélectionnez une ou plusieurs réponses)'
            : '(Sélectionnez une réponse)'}
        </p>
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
              />
              <span className="choice-text">{choice}</span>
              {showCorrect && <CheckCircle size={18} />}
              {showWrong && <XCircle size={18} />}
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
