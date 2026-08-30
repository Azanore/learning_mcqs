export default function ProgressBar({ current, total }) {
  const percent = total > 0 ? Math.round(((current + 1) / total) * 100) : 0;
  const safeCurrent = Math.min(current + 1, total);
  return (
    <div className="session-progress" aria-label={`Progression ${safeCurrent} sur ${total}`}>
      <div className="progress-top">
        <span className="progress-label" aria-live="polite" aria-atomic="true">
          {safeCurrent} / {total}
        </span>
        <span className="progress-time" aria-hidden>{percent}%</span>
      </div>
      <div
        className="progress-bar-track"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Avancement de la session"
      >
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
