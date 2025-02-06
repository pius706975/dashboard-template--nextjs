import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

interface TotalEarningDailyChartProps {
    labels: string[];
    datasets: number[];
    totalSubscriptions: string;
}

const TotalEarningDailyChart: React.FC<TotalEarningDailyChartProps> = ({
    labels,
    datasets,
    totalSubscriptions,
}) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Subscriptions',
                data: datasets,
                borderColor: '#ffbd3e',
                borderWidth: 2,
                fill: false,
                tension: 0, // Garis kaku
                pointRadius: 3,
                pointBackgroundColor: 'black',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                display: true,
                beginAtZero: true,
                ticks: {
                    stepSize: 5000,
                    callback: (tickValue: string | number) =>
                        typeof tickValue === 'number' ? tickValue.toLocaleString() : tickValue,
                },
                grid: {
                    display: false,
                },
            },
            x: {
                display: true,
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-gray-400 dark:shadow-none mx-2">
            <div className="bg-gray-200 dark:bg-[#151515] p-3 rounded-md">
                <p className="font-semibold text-gray-700 dark:text-white">
                    Subscriptions
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold dark:text-white">
                    {totalSubscriptions}
                </h1>
                <p className="text-xs">
                    trend title <span className="text-green-500">+ 75.3%</span>
                </p>
            </div>
            <div className="h-60">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default TotalEarningDailyChart;
