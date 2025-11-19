import { useState } from 'react';

export default function KeywordMap({ maps }) {
  const [selectedMap, setSelectedMap] = useState(0);

  if (maps.length === 0) {
    return <div className="empty-state">Aucune carte disponible</div>;
  }

  const map = maps[selectedMap];

  return (
    <div className="map-container">
      <div className="map-selector">
        {maps.map((m, index) => (
          <button
            key={m.id}
            onClick={() => setSelectedMap(index)}
            className={`map-tab ${selectedMap === index ? 'active' : ''}`}
          >
            {m.title}
          </button>
        ))}
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
