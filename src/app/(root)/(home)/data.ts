export const cardData = [
    {
        title: 'Total Earning',
        variable: '',
        total: 500000.97,
        trendTitle: 'Trend Title',
        percentage: '+75.3',
    },
    {
        title: 'Views',
        variable: '+',
        total: 122893,
        trendTitle: 'Trend Title',
        percentage: '+75.3',
    },
    {
        title: 'Total Sales',
        variable: '+',
        total: 122893,
        trendTitle: 'Trend Title',
        percentage: '+75.3',
    },
    {
        title: 'Subscriptions',
        variable: '+',
        total: 122893,
        trendTitle: 'Trend Title',
        percentage: '+75.3',
    },
];

export const chartData = [
    { label: 'Jan', value: 1500 },
    { label: 'Feb', value: 4500 },
    { label: 'Mar', value: 1200 },
    { label: 'Apr', value: 4800 },
    { label: 'May', value: 3000 },
    { label: 'Jun', value: 3500 },
    { label: 'Jul', value: 4700 },
    { label: 'Aug', value: 7500 },
    { label: 'Sep', value: 1100 },
    { label: 'Oct', value: 3200 },
    { label: 'Nov', value: 1400 },
    { label: 'Dec', value: 3100 },
];

export const augustWeeksExample = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [1800, 2200, 1400, 2100],
};

export const novemberSumExample = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [400, 250, 389, 361],
};

export const DaysExample = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [100, 500, 400, 150, 600, 50, 350]
};

export const salesData = [
    {
        img: '',
        name: 'Joko Selo Samudro',
        email: 'jokoselo@gmail.com',
        earn: '$1500.00',
    },
    {
        img: '',
        name: 'Joko Tingkir',
        email: 'jokotingkir@gmail.com',
        earn: '$1000.00',
    },
    {
        img: '',
        name: 'Wiro Sableng',
        email: 'wirowiro@gmail.com',
        earn: '$1700.73',
    },
    {
        img: '',
        name: 'Thomas Jasper Cat',
        email: 'tomcat@gmail.com',
        earn: '$1500.99',
    },
    {
        img: '',
        name: 'Gerald Jinx Mouse',
        email: 'jerrymouse@gmail.com',
        earn: '$1500.00',
    },
    {
        img: '',
        name: 'Joko Selo Samudro',
        email: 'jokoselo@gmail.com',
        earn: '$1500.00',
    },
    // {
    //     img: '',
    //     name: 'Joko Tingkir',
    //     email: 'jokotingkir@gmail.com',
    //     earn: '$1000.00',
    // },
];

// Total Earning Line Chart
export const lineChartlabels: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const currentYearEarnings: number[] = [
    32000.75, 45000.2, 38000.9, 52000.5, 47000.3, 60000.8, 39000.25, 55000.45, 48000.95, 43000.7, 62000.1, 49000.97,
];

export const previousYearEarnings: number[] = [
    38000.5, 36000.4, 29000.2, 43000.6, 35000.8, 47000.3, 21000.75, 42000.5, 40000.95, 59000.2, 38000.7, 44000.1,
];

const monthlySubscriptions = [
    9500, 10800, 8700, 9200, 11300, 9000,  
    11000, 11500, 11100, 11600, 9600,
];

export const SubscriptionsChartData = {
    last6Months: monthlySubscriptions.slice(-6),
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
}

export const novemberTotal = 1400;
export const decemberTotal = 3100; 

export const novemberWeekly = [
    Math.round(novemberTotal * 0.30),
    Math.round(novemberTotal * 0.15),
    Math.round(novemberTotal * 0.10),
    Math.round(novemberTotal * 0.45),
];

export const decemberWeekly = [
    Math.round(decemberTotal * 0.10),
    Math.round(decemberTotal * 0.15),
    Math.round(decemberTotal * 0.55),
    Math.round(decemberTotal * 0.20),
];
