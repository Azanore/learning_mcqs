import { useState, useEffect, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, RotateCcw, Clock, Sparkles, Check, ChevronRight } from 'lucide-react';
import FlashCard from '../components/FlashCard';
import ProgressBar from '../components/ProgressBar';
import CustomSelect from '../components/CustomSelect';
import { useApp } from '../context/AppContext';
import { useSession } from '../hooks/useSession';
import { rateCard as rateCardFn } from '../lib/cardState';
import { clearProgress, clearFlashcardsProgress } from '../lib/persistence';

const SIZES = [5, 15, 30, 60];
const DIFFS = ['Base', 'Junior', 'Intermédiaire'];
const LS_TOPICS = 'flashcards-selected-topics';
const LS_DIFFS = 'flashcards-selected-diffs';

function loadSet(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return Array.isArray(v) ? v : fallback; } catch { return fallback; }
}

export default function FlashcardsPage() {
  const { flashcards, topics, getDueCount, getNewCount, refresh } = useApp();
  const session = useSession(flashcards);
  const [tab, setTab] = useState('revise');
  const [size, setSize] = useState(15);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const [selectedTopics, setSelectedTopics] = useState(() => loadSet(LS_TOPICS, []));
  const [selectedDiffs, setSelectedDiffs] = useState(() => loadSet(LS_DIFFS, []));
  const [showFilters, setShowFilters] = useState(false);

  const [q, setQ] = useState('');
  const [exploreTopic, setExploreTopic] = useState('all');
  const [exploreDiff, setExploreDiff] = useState('all');
  const [expanded, setExpanded] = useState({});
  const [visible, setVisible] = useState(24);

  useEffect(() => { try { localStorage.setItem(LS_TOPICS, JSON.stringify(selectedTopics)); } catch (e) { void e; } }, [selectedTopics]);
  useEffect(() => { try { localStorage.setItem(LS_DIFFS, JSON.stringify(selectedDiffs)); } catch (e) { void e; } }, [selectedDiffs]);

  const hasTopicFilter = selectedTopics.length > 0;
  const hasDiffFilter = selectedDiffs.length > 0;
  const activeFilterCount = (hasTopicFilter ? selectedTopics.length : 0) + (hasDiffFilter ? selectedDiffs.length : 0);

  const filteredForSession = useMemo(() => {
    let pool = flashcards;
    if (hasTopicFilter) pool = pool.filter(c => selectedTopics.includes(c.deck));
    if (hasDiffFilter) pool = pool.filter(c => selectedDiffs.map(d => d.toLowerCase()).includes(c.difficulty.toLowerCase()));
    return pool;
  }, [flashcards, selectedTopics, selectedDiffs, hasTopicFilter, hasDiffFilter]);

  const globalDue = getDueCount(filteredForSession);
  const globalNew = getNewCount(filteredForSession);
  const total = flashcards.length;
  const filteredTotal = filteredForSession.length;
  const viewed = filteredTotal - globalNew;
  const viewedInFilteredPct = filteredTotal > 0 ? (viewed / filteredTotal) * 100 : 0;
  const globalViewed = total - getNewCount(flashcards);
  const globalViewedPct = total > 0 ? (globalViewed / total) * 100 : 0;

  const decouvrirAvailable = globalNew;
  const pct = hasTopicFilter || hasDiffFilter ? viewedInFilteredPct : globalViewedPct;
  const viewedCount = hasTopicFilter || hasDiffFilter ? viewed : globalViewed;
  const totalCount = hasTopicFilter || hasDiffFilter ? filteredTotal : total;

  useEffect(() => {
    if (session.isComplete && session.cards.length > 0) {
      const acc = session.stats.reviewed ? Math.round((session.stats.correct / session.stats.reviewed) * 100) : 0;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- derive UI state from session completion
      setLastResult({ reviewed: session.stats.reviewed, correct: session.stats.correct, accuracy: acc });
    }
  }, [session.isComplete, session.cards.length, session.stats.correct, session.stats.reviewed]);

  const handleStart = (mode) => {
    setLastResult(null);
    session.start(mode, {
      size,
      topics: hasTopicFilter ? selectedTopics : null,
      difficulties: hasDiffFilter ? selectedDiffs : null,
    });
  };

  const handleRate = (grade) => {
    const cur = session.currentCard;
    if (!cur) return;
    rateCardFn(cur.id, grade);
    session.rate(grade);
    session.advance();
    refresh();
  };

  const handleEnd = () => {
    if (session.stats.reviewed > 0) {
      const acc = Math.round((session.stats.correct / session.stats.reviewed) * 100);
      setLastResult({ reviewed: session.stats.reviewed, correct: session.stats.correct, accuracy: acc });
    }
    session.end();
    refresh();
  };

  const explorerPool = useMemo(() => {
    let pool = flashcards;
    if (exploreTopic !== 'all') pool = pool.filter(c => c.deck === exploreTopic);
    if (exploreDiff !== 'all') pool = pool.filter(c => c.difficulty.toLowerCase() === exploreDiff);
    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      pool = pool.filter(c => (c.front + ' ' + c.back + ' ' + c.deck).toLowerCase().includes(needle));
    }
    return pool;
  }, [flashcards, exploreTopic, exploreDiff, q]);

  const explorerSlice = explorerPool.slice(0, visible);
  const handleReset = () => { clearFlashcardsProgress(); refresh(); setShowResetConfirm(false); setLastResult(null); };
  const handleResetAll = () => { clearProgress({ scope: 'all' }); refresh(); setShowResetConfirm(false); setLastResult(null); };

  const toggleTopic = (t) => setSelectedTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const toggleDiff = (d) => setSelectedDiffs(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);

  if (session.isComplete && lastResult) {
    return (
      <div className="page">
        <section className="session-complete" aria-label="Session terminée">
          <span className="eyebrow">Session terminée</span>
          <h2 className="session-title">Bien joué !</h2>
          <div className="complete-value">{lastResult.correct} / {lastResult.reviewed}</div>
          <div className="complete-label">{lastResult.accuracy}% de réussite</div>
          <div className="complete-actions">
            <button type="button" className="btn-primary" onClick={() => setLastResult(null)}>Retour au menu</button>
            <button type="button" className="btn-end-session" onClick={() => handleStart('review')} disabled={globalDue === 0}>
              Revoir — {Math.min(size, globalDue)} cartes
            </button>
          </div>
        </section>
      </div>
    );
  }

  if (session.mode && !session.isComplete) {
    return (
      <div className="page">
        <ProgressBar current={session.currentIndex} total={session.cards.length} />
        <FlashCard card={session.currentCard} onRate={handleRate} />
        <div className="session-end">
          <button type="button" onClick={handleEnd} className="btn-end-session">Quitter la session</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div>
        <h2 className="session-title">Mode Flashcards</h2>
        <p className="log-subtitle mt-1">Répétition espacée — Revoir ou Découvrir, filtrez par leçon.</p>
      </div>
      <div className="tabs" role="tablist" aria-label="Navigation flashcards">
        <button type="button" role="tab" aria-selected={tab === 'revise'} aria-controls="panel-revise" id="tab-revise" tabIndex={tab === 'revise' ? 0 : -1} className={`tab ${tab === 'revise' ? 'active' : ''}`} onClick={() => setTab('revise')} onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); setTab(t => t === 'revise' ? 'explore' : 'revise'); } }}>Réviser</button>
        <button type="button" role="tab" aria-selected={tab === 'explore'} aria-controls="panel-explore" id="tab-explore" tabIndex={tab === 'explore' ? 0 : -1} className={`tab ${tab === 'explore' ? 'active' : ''}`} onClick={() => setTab('explore')} onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); setTab(t => t === 'revise' ? 'explore' : 'revise'); } }}>Parcourir</button>
      </div>

      {tab === 'revise' ? (
        <div className="session-select" id="panel-revise" role="tabpanel" aria-labelledby="tab-revise">
          <section className="progress-overview" aria-label="Progression générale">
            <div className="eyebrow">Progression</div>
            <div className="progress-overview-head">
              <div className="progress-overview-main">
                <strong><em>{viewedCount}</em> / {totalCount}</strong>
                <span className="progress-pct">{pct.toFixed(1)}% vues</span>
              </div>
              <span className="progress-due" aria-label={`${globalDue} cartes à revoir`}><Clock size={13} aria-hidden /> {globalDue} à revoir</span>
            </div>
            <div className="progress-track" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label="Cartes vues">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-sub">{hasTopicFilter || hasDiffFilter ? `${filteredTotal} cartes dans le filtre · ${total - filteredTotal} masquées · ${globalNew} jamais vues` : `${total} cartes au total · ${globalNew} jamais vues`}</div>
          </section>

          <section className="card-panel" aria-label="Taille de session">
            <div className="panel-label"><span aria-hidden>▦</span> Cartes par session</div>
            <div className="preset-row" role="group" aria-label="Nombre de cartes">
              {SIZES.map(s => (
                <button key={s} type="button" onClick={() => setSize(s)} className={`preset-btn ${size === s ? 'active' : ''}`} aria-pressed={size === s}>{s}</button>
              ))}
              <span className="faint size-hint">{size} cartes</span>
            </div>
          </section>

          <section aria-label="Choisir un mode de révision">
            <div className="choice-grid">
              <button type="button" className="choice-card" onClick={() => handleStart('review')} disabled={globalDue === 0} aria-describedby="desc-revoir">
                <span className="choice-icon" aria-hidden><Clock size={16} /></span>
                <span className="choice-card-text">
                  <span className="choice-title">Revoir</span>
                  <span className="choice-count">{globalDue === 0 ? 'Aucune' : `${Math.min(size, globalDue)} cartes`} <span className="faint">·</span> <span id="desc-revoir" className="choice-desc">dues</span></span>
                </span>
                <ChevronRight size={14} className="choice-card-cta" aria-hidden />
              </button>
              <button type="button" className="choice-card" onClick={() => handleStart('learn')} disabled={decouvrirAvailable === 0} aria-describedby="desc-decouvrir">
                <span className="choice-icon" aria-hidden><Sparkles size={16} /></span>
                <span className="choice-card-text">
                  <span className="choice-title">Découvrir</span>
                  <span className="choice-count">{decouvrirAvailable === 0 ? 'Aucune' : `${Math.min(size, decouvrirAvailable)} cartes`} <span className="faint">·</span> <span id="desc-decouvrir" className="choice-desc">jamais vues</span></span>
                </span>
                <ChevronRight size={14} className="choice-card-cta" aria-hidden />
              </button>
            </div>
          </section>

          <section className="card-panel" aria-label="Filtres de session">
            <button type="button" className="filter-toggle" onClick={() => setShowFilters(v => !v)} aria-expanded={showFilters} aria-controls="flashcards-filter-panel">
              <span>Filtres</span>
              <span className={`filter-badge ${activeFilterCount ? 'has-active' : ''}`}>{activeFilterCount || 'Tout'}</span>
              {showFilters ? <ChevronUp size={16} aria-hidden /> : <ChevronDown size={16} aria-hidden />}
            </button>
            {showFilters && (
              <div id="flashcards-filter-panel" className="filter-panel">
                <div className="filter-group">
                  <div className="filter-group-title">Leçons</div>
                  <div className="filter-checks" role="group" aria-label="Filtrer par leçon">
                    {topics.map(t => {
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
                  {hasTopicFilter && <button type="button" onClick={() => setSelectedTopics([])} className="btn-inline">Effacer leçons</button>}
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
                <div className="filter-hint">{filteredTotal} cartes concernées{hasTopicFilter || hasDiffFilter ? ` sur ${total}` : ''}</div>
              </div>
            )}
          </section>

          <div className="reset-row">
            {!showResetConfirm ? (
              <button type="button" onClick={() => setShowResetConfirm(true)} className="btn-reset"><RotateCcw size={14} aria-hidden /> Réinitialiser</button>
            ) : (
              <div className="reset-confirm" role="alert">
                <span>Effacer flashcards ?</span>
                <button type="button" onClick={handleReset} className="btn-danger">Flashcards</button>
                <button type="button" onClick={handleResetAll} className="btn-danger">Tout</button>
                <button type="button" onClick={() => setShowResetConfirm(false)} className="btn-end-session">Annuler</button>
              </div>
            )}
            <span className="reset-hint">{total} cartes</span>
          </div>
        </div>
      ) : (
        <div className="explore" id="panel-explore" role="tabpanel" aria-labelledby="tab-explore">
          <div className="explore-bar">
            <label className="search-wrap" aria-label="Rechercher">
              <Search size={15} aria-hidden />
              <input value={q} onChange={e => { setQ(e.target.value); setVisible(24); }} placeholder="Rechercher…" className="search-input" type="search" aria-label="Rechercher" />
            </label>
            <CustomSelect
              value={exploreTopic}
              onChange={v => { setExploreTopic(v); setVisible(24); }}
              ariaLabel="Filtrer par sujet"
              options={[{ value: 'all', label: 'Tous les sujets' }, ...topics.map(t => ({ value: t, label: t }))]}
            />
            <div className="difficulty-filters" role="group" aria-label="Filtrer par difficulté">
              {['all', 'base', 'junior', 'intermédiaire'].map(d => (
                <button key={d} type="button" onClick={() => { setExploreDiff(d); setVisible(24); }} className={`difficulty-filter-btn ${d} ${exploreDiff === d ? 'active' : ''}`} aria-pressed={exploreDiff === d}>{d === 'all' ? 'Tous' : d[0].toUpperCase() + d.slice(1)}</button>
              ))}
            </div>
          </div>
          <div className="explore-meta" aria-live="polite">{explorerPool.length} carte{explorerPool.length !== 1 ? 's' : ''} {q || exploreTopic !== 'all' || exploreDiff !== 'all' ? 'trouvées' : 'au total'}</div>
          <ul className="explore-list">
            {explorerSlice.map(c => {
              const open = !!expanded[c.id];
              return (
                <li key={c.id}>
                  <button type="button" className={`explore-item ${open ? 'open' : ''}`} onClick={() => setExpanded(e => ({ ...e, [c.id]: !e[c.id] }))} aria-expanded={open}>
                    <span className="explore-q"><span className="explore-deck">{c.deck}</span><span className="explore-front">{c.front}</span>{open ? <ChevronUp size={15} aria-hidden /> : <ChevronDown size={15} aria-hidden />}</span>
                    {open && <span className="explore-a">{c.back}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
          {visible < explorerPool.length && <button type="button" onClick={() => setVisible(v => v + 24)} className="btn-end-session center-self">Voir plus — {explorerPool.length - visible} restantes</button>}
          {explorerPool.length === 0 && <div className="empty-state">Aucun résultat — élargissez les filtres.</div>}
        </div>
      )}
    </div>
  );
}
