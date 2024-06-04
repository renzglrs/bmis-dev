"use client"
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import avatarImg from "../public/avatar2.png"
import Link from 'next/link'

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
    <nav className="flex items-center w-full h-full py-4 px-10 border-b border-t">


      <div className="flex justify-between items-center h-full w-full ">
        <h1 className="text-xl font-semibold">
          {pageName()}
        </h1>

        <div>
          <Link href="/">
            <Image 
              src={avatarImg}
              width={24}
              height={24}
              className="bg-gray-500 rounded-full"
              alt='avatar'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar