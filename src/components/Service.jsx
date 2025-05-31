import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const Service = () => {
  return (
    <div className=' container mx-auto my-[50px]'>

      <h6 className='text-center text-[22px] font-semibold text-[#1769fe] leading-[46px]'> Services</h6>
      <h2 className='text-center text-[48px] font-medium leading-[57px]'>Our Exclusive Services</h2>

           {/* different services */}
      <div className='px-[30px] mt-6 grid grid-cols-3 gap-4'>

        <div className='bg-white text-left border border-[#eeeeee] rounded-[5px] p-[30px]'>
            <div className='h-[85px] w-[85px] bg-[#1769fe12] p-[25px] border border-[#c0d7ff] rounded-full hover:bg-[#1769fe] hover:shadow-md hover:shadow-[#1769fe] transition-all duration-500'>
                <Image src={assets.motherboard} alt='computer-icon'  />
            </div>
            <h2 className='mt-[30px] pb-[5px] text-[22px] font-medium leading-[27px] hover:text-[#1769fe]'>Web Customization</h2>
            <p className='mt-3 text-wrap max-w-3xl opacity-80'>Web customization refers to the process of modifying the look, feel of a website to meet specific needs.</p>
        </div>

        <div className='bg-white text-left border border-[#eeeeee] rounded-[5px] p-[30px]'>
            <div className='h-[85px] w-[85px] bg-[#1769fe12] p-[25px] border border-[#c0d7ff] rounded-full hover:bg-[#1769fe] hover:shadow-md hover:shadow-[#1769fe] transition-all duration-500'>
                <Image src={assets.industrial} alt='computer-icon'  />
            </div>
            <h2 className='mt-[30px] pb-[5px] text-[22px] font-medium leading-[27px] hover:text-[#1769fe]'>UI/UX design</h2>
            <p className='mt-3 text-wrap max-w-3xl opacity-80'>it is important to have a collaborative and iterative approach to design, regularly testing and gathering.</p>
        </div>

        <div className='bg-white text-left border border-[#eeeeee] rounded-[5px] p-[30px]'>
            <div className='h-[85px] w-[85px] bg-[#1769fe12] p-[25px] border border-[#c0d7ff] rounded-full hover:bg-[#1769fe] hover:shadow-md hover:shadow-[#1769fe] transition-all duration-500'>
                <Image src={assets.organization} alt='computer-icon'  />
            </div>
            <h2 className='mt-[30px] pb-[5px] text-[22px] font-medium leading-[27px] hover:text-[#1769fe]'>Perfect Strategy</h2>
            <p className='mt-3 text-wrap max-w-3xl opacity-80'>The development and implementation of a successful strategy typically involves thorough analysis.</p>
        </div>
        <div className='bg-white text-left border border-[#eeeeee] rounded-[5px] p-[30px]'>
            <div className='h-[85px] w-[85px] bg-[#1769fe12] p-[25px] border border-[#c0d7ff] rounded-full hover:bg-[#1769fe] hover:shadow-md hover:shadow-[#1769fe] transition-all duration-500'>
                <Image src={assets.motherboard} alt='computer-icon'  />
            </div>
            <h2 className='mt-[30px] pb-[5px] text-[22px] font-medium leading-[27px] hover:text-[#1769fe]'>Innovative Ideas</h2>
            <p className='mt-3 text-wrap max-w-3xl opacity-80'>Innovative ideas refer to novel and creative concepts, approaches, or solutions to problems or challenge.</p>
        </div>
        <div className='bg-white text-left border border-[#eeeeee] rounded-[5px] p-[30px]'>
            <div className='h-[85px] w-[85px] bg-[#1769fe12] p-[25px] border border-[#c0d7ff] rounded-full hover:bg-[#1769fe] hover:shadow-md hover:shadow-[#1769fe] transition-all duration-500'>
                <Image src={assets.industrial} alt='computer-icon'  />
            </div>
            <h2 className='mt-[30px] pb-[5px] text-[22px] font-medium leading-[27px] hover:text-[#1769fe]'>Time Management</h2>
            <p className='mt-3 text-wrap max-w-3xl opacity-80'>Time management refers to the process of planning and organizing the use of time in order to achieve.</p>
        </div>
        <div className='bg-white text-left border border-[#eeeeee] rounded-[5px] p-[30px]'>
            <div className='h-[85px] w-[85px] bg-[#1769fe12] p-[25px] border border-[#c0d7ff] rounded-full hover:bg-[#1769fe] hover:shadow-md hover:shadow-[#1769fe] transition-all duration-500'>
                <Image src={assets.organization} alt='computer-icon'  />
            </div>
            <h2 className='mt-[30px] pb-[5px] text-[22px] font-medium leading-[27px] hover:text-[#1769fe]'>Payment Gateway</h2>
            <p className='mt-3 text-wrap max-w-3xl opacity-80'>Great! Providing payment gateway services can be a valuable offering for businesses and customers alike.</p>
        </div>

      </div>
    </div>
  )
}

export default Service;
