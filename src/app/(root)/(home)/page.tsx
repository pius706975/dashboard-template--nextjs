'use client';
import { DashboardCard, RecentSales } from '@/components/cards/Dashboard';
import { Header, Header2 } from '@/components/Navbar';
import {
    cardData,
    chartData,
    currentYearEarnings,
    lineChartlabels,
    previousYearEarnings,
    salesData,
} from './data';
import OverviewBarChart from '@/components/chart/Overview';
import TotalEarningLineChart from '@/components/chart/TotalEarning';

const Home = () => {
    const formatNumber = (number: number, isCurrency: boolean = false) => {
        return new Intl.NumberFormat('en-US', {
            style: isCurrency ? 'currency' : 'decimal',
            currency: isCurrency ? 'USD' : undefined,
            minimumFractionDigits: isCurrency ? 2 : 0,
            maximumFractionDigits: 2,
        }).format(number);
    };

    const labels = chartData.map(data => data.label);
    const datasets = chartData.map(data => data.value);

    return (
        <div>
            <section>
                <Header heading="Dashboard" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardData.map((data, index) => (
                        <DashboardCard
                            key={index}
                            title={data.title}
                            variable={data.variable}
                            total={formatNumber(
                                data.total,
                                data.title === 'Total Earning',
                            )}
                            trendTitle={data.trendTitle}
                            percentage={data.percentage}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 mt-6">
                    <div className="min-w-0">
                        <OverviewBarChart labels={labels} datasets={datasets} />
                    </div>
                    <RecentSales salesData={salesData} />
                </div>
            </section>

            <section>
                <Header2 heading="Stats" />

                <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 mt-6">
                    <TotalEarningLineChart
                        totalEarning={formatNumber(500000.97, true)}
                        labels={lineChartlabels}
                        currentYearEarnings={currentYearEarnings}
                        previousYearEarnings={previousYearEarnings}
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
