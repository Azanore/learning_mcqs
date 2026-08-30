import { useState } from 'react';
import { CheckCircle, XCircle, Circle, CheckSquare, Square } from 'lucide-react';

export default function MCQQuestion({ question, onAnswer }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

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
    const isCorrect =
      selectedAnswers.length === question.correctAnswers.length &&
      selectedAnswers.every(a => question.correctAnswers.includes(a));

    onAnswer(isCorrect, selectedAnswers);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const isCorrect = showResult &&
    selectedAnswers.length === question.correctAnswers.length &&
    selectedAnswers.every(a => question.correctAnswers.includes(a));

  return (
    <div className={`mcq-container difficulty-${question.difficulty.toLowerCase()}`}>
      <div className="card-header">
        <div className="card-info">
          <span className="deck-badge">{question.topic}</span>
          <span className="difficulty-tag-wrapper">
            <span className={`difficulty-tag ${question.difficulty.toLowerCase()}`}>
              {question.difficulty}
            </span>
          </span>
        </div>
      </div>

      <div className="mcq-question">
        <h3>{question.question}</h3>
      </div>

      <div className="mcq-choices" role={question.multiSelect ? 'group' : 'radiogroup'} aria-label="Choix de réponse">
        {question.choices.map((choice, index) => {
          const isSelected = selectedAnswers.includes(index);
          const isCorrectAnswer = question.correctAnswers.includes(index);
          const showCorrect = showResult && isCorrectAnswer;
          const showWrong = showResult && isSelected && !isCorrectAnswer;

          return (
            <label
              key={index}
              className={`choice ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
              tabIndex={showResult ? -1 : 0}
              role={question.multiSelect ? 'checkbox' : 'radio'}
              aria-checked={isSelected}
              aria-disabled={showResult}
              onKeyDown={(e) => {
                if (showResult) return;
                if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); handleSelect(index); }
              }}
            >
              <input
                type={question.multiSelect ? 'checkbox' : 'radio'}
                checked={isSelected}
                onChange={() => handleSelect(index)}
                disabled={showResult}
                className="sr-only"
                tabIndex={-1}
                aria-hidden="true"
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
        <div className={`mcq-explanation ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="explanation-header">
            {isCorrect ? (
              <><CheckCircle size={18} /> <strong>Correct !</strong></>
            ) : (
              <><XCircle size={18} /> <strong>Incorrect</strong></>
            )}
          </div>
          <p>{question.explanation}</p>

          {/* removed dead loop — no visual output */}
        </div>
      )}

      <div className="card-actions">
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
      </div>
    </div>
  );
}
