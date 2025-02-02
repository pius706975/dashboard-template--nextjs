'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from 'next-themes';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <ThemeProvider attribute="class">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            <div
                className="min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-20 font-[family-name:var(--font-geist-sans)] 
                transition-all lg:ml-64 lg:max-w-[calc(100%-256px)]">
                {children}
            </div>
        </ThemeProvider>
    );
};

export default ClientLayout;
