"use client";
import Link from "next/link"
import Image from  "next/image"
import { navLinks } from "../constants"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
 import { Button } from "@/components/ui/button"
 import { usePathname } from 'next/navigation'  


const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row px-4 py-6 w-full justify-between">
               
    <div className="flex gap-2 items-center justify-start">
    <Sheet>
    <SheetTrigger>
    <Image 
        src="/icons/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="cursor-pointer"
        />
    </SheetTrigger>
    <SheetContent side="left">
     
    <SheetTitle></SheetTitle>
    
 
      
      
    <Image 
                  src="/images/logo.png"
                  alt="logo"
                  width={120}
                  height={13}
                  className="flex justify-center"
                />
              <ul className="flex flex-col items-center gap-y-4">
                {navLinks.map((link) => {
                    const isActive = link.route === pathname

                    return (

                        <li className={`${isActive &&
                            'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                        >
                           <Link className="sidebar-link" href={link.route}>
                            
                             <span className="gap-y-4 flex justify-center">                      
                             {link.label}
                             </span>  
                           </Link>
                        </li>
                    )
                })}
                </ul>
                
    </SheetContent>
    </Sheet>

    
    </div>

<div className="flex justify-center items-center px-2">
<Link href="/" className="flex justify-center">
  <Image
    src="/images/logo.png"
    alt="logo image"
    width={100}
    height={150}
    className="flex justify-center mr-10"
  />
</Link>
</div>
    <div className="justify-end gap-4 hidden xl:flex">
    <Button asChild>
    <Link href="/sign-up">Register</Link>
    </Button>
    <Button asChild>
    <Link href="/sign-in">Sign In</Link>
    </Button>

    </div>

    </div>
  )
}

export default Mobilenav