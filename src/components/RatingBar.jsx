import { RATING } from '../lib/fsrs';

const ratings = [
  { grade: RATING.Again, label: 'Oublié', sub: 'Revoir', color: '#f43f5e' },
  { grade: RATING.Hard, label: 'Difficile', sub: 'Bientôt', color: '#f59e0b' },
  { grade: RATING.Good, label: 'Correct', sub: 'OK', color: '#38bdf8' },
  { grade: RATING.Easy, label: 'Facile', sub: 'Acquis', color: '#10b981' },
];

export default function RatingBar({ onRate, disabled }) {
  return (
    <div className="rating-bar" role="group" aria-label="Évaluez votre réponse">
      {ratings.map(({ grade, label, sub, color }) => (
        <button
          key={grade}
          type="button"
          className="rating-btn"
          style={{ '--rating-color': color }}
          onClick={() => onRate(grade)}
          disabled={disabled}
          aria-label={`${label} — ${sub}`}
        >
          <span className="rating-label">{label}</span>
          <span className="rating-sub" aria-hidden>{sub}</span>
        </button>
      ))}
    </div>
  );
}
