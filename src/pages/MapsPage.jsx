import KeywordMap from '../components/KeywordMap';
import { keywordMaps } from '../data/keywordMaps';

export default function MapsPage() {
  return (
    <div className="page page--wide">
      <KeywordMap maps={keywordMaps} />
    </div>
  );
}
