"use client"

import { 
    Component,
    Croissant, 
    LayoutDashboard, 
    LineChart, 
    LogOut, 
    Package, 
    Settings, 
    Store, 
    Triangle, 
    Users2 
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Link = {
    label: string,
    route: string,
    icon: React.ReactNode
}

export const links: Link[]= [
    {
        label: 'Dashboard',
        route: '/',
        icon: <LayoutDashboard size={20} />,
    },
    {
        label: 'Users',
        route: '/users',
        icon: <Users2 size={20} />,
    },
    {
        label: 'Branches',
        route: '/branches',
        icon: <Store size={20} />,
    },
    {
        label: 'Products',
        route: '/products',
        icon: <Croissant size={20} />,
    },
    {
        label: 'Inventory',
        route: '/inventory',
        icon: <Package size={20} />,
    },
    {
        label: 'Reports',
        route: '/reports',
        icon: <LineChart size={20} />,
    },
]

// "fixed inset-y-0 left-0 z-10 hidden lg:w-full max-md:w-auto max-w-[200px] flex-col border-r bg-background sm:flex"

const Sidebar = () => {
  return (
    <aside className="flex w-fit h-screen flex-col justify-between border-r border-t bg-background max-sm:hidden lg:w-[264px]">
        <nav className="flex flex-col items-center">

            <div className="flex items-center h-[60px] w-full p-4">
                <Link href="#" className='flex gap-3 justify-start items-center'>
                    <Component size={20} strokeWidth={3} />
                    <span className="text-base font-semibold max-md:hidden">BMIS</span>
                </Link>
            </div>
            
            <ul className="flex flex-col items-start border-t border-b w-full py-4 px-2 ">
                {links.map((link) => (
                    <li className='w-full'>
                        <Link href={link.route} className="flex items-start justify-between py-3 px-2 text-sm rounded-md font-medium hover:bg-secondary">
                            <div className='flex gap-2 items-start '>
                                {link.icon}
                                <span className='max-md:hidden'>{link.label}</span>
                            </div>
                            {/* dynamic value */}
                            {/* <p>23</p> */}
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className="flex flex-col items-start border-b w-full py-4 px-2 ">
                 <li className='w-full'>
                    <Link href="/" className="flex items-start justify-between py-3 px-2 text-sm rounded-md font-medium hover:bg-secondary">
                        <div className='flex gap-2 items-start '>
                            <Settings size={20} />
                            <span className='max-md:hidden'>Settings</span>
                        </div>
                        {/* dynamic value */}
                        {/* <p>23</p> */}
                    </Link>
                </li>
                 <li className='w-full'>
                    <Link href="/" className="flex items-start justify-between py-3 px-2 text-sm rounded-md font-medium hover:bg-secondary">
                        <div className='flex gap-2 items-start '>
                            <LogOut size={20} />
                            <span className='max-md:hidden'>Logout</span>
                        </div>
                        {/* dynamic value */}
                        {/* <p>23</p> */}
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar