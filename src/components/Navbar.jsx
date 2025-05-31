import { assets } from '@/assets/asset';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-[#00001a]' >

        <nav className="container mx-auto h-[70px] flex items-center justify-between z-30 transition-all">
        
            <Link href="/">
                <Image className="h-9" src={assets.Rezille_logo} alt="dummyLogoWhite"/>
            </Link>

            <ul className="text-white font-medium md:flex hidden items-center gap-10">
                <li><Link className="hover:text-white/70 transition" href="/">Home</Link></li>
                <li><a className="hover:text-white/70 transition" href="#">About Us</a></li>
                <li><a className="hover:text-white/70 transition" href="#">Service</a></li>
                <li><Link className="hover:text-white/70 transition" href="/pricing">Pricing</Link></li>
                <li><a className="hover:text-white/70 transition" href="#">Blog</a></li>
                <li><a className="hover:text-white/70 transition" href="#">Contact us</a></li>
            </ul>

            <div className="hidden md:flex items-center gap-8">

                <button type="button" className="bg-[#000060] text-white md:inline hidden text-sm hover:opacity-90 active:scale-95 border border-gray-300 transition-all w-40 h-11 rounded-full">
                    Signup
                </button>
                <button type="button" className="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full">
                    Login
                </button>
            </div>


            {/* mobile menu */}
            <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
                    <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z"/>
                </svg>
            </button>

            <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 hidden md:hidden">
                <ul className="flex flex-col space-y-4 text-white text-lg">
                    <li><a href="#" className="text-sm">Home</a></li>
                    <li><a href="#" className="text-sm">Services</a></li>
                    <li><a href="#" className="text-sm">Portfolio</a></li>
                    <li><a href="#" className="text-sm">Pricing</a></li>
                </ul>
                <button type="button" className="bg-white text-gray-700 mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full">
                    Get started
                </button>
            </div>
        </nav>
    </div>


  )
}

export default Navbar;
