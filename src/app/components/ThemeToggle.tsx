"use client"
import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
        else if (theme === "light") setDarkMode(false);
    }, []);


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div 
            className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white border-2 border-gray-400'}`} 
            onClick={() => setDarkMode(!darkMode)}
        >
            <FaMoon className="text-white" size={18} />
            <div className={`absolute w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-8 bg-white' : 'bg-gray-400'}`}>
            </div>
            <BsSunFill className="ml-auto text-yellow-400" size={18}/>
        </div>
    )
}
