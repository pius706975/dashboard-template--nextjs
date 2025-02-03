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
                label: 'Total Earnings This Year',
                data: currentYearEarnings,
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: 'Total Earnings 2024',
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
            className="w-full max-w-5xl mx-auto p-5 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-gray-400 dark:shadow-none">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 dark:text-white">
                Total Earnings {totalEarning}
            </h1>
            <div className="relative h-[clamp(250px,50vw,400px)]">
                <Line data={data} options={options} width={chartWidth} />
            </div>
        </div>
    );
};

export default TotalEarningLineChart;
