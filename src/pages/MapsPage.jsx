import KeywordMap from '../components/KeywordMap';
import { keywordMaps } from '../data/keywordMaps';

export default function MapsPage() {
  return (
    <div className="page page--wide">
      <div>
        <h2 className="session-title">Référentiel</h2>
        <p className="log-subtitle mt-1">Tables comparatives — filtrez par carte, recherche rapide.</p>
      </div>
      <KeywordMap maps={keywordMaps} />
    </div>
  );
}
