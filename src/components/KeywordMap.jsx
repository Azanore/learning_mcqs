import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import CustomSelect from './CustomSelect';

export default function KeywordMap({ maps }) {
  const [selectedMap, setSelectedMap] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const indexById = useMemo(() => {
    const m = new Map();
    maps.forEach((entry, idx) => m.set(entry.id ?? entry.title, idx));
    return m;
  }, [maps]);

  const filteredMaps = useMemo(() => maps.filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase())), [maps, searchTerm]);

  const effectiveIndex = useMemo(() => {
    const isSelectedInFiltered = filteredMaps.some(m => (indexById.get(m.id ?? m.title) ?? maps.indexOf(m)) === selectedMap);
    if (!isSelectedInFiltered && filteredMaps.length > 0) return indexById.get(filteredMaps[0].id ?? filteredMaps[0].title) ?? 0;
    return selectedMap;
  }, [filteredMaps, selectedMap, indexById, maps]);

  const map = maps[effectiveIndex] ?? maps[0];
  const options = useMemo(() => filteredMaps.map(m => ({ value: indexById.get(m.id ?? m.title) ?? maps.indexOf(m), label: m.title })), [filteredMaps, indexById, maps]);

  if (maps.length === 0) return <div className="empty-state">Aucune carte disponible</div>;

  return (
    <div className="map-container">
      <div className="map-selector-wrapper">
        <label className="search-wrap search-wrap--map" aria-label="Rechercher une carte">
          <Search size={15} aria-hidden />
          <input type="text" placeholder="Rechercher une carte…" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-input" aria-label="Rechercher" />
        </label>
        <CustomSelect
          value={effectiveIndex}
          onChange={v => setSelectedMap(Number(v))}
          ariaLabel="Choisir une carte"
          options={options.length ? options : [{ value: effectiveIndex, label: map.title }]}
          className="map-dropdown"
        />
      </div>
      <div className="map-content">
        <h2>{map.title}</h2>
        <div className="table-wrapper">
          <table className="keyword-table">
            <thead><tr>{map.data.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>{map.data.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
