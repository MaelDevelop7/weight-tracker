// src/components/SportChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { ActivityEntry } from '../utils/global';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Props = {
  activities: ActivityEntry[];
};

const SportChart: React.FC<Props> = ({ activities }) => {
  // Regrouper la durée totale par nom d'activité
  const grouped = activities.reduce<Record<string, number>>((acc, curr) => {
    const key = curr.type.trim().toLowerCase(); // uniformise
    acc[key] = (acc[key] || 0) + curr.duration;
    return acc;
  }, {});

  const labels = Object.keys(grouped);
  const durations = Object.values(grouped);

  const data = {
    labels,
    datasets: [
      {
        label: 'Durée totale (min)',
        data: durations,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', marginTop: '2rem' }}>
      <h3>Activité physique (par type)</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SportChart;
