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
import Link from 'next/link';
import { useState, useEffect, JSX } from 'react';
import { usePathname } from 'next/navigation';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

interface MenuItem {
    title: string;
    icon: JSX.Element;
    subMenu?: {
        name?: string;
        url?: string;
    }[];
    url?: string;
    key: string;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
    const pathname = usePathname();
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
        const updatedDropdowns = { ...openDropdowns };

        menuItems.forEach(({ key, subMenu }) => {
            if (subMenu && subMenu.some(item => item.url === pathname)) {
                updatedDropdowns[key] = true;
            }
        });

        setOpenDropdowns(updatedDropdowns);
    }, [pathname]);

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
            url: '/',
            key: 'dashboard',
        },
        {
            title: 'Store',
            icon: <StoreIcon />,
            subMenu: [
                {
                    name: 'Product',
                    url: '/product',
                },

                {
                    name: 'Add Product',
                    url: '/add-product',
                },
            ],
            key: 'store',
        },
        {
            title: 'Analytic',
            icon: <AnalyticIcon />,
            subMenu: [
                {
                    name: 'Traffic',
                    url: '/traffic',
                },
                {
                    name: 'Earning',
                    url: '/earning',
                },
            ],
            key: 'analytic',
        },
        {
            title: 'Finances',
            icon: <FinanceIcon />,
            subMenu: [
                {
                    name: 'Payment',
                    url: '/payment',
                },
                {
                    name: 'Payout',
                    url: '/payout',
                },
            ],
            key: 'finances',
        },
        {
            title: 'Account Setting',
            icon: <SettingsIcon />,
            subMenu: [
                {
                    name: 'My Profile',
                    url: '/profile',
                },
                {
                    name: 'Security',
                    url: '/security',
                },
            ],
            key: 'account',
        },
        {
            title: 'Help and Support',
            icon: <HelpIcon />,
            subMenu: [
                {
                    name: 'Dummy Menu 1',
                    url: '#',
                },
                {
                    name: 'Dummy Menu 2',
                    url: '/#',
                },
            ],
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
                    {menuItems.map(({ title, icon, subMenu, key, url }) => (
                        <li key={key}>
                            {url ? (
                                <Link href={url} className="block">
                                    <button
                                        className={`w-full flex justify-between items-center focus:outline-none rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                            pathname === url
                                                ? 'bg-gray-200 dark:bg-gray-700'
                                                : ''
                                        }`}>
                                        <span className="flex items-center gap-2">
                                            {icon}
                                            <span>{title}</span>
                                        </span>
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    onClick={() => toggleDropdown(key)}
                                    className="w-full flex justify-between items-center focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        {icon}
                                        <span>{title}</span>
                                    </span>
                                    {subMenu && (
                                        <ArrowIcon
                                            isOpen={openDropdowns[key]}
                                        />
                                    )}
                                </button>
                            )}

                            {subMenu && openDropdowns[key] && (
                                <ul className="space-y-2 pl-8 text-sm mt-2">
                                    {subMenu.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={item.url as string}>
                                            <li
                                                className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg ${
                                                    pathname === item.url
                                                        ? 'bg-gray-200 dark:bg-gray-700'
                                                        : ''
                                                }`}>
                                                {item.name}
                                            </li>
                                        </Link>
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
