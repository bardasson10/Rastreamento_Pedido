import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from "react-icons/lu";
import { Button } from './ui/button';

const ModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            setIsDarkMode(savedMode === 'dark');
            document.body.classList.toggle('dark', savedMode === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
            document.body.classList.toggle('dark', prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.body.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className='border rounded-full'
        >
            {isDarkMode ? <LuSun className="w-5 h-5" /> : <LuMoon className="w-5 h-5" />}
        </Button>
    );
};

export default ModeToggle;