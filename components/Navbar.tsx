"use client"
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import avatarImg from "../public/avatar2.png"
import Link from 'next/link'
import { Triangle } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const pageName = () => {
    if(pathname === "/") return "Dashboard";
    if(pathname === "/branches") return "Branches";
    if(pathname === "/inventory") return "Inventory";
    if(pathname === "/products") return "Products";
    if(pathname === "/reports") return "Reports";
    if(pathname === "/users") return "Users";

  }
  return (
    <nav className="flex items-center w-full h-full p-4 border-b">


      <div className="flex justify-between items-center h-full w-full ">
        <h1 className="text-xl font-semibold">
          {pageName()}
        </h1>

        <div className='h-auto'>
          <Image 
            src={avatarImg}
            width={34}
            height={34}
            className="bg-gray-500 object-contain rounded-full"
            alt='avatar'
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar