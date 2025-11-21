import { useState, useEffect } from 'react';

export default function KeywordMap({ maps }) {
  const [selectedMap, setSelectedMap] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  if (maps.length === 0) {
    return <div className="empty-state">Aucune carte disponible</div>;
  }

  const filteredMaps = maps.filter(m =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Si la map sélectionnée n'est plus dans les résultats filtrés, sélectionner la première
  useEffect(() => {
    const isSelectedInFiltered = filteredMaps.some(m => maps.indexOf(m) === selectedMap);
    if (!isSelectedInFiltered && filteredMaps.length > 0) {
      setSelectedMap(maps.indexOf(filteredMaps[0]));
    }
  }, [searchTerm, filteredMaps, selectedMap, maps]);

  const map = maps[selectedMap];

  return (
    <div className="map-container">
      <div className="map-selector-wrapper">
        <input
          type="text"
          placeholder="Rechercher une map..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="map-search"
        />
        <select
          value={selectedMap}
          onChange={(e) => setSelectedMap(Number(e.target.value))}
          className="map-dropdown"
        >
          {filteredMaps.map((m) => (
            <option key={m.id} value={maps.indexOf(m)}>
              {m.title}
            </option>
          ))}
        </select>
      </div>

      <div className="map-content">
        <h2>{map.title}</h2>
        <div className="table-wrapper">
          <table className="keyword-table">
            <thead>
              <tr>
                {map.data.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {map.data.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
