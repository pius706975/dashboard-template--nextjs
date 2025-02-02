import { useEffect, useRef, useState } from 'react';
import ThemeChanger from './DarkSwitcher';
import { UserIcon } from './icons/dashboard/icons';
import { NotificationIcon, SearchIcon } from './icons/navbarIcons';
import { DashboardIcon } from './icons/sidebarIcons';
import Input from './input/Input';

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setSearchOpen(false);
            }
        };

        if (searchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full dark:bg-black bg-white p-4 flex justify-between items-center">
                <button onClick={toggleSidebar} className="">
                    ☰
                </button>

                <div className="flex items-center space-x-4">
                    <div className="hidden sm:flex items-center gap-2">
                        <Input
                            type="text"
                            placeholder="Search"
                            onChange={() => {}}
                        />
                    </div>

                    <button
                        className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                        onClick={() => setSearchOpen(true)}>
                        <SearchIcon />
                    </button>

                    <button className="p-2">
                        <DashboardIcon />
                    </button>

                    <button className="p-2">
                        <NotificationIcon />
                    </button>

                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
                        <UserIcon />
                    </div>
                    <ThemeChanger />
                </div>
            </header>

            {searchOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
                    <div
                        ref={searchRef}
                        className="bg-white dark:bg-black p-4 rounded-lg shadow-md w-3/4 max-w-lg">
                        <div className="flex gap-2">
                            <Input
                                type="text"
                                placeholder="Search..."
                                onChange={() => {}}
                            />
                            <button className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                                <SearchIcon />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

export const Header = ({ heading }: { heading: string }) => {
    return (
        <div className="flex justify-between items-center mb-5 mt-5">
            <h1 className="text-3xl font-semibold">{heading}</h1>

            <button className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                Add Product
            </button>
        </div>
    );
};
