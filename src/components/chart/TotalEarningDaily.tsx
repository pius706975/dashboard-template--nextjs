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

interface TotalEarningDailyChartProps {
    labels: string[];
    datasets: number[];
    totalEarning: string;
}

const TotalEarningDailyChart: React.FC<TotalEarningDailyChartProps> = ({
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
                barPercentage: 1,
                borderRadius: {
                    topLeft: 5,
                    topRight: 5,
                },
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: false,
                    text: 'Money',
                },
                display: true,
                beginAtZero: true,
                ticks: {
                    stepSize: 100,
                    min: 0,
                    max: 6000,
                    callback: (
                        tickValue: string | number,
                        index: number,
                        ticks: any[],
                    ) => {
                        if (typeof tickValue === 'number') {
                            return `$${tickValue}`;
                        } else {
                            return tickValue;
                        }
                    },
                },
                grid: {
                    display: false,
                },
            },
            x: {
                title: {
                    display: false,
                    text: 'Day',
                },
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
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-gray-400 dark:shadow-none mx-2 flex flex-col lg:flex-row gap-4">
            <div className="bg-gray-200 dark:bg-[#151515] p-3 rounded-md flex-1">
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
            <div className="w-full relative">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default TotalEarningDailyChart;
