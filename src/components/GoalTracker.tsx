// src/components/GoalTracker.tsx

import React from 'react';
import { WeightEntry, Goal } from '../utils/global';

type Props = {
  weights: WeightEntry[];
  goal: Goal;
};

const GoalTracker: React.FC<Props> = ({ weights, goal }) => {
  // Dernier poids saisi
  const latestEntry = [...weights].sort((a, b) => b.date.localeCompare(a.date))[0];
  const currentWeight = latestEntry?.weight ?? goal.startWeight;

  const totalToLose = goal.startWeight - goal.targetWeight;
  const lost = goal.startWeight - currentWeight;
  const remaining = currentWeight - goal.targetWeight;

  const progressPercent = Math.min(
    100,
    Math.max(0, (lost / totalToLose) * 100)
  ).toFixed(1);

  return (
    <div style={containerStyle}>
      <h2>Objectif</h2>
      <p>🎯 Cible : <strong>{goal.targetWeight} kg</strong></p>
      <p>📅 Depuis : {goal.startDate}</p>
      <p>⚖️ Dernier poids : <strong>{currentWeight} kg</strong></p>
      <p>✅ Perdu : <strong>{lost.toFixed(1)} kg</strong></p>
      <p>📉 Reste à perdre : <strong>{remaining > 0 ? remaining.toFixed(1) : 0} kg</strong></p>

      <div style={progressBarWrapper}>
        <div style={{ ...progressBarFill, width: `${progressPercent}%` }} />
      </div>
      <small>{progressPercent}% de progression</small>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  marginBottom: '2rem',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const progressBarWrapper: React.CSSProperties = {
  height: '20px',
  backgroundColor: '#eee',
  borderRadius: '10px',
  overflow: 'hidden',
  marginTop: '0.5rem',
  marginBottom: '0.3rem',
};

const progressBarFill: React.CSSProperties = {
  height: '100%',
  backgroundColor: '#4caf50',
  transition: 'width 0.5s ease-in-out',
};

export default GoalTracker;
