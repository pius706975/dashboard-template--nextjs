'use client';
import {
    AnalyticIcon,
    ArrowIcon,
    CloseIcon,
    DashboardIcon,
    FinanceIcon,
    HelpIcon,
    SettingsIcon,
    StoreIcon,
} from '@/components/icons/sidebarIcons';
import { useState, useEffect, JSX } from 'react';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

interface MenuItem {
    title: string;
    icon: JSX.Element;
    subMenu?: string[];
    key: string;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
        {
            store: false,
            analytic: false,
            finances: false,
            account: false,
            help: false,
        },
    );

    const [screenWidth, setScreenWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 1024,
    );

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = (menu: string) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const menuItems: MenuItem[] = [
        {
            title: 'Dashboard',
            icon: <DashboardIcon />,
            key: 'dashboard',
        },
        {
            title: 'Store',
            icon: <StoreIcon />,
            subMenu: ['Product', 'Add Product'],
            key: 'store',
        },
        {
            title: 'Analytic',
            icon: <AnalyticIcon />,
            subMenu: ['Traffic', 'Earning'],
            key: 'analytic',
        },
        {
            title: 'Finances',
            icon: <FinanceIcon />,
            subMenu: ['Payment', 'Payout'],
            key: 'finances',
        },
        {
            title: 'Account Setting',
            icon: <SettingsIcon />,
            subMenu: ['My Profile', 'Security'],
            key: 'account',
        },
        {
            title: 'Help and Support',
            icon: <HelpIcon />,
            subMenu: ['Dummy Menu 1', 'Dummy Menu 2'],
            key: 'help',
        },
    ];

    return (
        <aside
            className={`fixed left-0 top-0 h-full w-64 dark:bg-black bg-white p-5 transition-transform ${
                screenWidth >= 1024
                    ? 'translate-x-0'
                    : isOpen
                    ? 'translate-x-0'
                    : '-translate-x-full'
            }`}>
            <h2 className="text-xl font-bold mb-10">
                <span className="flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        Bitstore
                    </div>

                    {screenWidth < 1024 && (
                        <button onClick={toggleSidebar} className="">
                            <CloseIcon />
                        </button>
                    )}
                </span>
            </h2>
            <nav>
                <ul className="space-y-4">
                    {menuItems.map(({ title, icon, subMenu, key }) => (
                        <li key={key}>
                            <button
                                onClick={() => toggleDropdown(key)}
                                className="w-full flex justify-between items-center focus:outline-none">
                                <span className="flex items-center gap-2">
                                    {icon}
                                    <span>{title}</span>
                                </span>
                                {subMenu && (
                                    <ArrowIcon isOpen={openDropdowns[key]} />
                                )}
                            </button>
                            {subMenu && openDropdowns[key] && (
                                <ul className="space-y-2 pl-8 text-sm mt-2">
                                    {subMenu.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
