// src/components/SportInputForm.tsx

import React, { useState } from 'react';
import { ActivityEntry } from '../utils/global';

type Props = {
  onAdd: (entry: ActivityEntry) => void;
};

const SportInputForm: React.FC<Props> = ({ onAdd }) => {
  const [type, setType] = useState<ActivityEntry['type']>('walk');
  const [customName, setCustomName] = useState('');
  const [duration, setDuration] = useState<number | ''>('');
  const [intensity, setIntensity] = useState<ActivityEntry['intensity']>('medium');
  const [date, setDate] = useState<string>(() => new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (duration === '' || isNaN(Number(duration))) return;

    const entry: ActivityEntry = {
      date,
      type: type === 'custom' ? (customName.trim() || 'custom') : type,
      duration: Number(duration),
      intensity,
    };

    onAdd(entry);
    setDuration('');
    setCustomName('');
    setType('walk');
    setIntensity('medium');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Ajouter une activité</h3>

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
        Type :
        <select value={type} onChange={(e) => setType(e.target.value as ActivityEntry['type'])}>
          <option value="walk">Marche</option>
          <option value="run">Course</option>
          <option value="bike">Vélo</option>
          <option value="custom">Autre...</option>
        </select>
      </label>

      {type === 'custom' && (
        <label>
          Nom personnalisé :
          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="Yoga, Natation..."
            required
          />
        </label>
      )}

      <label>
        Durée (minutes) :
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value === '' ? '' : Number(e.target.value))}
          min="1"
          required
        />
      </label>

      <label>
        Intensité :
        <select value={intensity} onChange={(e) => setIntensity(e.target.value as ActivityEntry['intensity'])}>
          <option value="low">Faible</option>
          <option value="medium">Moyenne</option>
          <option value="high">Forte</option>
        </select>
      </label>

      <button type="submit">Ajouter l’activité</button>
    </form>
  );
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  maxWidth: '300px',
  marginBottom: '1rem',
};

export default SportInputForm;
