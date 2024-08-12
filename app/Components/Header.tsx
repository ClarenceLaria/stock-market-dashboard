import React from 'react'
import { CalendarDaysIcon, MoonIcon, MagnifyingGlassCircleIcon, SunIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathName = usePathname();
    const links = [
        { name: 'Todays Stats', href: '/'},
        { name: 'Cryptos', href: '/'},
        { name: 'Exchanges', href: '/'},
        { name: 'Stocks', href: '/'},
        { name: 'News', href: '/'},
    ];
  return (
    <div className='w-full h-10 my-2 flex flex-row justify-between'>
        <div className='flex w-6/10'>
            <div className='mx-2 rounded-md bg-gray-200'>
                <div className='flex h-8 text-center items-center'>
                    <CalendarDaysIcon className='w-6 h-6 ml-2'></CalendarDaysIcon>
                    <h1 className='px-2'>Jan 23, 2024 12:34:43</h1>
                </div>
            </div>
            <div className='mx-2 rounded-md bg-gray-200'>
                <div className=' grid grid-cols-5'>
                    {links.map((link) => {
                        if (link.name === 'Todays Stats'){
                            return(
                            <Link href='/' className={clsx(`border-2 border-white flex flex-row h-8 m-1 rounded-md justify-center items-center`, {'bg-navy text-white': pathName === link.href,})}>
                                <div className='mb-1 px-2'>&#x1F449;</div>
                                <h1 className=' pr-2 '>{link.name}</h1>
                            </Link>
                        )} 
                        else{
                         return (
                            <Link href={''} className={clsx(`border-2 border-white flex flex-row h-8 m-1 rounded-md justify-center items-center`, {'bg-navy text-white': pathName === link.href,})}>
                                <h1 className=' pr-2 '>{link.name}:</h1>
                                <h1>2.2M+</h1>
                            </Link>
                        )}
                    })}
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='mx-2 flex rounded-md bg-gray-100'>
                <h1 className='pl-2 py-2'>Search</h1>
                <MagnifyingGlassCircleIcon className='w-6 h-6 mt-2.5 mx-2'></MagnifyingGlassCircleIcon>
            </div>
            <div className='mx-2 flex rounded-md bg-gray-100'>
                <h1 className='px-3 py-2'>USD</h1>
            </div>
            <div className='mx-2 flex rounded-md bg-gray-100'>
                <MoonIcon className='w-6 h-6 -rotate-90 m-2'></MoonIcon>
            </div>
        </div>
    </div>
  )
}
