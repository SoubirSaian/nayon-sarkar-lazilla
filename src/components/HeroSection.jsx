import { assets } from '@/assets/asset'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/banner.svg")] bg-no-repeat bg-center bg-cover h-screen '>

      <div className='w-2/5'>
        <h1 className='text-5xl font-bold'>Make your Saas <br /> and Awesome Design</h1>
        <p className='text-sm opacity-70 mt-4'>It is a long established fact  that a reader will be distracted by the readable content of a page when looking</p>
        <div className='flex gap-6 mt-4'>
            <button className="bg-white text-gray-700  text-sm hover:bg-black hover:text-white active:scale-95 transition-all w-40 h-11 rounded-full">Contact us</button>
            <button className="bg-black text-white text-sm hover:bg-white hover:text-black active:scale-95 transition-all w-40 h-11 rounded-full">Get started</button>
        </div>
      </div>

      <div className='w-3/5'>
        <Image src={assets.heroImage} alt='hero-image' />
      </div>
    </div>
  )
}

export default HeroSection
