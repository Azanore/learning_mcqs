import { useState, useEffect, useMemo } from 'react';
import { Play, ChevronRight, ChevronDown, ChevronUp, Check, RotateCcw } from 'lucide-react';
import MCQQuestion from '../components/MCQQuestion';
import ProgressBar from '../components/ProgressBar';
import { useApp } from '../context/AppContext';
import { useSession } from '../hooks/useSession';
import { addSession, clearMcqProgress } from '../lib/persistence';

const SIZES = [5, 15, 30, 60];
const DIFFS = ['Base', 'Junior', 'Intermédiaire'];
const LS_MCQ_TOPICS = 'mcq-selected-topics';
const LS_MCQ_DIFFS = 'mcq-selected-diffs';

function loadSet(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return Array.isArray(v) ? v : fallback; } catch { return fallback; }
}

export default function MCQPage() {
  const { mcqs, mcqTopics, getNewCount, refresh } = useApp();
  const session = useSession(mcqs);

  const [size, setSize] = useState(15);
  const [selectedTopics, setSelectedTopics] = useState(() => loadSet(LS_MCQ_TOPICS, []));
  const [selectedDiffs, setSelectedDiffs] = useState(() => loadSet(LS_MCQ_DIFFS, []));
  const [showFilters, setShowFilters] = useState(false);
  const [showMcqReset, setShowMcqReset] = useState(false);

  useEffect(() => { try { localStorage.setItem(LS_MCQ_TOPICS, JSON.stringify(selectedTopics)); } catch (e) { void e; } }, [selectedTopics]);
  useEffect(() => { try { localStorage.setItem(LS_MCQ_DIFFS, JSON.stringify(selectedDiffs)); } catch (e) { void e; } }, [selectedDiffs]);

  const hasTopicFilter = selectedTopics.length > 0;
  const hasDiffFilter = selectedDiffs.length > 0;
  const activeFilterCount = (hasTopicFilter ? selectedTopics.length : 0) + (hasDiffFilter ? selectedDiffs.length : 0);

  const filteredForSession = useMemo(() => {
    let pool = mcqs;
    if (hasTopicFilter) pool = pool.filter(c => selectedTopics.includes(c.topic));
    if (hasDiffFilter) pool = pool.filter(c => selectedDiffs.map(d => d.toLowerCase()).includes(c.difficulty.toLowerCase()));
    return pool;
  }, [mcqs, selectedTopics, selectedDiffs, hasTopicFilter, hasDiffFilter]);

  const total = mcqs.length;
  const filteredTotal = filteredForSession.length;
  const newAvailable = getNewCount(filteredForSession);
  const viewed = filteredTotal - newAvailable;
  const viewedPct = filteredTotal > 0 ? (viewed / filteredTotal) * 100 : 0;
  const globalViewed = total - getNewCount(mcqs);
  const globalViewedPct = total > 0 ? (globalViewed / total) * 100 : 0;
  const pct = hasTopicFilter || hasDiffFilter ? viewedPct : globalViewedPct;
  const viewedCount = hasTopicFilter || hasDiffFilter ? viewed : globalViewed;
  const totalCount = hasTopicFilter || hasDiffFilter ? filteredTotal : total;

  const handleStart = (mode) => {
    session.start(mode, {
      size,
      topics: hasTopicFilter ? selectedTopics : null,
      difficulties: hasDiffFilter ? selectedDiffs : null,
    });
  };
  const handleAnswer = (isCorrect) => { session.rate(isCorrect ? 3 : 0); session.advance(); };
  const handleEnd = () => {
    if (session.stats.reviewed > 0) {
      addSession({
        mode: session.mode,
        cardsReviewed: session.stats.reviewed,
        correct: session.stats.correct,
        timeSpent: 0,
        totalCards: session.cards.length,
        topic: session.topic,
        difficulty: session.difficulty,
      });
    }
    session.end();
  };

  const toggleTopic = (t) => setSelectedTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const toggleDiff = (d) => setSelectedDiffs(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  const handleMcqReset = () => { clearMcqProgress(); refresh(); setShowMcqReset(false); };

  if (!session.mode || session.isComplete) {
    return (
      <div className="page">
        <div className="session-select">
          <div>
            <h2 className="session-title">Mode QCM</h2>
            <p className="log-subtitle mt-1">Entraînez-vous — filtrez par sujet si besoin.</p>
          </div>

          <section className="progress-overview" aria-label="Progression QCM">
            <div className="eyebrow">Progression</div>
            <div className="progress-overview-head">
              <div className="progress-overview-main">
                <strong><em>{viewedCount}</em> / {totalCount}</strong>
                <span className="progress-pct">{pct.toFixed(1)}% vues</span>
              </div>
            </div>
            <div className="progress-track" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label="Questions vues">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-sub">
              {hasTopicFilter || hasDiffFilter ? `${filteredTotal} questions dans le filtre · ${total - filteredTotal} masquées · ${newAvailable} jamais vues` : `${total} questions au total · ${newAvailable} jamais vues`}
            </div>
          </section>

          <section className="card-panel" aria-label="Taille de session">
            <div className="panel-label"><span aria-hidden>▦</span> Questions par session</div>
            <div className="preset-row" role="group" aria-label="Nombre de questions">
              {SIZES.map(s => (
                <button key={s} type="button" onClick={() => setSize(s)} className={`preset-btn ${size === s ? 'active' : ''}`} aria-pressed={size === s}>{s}</button>
              ))}
              <span className="faint size-hint">{size} questions</span>
            </div>
          </section>

          <div className="mode-cards" style={{ gridTemplateColumns: '1fr' }}>
            <button type="button" className="mode-card" onClick={() => handleStart('mock')} disabled={filteredTotal === 0}>
              <Play size={18} aria-hidden />
              <div>
                <h3>Quiz mélangé</h3>
                <p>{filteredTotal === 0 ? 'Aucune question' : `${Math.min(size, filteredTotal)} questions · aléatoire`}</p>
              </div>
              <ChevronRight size={14} className="faint ml-auto" aria-hidden />
            </button>
          </div>

          <section className="card-panel" aria-label="Filtres QCM">
            <button type="button" className="filter-toggle" onClick={() => setShowFilters(v => !v)} aria-expanded={showFilters} aria-controls="mcq-filter-panel">
              <span>Filtres</span>
              <span className={`filter-badge ${activeFilterCount ? 'has-active' : ''}`}>{activeFilterCount || 'Tout'}</span>
              {showFilters ? <ChevronUp size={16} aria-hidden /> : <ChevronDown size={16} aria-hidden />}
            </button>
            {showFilters && (
              <div id="mcq-filter-panel" className="filter-panel">
                <div className="filter-group">
                  <div className="filter-group-title">Sujets</div>
                  <div className="filter-checks" role="group" aria-label="Filtrer par sujet">
                    {mcqTopics.map(t => {
                      const checked = selectedTopics.includes(t);
                      return (
                        <label key={t} className={`check ${checked ? 'checked' : ''}`}>
                          <input type="checkbox" checked={checked} onChange={() => toggleTopic(t)} aria-label={t} />
                          <span className="check-mark" aria-hidden><Check size={10} strokeWidth={3} /></span>
                          <span>{t}</span>
                        </label>
                      );
                    })}
                  </div>
                  {hasTopicFilter && <button type="button" onClick={() => setSelectedTopics([])} className="btn-inline">Effacer sujets</button>}
                </div>
                <div className="filter-group">
                  <div className="filter-group-title">Difficulté</div>
                  <div className="filter-checks" role="group" aria-label="Filtrer par difficulté">
                    {DIFFS.map(d => {
                      const checked = selectedDiffs.includes(d);
                      return (
                        <label key={d} className={`check ${checked ? 'checked' : ''}`}>
                          <input type="checkbox" checked={checked} onChange={() => toggleDiff(d)} aria-label={d} />
                          <span className="check-mark" aria-hidden><Check size={10} strokeWidth={3} /></span>
                          <span>{d}</span>
                        </label>
                      );
                    })}
                  </div>
                  {hasDiffFilter && <button type="button" onClick={() => setSelectedDiffs([])} className="btn-inline">Effacer difficultés</button>}
                </div>
                <div className="filter-hint">{filteredTotal} questions concernées{hasTopicFilter || hasDiffFilter ? ` sur ${total}` : ''}</div>
              </div>
            )}
          </section>

          <div className="reset-row">
            {!showMcqReset ? (
              <button type="button" onClick={() => setShowMcqReset(true)} className="btn-reset"><RotateCcw size={14} aria-hidden /> Réinitialiser QCM</button>
            ) : (
              <div className="reset-confirm" role="alert">
                <span>Effacer QCM ? Irréversible.</span>
                <button type="button" onClick={handleMcqReset} className="btn-danger">Oui, effacer</button>
                <button type="button" onClick={() => setShowMcqReset(false)} className="btn-end-session">Annuler</button>
              </div>
            )}
            <span className="reset-hint">{total} QCM</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <ProgressBar current={session.currentIndex} total={session.cards.length} />
      <MCQQuestion question={session.currentCard} onAnswer={handleAnswer} />
      <div className="session-end">
        <button type="button" onClick={handleEnd} className="btn-end-session">Quitter la session</button>
      </div>
    </div>
  );
}
