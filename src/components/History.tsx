// src/components/pages/History.tsx

import React, { useEffect, useState } from 'react';
import { getWeightEntries, getActivityEntries } from '../utils/firebaseHelper';
import { WeightEntry, ActivityEntry } from '../utils/global';
import { groupByWeek } from '../utils/dataHelper';

const History: React.FC = () => {
  const [weights, setWeights] = useState<WeightEntry[]>([]);
  const [activities, setActivities] = useState<ActivityEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const w = await getWeightEntries();
      const a = await getActivityEntries();
      setWeights(w);
      setActivities(a);
    };
    fetchData();
  }, []);

  const weightByWeek = groupByWeek(weights, 'weight');
  const activityByWeek = groupByWeek(activities, 'duration', 'type');

  return (
    <div className="history-container">
      <h1>Historique hebdomadaire</h1>

      {Object.entries(weightByWeek).map(([week, data]) => {
        const activity = activityByWeek[week] || {};
        const weightStart = data[0];
        const weightEnd = data[data.length - 1];
        const delta = (weightEnd.value - weightStart.value).toFixed(1);

        return (
          <div key={week} className="week-summary">
            <h3>{week}</h3>
            <p>Poids : {weightStart.value}kg → {weightEnd.value}kg ({delta}kg)</p>
            <ul>
              {Object.entries(activity).map(([type, duration]) => (
                <li key={type}>{`${type} : ${duration} min`}</li>

              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default History;
