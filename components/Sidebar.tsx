"use client"

import { 
    Croissant, 
    LayoutDashboard, 
    LineChart, 
    Package, 
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
        route: '/dashboard',
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


const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-full max-w-[200px] flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 sm:py-5">
            <Link href="#" className='flex gap-3 justify-start w-full px-4 items-center'>
                <Triangle size={20} strokeWidth={3} />
                <span className=" max-sm:hidden text-sm font-bold">MBMIS</span>
            </Link>

            <ul className="flex flex-col items-start border-t border-b w-full py-4 px-2 ">
                {links.map((link) => (
                    <li className='w-full'>
                        <Link href="/docs" className="flex items-start justify-between py-3 px-2 text-sm rounded-md font-medium hover:bg-secondary">
                            <div className='flex gap-2 items-start '>
                                {link.icon}
                                <span>{link.label}</span>
                            </div>
                            {/* dynamic value */}
                            {/* <p>23</p> */}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar