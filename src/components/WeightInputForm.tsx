// src/components/WeightInputForm.tsx

import React, { useState } from 'react';
import { WeightEntry } from '../utils/global';

type Props = {
  onAdd: (entry: WeightEntry) => void;
};

const WeightInputForm: React.FC<Props> = ({ onAdd }) => {
  const [weight, setWeight] = useState<number | ''>('');
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format YYYY-MM-DD
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight === '' || isNaN(Number(weight))) return;

    onAdd({ date, weight: Number(weight) });
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>
        Date :
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <label>
        Poids (kg) :
        <input
          type="number"
          value={weight}
          step="0.1"
          min="0"
          onChange={(e) => setWeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
          required
        />
      </label>

      <button type="submit">Ajouter</button>
    </form>
  );
};

// Simple style inline (ou mets-le dans un CSS séparé)
const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  maxWidth: '300px',
  marginBottom: '1rem',
};

export default WeightInputForm;
