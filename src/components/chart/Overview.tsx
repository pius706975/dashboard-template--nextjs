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

interface OverviewBarChartProps {
    labels: string[];
    datasets: number[];
}


const OverviewBarChart: React.FC<OverviewBarChartProps> = ({labels, datasets}) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
                data: datasets,
                backgroundColor: [
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                ],
                borderColor: [
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                    '#4095ff',
                ],
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
        scales: {
            y: {
                title: {
                    display: false,
                    text: 'Money',
                },
                display: true,
                beginAtZero: true,
                ticks: {
                    stepSize: 1500,
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
                    text: 'Month',
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
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-md shadow-gray-400 dark:shadow-none mx-2">
            <h1 className="text-2xl font-semibold mb-4 dark:text-white">
                Overview
            </h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default OverviewBarChart;
