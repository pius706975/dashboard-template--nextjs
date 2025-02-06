'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

interface LineChartProps {
    labels: string[];
    currentYearEarnings: number[];
    previousYearEarnings: number[];
    totalEarning: string;
}

const TotalEarningLineChart: React.FC<LineChartProps> = ({
    labels,
    currentYearEarnings,
    previousYearEarnings,
    totalEarning,
}) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const [chartWidth, setChartWidth] = useState<number>(600);

    useEffect(() => {
        const updateChartSize = () => {
            if (chartContainerRef.current) {
                setChartWidth(chartContainerRef.current.clientWidth);
            }
        };

        updateChartSize();
        window.addEventListener('resize', updateChartSize);
        return () => window.removeEventListener('resize', updateChartSize);
    }, []);

    const data: ChartData<'line'> = {
        labels,
        datasets: [
            {
                label: 'This Year',
                data: currentYearEarnings,
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: '2024',
                data: previousYearEarnings,
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                borderColor: 'rgba(75, 192, 192, 0.5)',
                borderDash: [5, 5],
                tension: 0.3,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'gray',
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        return `$${tooltipItem.raw.toLocaleString()}`;
                    },
                },
            },
        },
    };

    return (
        <div
            ref={chartContainerRef}
            className="w-full max-w-5xl mx-auto p-5 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-gray-400 dark:shadow-none h-[clamp(200px,35vw,300px)]">
            <div className="flex items-center gap-6">
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

            <div className="h-[clamp(100px,25vw,210px)]">
                <Line data={data} options={options} width={chartWidth} />
            </div>
        </div>
    );
};

export default TotalEarningLineChart;
