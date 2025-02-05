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
import { Bar } from 'react-chartjs-2';

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

interface TotalEarningBarChartProps {
    labels: string[];
    datasets: number[];
    totalEarning: string;
}

const TotalEarningBarChart: React.FC<TotalEarningBarChartProps> = ({
    labels,
    datasets,
    totalEarning,
}) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
                data: datasets,
                backgroundColor: '#25bc5b',
                borderColor: '#25bc5b',
                borderWidth: 1,
                barPercentage: 0.8, 
                borderRadius: {
                    topLeft: 5,
                    topRight: 5,
                },
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, 
        responsive: true,
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                ticks: {
                    stepSize: 2000,
                    min: 0,
                    max: 8000,
                    callback: (tickValue: string | number) =>
                        typeof tickValue === 'number' ? `$${tickValue}` : tickValue,
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
                    Total Earnings
                </p>

                <h1 className="text-xl sm:text-2xl font-semibold dark:text-white">
                    {totalEarning}
                </h1>

                <p className="text-xs">
                    trend title <span className="text-green-500">+ 75.3%</span>
                </p>
            </div>

            <div className="">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default TotalEarningBarChart;
