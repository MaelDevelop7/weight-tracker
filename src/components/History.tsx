// src/components/pages/History.tsx

import React, { useState } from 'react';
import { WeightEntry } from '../utils/global';

const History: React.FC = () => {
  // Données simulées pour l'instant
  const [weights] = useState<WeightEntry[]>([
    { date: '2025-04-20', weight: 76.8 },
    { date: '2025-04-15', weight: 77.2 },
    { date: '2025-04-08', weight: 78.5 },
    { date: '2025-04-01', weight: 80 },
  ]);

  const sorted = [...weights].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      <h2>Historique des poids</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Poids (kg)</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.date}</td>
              <td>{entry.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1rem',
};

export default History;
