import KeywordMap from '../components/KeywordMap';
import { keywordMaps } from '../data/keywordMaps';

export default function MapsPage() {
  return (
    <div className="page">
      <KeywordMap maps={keywordMaps} />
    </div>
  );
}
