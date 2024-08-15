import React, {useState, useEffect} from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme === 'dark') {setDarkMode(true)}
    }, []);

    useEffect(() => {
        if (darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light") 
        }
    }, [darkMode])
  return (
    <div>
        <div className='flex justify-between items-center mx-2 cursor-pointer rounded-md dark:bg-slate-900 dark:text-white bg-gray-200'>
            <div className='border-2 flex border-white h-8 m-1 rounded-md'>
                {darkMode ? (
                    <SunIcon onClick={() => setDarkMode(!darkMode)} className='w-6 h-6 m-1'></SunIcon>
                ) : (
                    <MoonIcon onClick={() => setDarkMode(!darkMode)} className='w-6 h-6 m-1 -rotate-90'></MoonIcon>
                )}
            </div>
        </div>
    </div>
  )
}
