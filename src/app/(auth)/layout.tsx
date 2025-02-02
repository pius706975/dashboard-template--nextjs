import ThemeChanger from '@/components/DarkSwitcher';
import { ThemeProvider } from 'next-themes';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <ThemeProvider attribute="class">
                <ThemeChanger className="fixed top-4 left-4 p-2 rounded-full z-50 border border-purple-700 dark:border-white" />
                
                <div>{children}</div>
            </ThemeProvider>
        </main>
    );
};

export default Layout;
