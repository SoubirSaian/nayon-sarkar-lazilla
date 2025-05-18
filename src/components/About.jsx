import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='mt-8 flex items-center justify-center'>
      <div className='w-1/2'>
        <Image src={assets.about_img} alt='about-img' className='' />
      </div>

      <div className='w-1/2 p-8'>
        <h6 className='text-[#1769fe] text-[22px] font-bold'>Progress & Customization</h6>
        <h2 className='text-[40px] font-[600]  mt-4 pr-10'>Discover & growth  with Analysis</h2>
        <p className='text-[#645e80] mt-4 pr-30'>There are many variations of passages of Lorem an Ipsum available as the majority have suffered alteration in some of our forms the injected humor randomized words which don't look.</p>
        <ul className='mt-4 list-disc pl-4'>

            <li className='font-bold text-[#645e80]'>Application Design</li>
            <li className='font-bold text-[#645e80] mt-4'>Web and App development</li>
            <li className='font-bold text-[#645e80] mt-4'>Marketing research and analysis</li>
        </ul>

        <button className="mt-4 bg-[#1769fe] text-white  text-[15px] font-medium hover:bg-black active:scale-95 transition-all w-40 h-11 rounded-full">Read more</button>
      </div>
    </div>
  )
}

export default About;
