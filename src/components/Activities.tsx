// src/components/pages/SportFormPage.tsx

import React, { useState } from 'react';
import SportInputForm from './SportInputForm';
import SportChart from './SportChart';
import { ActivityEntry } from '../utils/global';

const SportFormPage: React.FC = () => {
  const [activities, setActivities] = useState<ActivityEntry[]>([
    { date: '2025-04-01', type: 'Marche', duration: 30, intensity: 'low' },
    { date: '2025-04-02', type: 'Vélo', duration: 45, intensity: 'medium' },
  ]);

  const handleAddActivity = (newEntry: ActivityEntry) => {
    setActivities((prev) => [...prev, newEntry]);
  };

  return (
    <div className="sport-form-page" style={{ padding: '2rem' }}>
      <h1>Ajouter une activité</h1>
      <SportInputForm onAdd={handleAddActivity} />
      <SportChart activities={activities} />
    </div>
  );
};

export default SportFormPage;
