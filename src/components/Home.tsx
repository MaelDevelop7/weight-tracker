// src/components/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import WeightInputForm from './WeightInputForm';
import WeightChart from './WeightChart';
import GoalTracker from './GoalTracker';
import MotivationalMessage from './MotivationMessage';
import SportInputForm from './SportInputForm';
import SportChart from './SportChart';

import { WeightEntry, Goal, ActivityEntry } from '../utils/global';
import {
  getWeightEntries,
  getActivityEntries,
  addWeightEntry,
  addActivityEntry,
} from '../utils/firebaseHelper';

const Home: React.FC = () => {
  const [weights, setWeights] = useState<WeightEntry[]>([]);
  const [activities, setActivities] = useState<ActivityEntry[]>([]);
  const [goal, setGoal] = useState<Goal>({
    startWeight: 80,
    targetWeight: 65,
    startDate: '2025-04-01',
  });

  // Charger les données depuis Firestore au démarrage
  useEffect(() => {
    const fetchData = async () => {
      const weightData = await getWeightEntries();
      const activityData = await getActivityEntries();
      setWeights(weightData);
      setActivities(activityData);
    };
    fetchData();
  }, []);

  const handleAddWeight = async (entry: WeightEntry) => {
    setWeights((prev) => [...prev, entry]);
    await addWeightEntry(entry);
  };

  const handleAddActivity = async (entry: ActivityEntry) => {
    setActivities((prev) => [...prev, entry]);
    await addActivityEntry(entry);
  };

  return (
    <div className="home-container">
      <h1>Suivi de poids</h1>

      <WeightInputForm onAdd={handleAddWeight} />
      <GoalTracker weights={weights} goal={goal} />
      <WeightChart data={weights} />
      <MotivationalMessage />

      <hr style={{ margin: '2rem 0' }} />

      <h2>Activité physique</h2>
      <SportInputForm onAdd={handleAddActivity} />
      <SportChart activities={activities} />
    </div>
  );
};

export default Home;
