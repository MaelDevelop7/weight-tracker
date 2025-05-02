// src/components/WeightChart.tsx

import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { WeightEntry } from '../utils/global';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

type Props = {
  data: WeightEntry[];
};

const WeightChart: React.FC<Props> = ({ data }) => {
  // Trie les entrées par date
  const sortedData = [...data].sort((a, b) => a.date.localeCompare(b.date));

  const chartData = {
    labels: sortedData.map((entry) => entry.date),
    datasets: [
      {
        label: 'Poids (kg)',
        data: sortedData.map((entry) => entry.weight),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Poids (kg)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default WeightChart;
