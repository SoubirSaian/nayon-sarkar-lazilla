import { assets } from '@/assets/asset'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className=' text-white bg-[url("/BG-blue.png")] bg-no-repeat bg-center bg-cover py-16'>

      <div className='container mx-auto pt-24'>

        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>

          <div className='max-w-[90%] '>
            <h1 className='text-5xl font-bold'>Make your Saas and Awesome Design</h1>
            <p className='text-sm opacity-70 mt-6'>It is a long established fact  that a reader will be distracted by the readable content of a page when looking</p>
            <div className='flex gap-6 mt-6'>
                <button className="bg-white text-gray-700  text-sm hover:bg-black hover:text-white active:scale-95 transition-all duration-400 w-40 h-11 rounded-full">Contact us</button>
                <button className="bg-black text-white text-sm hover:bg-white hover:text-black active:scale-95 transition-all duration-400 w-40 h-11 rounded-full">Get started</button>
            </div>
          </div>

          <div className=''>
            <Image src={assets.dashboard_img} alt='hero-image' className='' />
          </div>

        </div>
      </div>


    </div>
  )
}

export default HeroSection
