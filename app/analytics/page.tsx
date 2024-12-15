'use client';

import { Card } from '@/components/ui/card';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const subjects = {
  'Data Structures': {
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting'],
    scores: [85, 92, 78, 88, 95],
    color: 'rgba(54, 162, 235, 0.8)',
    borderColor: 'rgb(54, 162, 235)',
  },
  'OOPs using Java': {
    topics: ['Classes', 'Inheritance', 'Polymorphism', 'Abstraction', 'Interfaces'],
    scores: [90, 75, 85, 88, 92],
    color: 'rgba(255, 99, 132, 0.8)',
    borderColor: 'rgb(255, 99, 132)',
  },
  'Digital Electronics': {
    topics: ['Boolean Algebra', 'Logic Gates', 'Flip Flops', 'Counters', 'Registers'],
    scores: [82, 88, 75, 90, 85],
    color: 'rgba(75, 192, 192, 0.8)',
    borderColor: 'rgb(75, 192, 192)',
  },
  'Discrete Mathematics': {
    topics: ['Set Theory', 'Relations', 'Functions', 'Graph Theory', 'Logic'],
    scores: [95, 88, 92, 78, 85],
    color: 'rgba(153, 102, 255, 0.8)',
    borderColor: 'rgb(153, 102, 255)',
  },
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Performance Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(subjects).map(([subject, data]) => (
          <Card key={subject} className="p-6">
            <h2 className="text-xl font-semibold mb-4">{subject}</h2>
            <Bar
              options={options}
              data={{
                labels: data.topics,
                datasets: [
                  {
                    label: 'Topic Performance',
                    data: data.scores,
                    backgroundColor: data.color,
                    borderColor: data.borderColor,
                    borderWidth: 2,
                    borderRadius: 4,
                    hoverBackgroundColor: data.borderColor,
                  },
                ],
              }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}