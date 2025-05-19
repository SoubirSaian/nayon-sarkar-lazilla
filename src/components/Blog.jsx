import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const Blog = () => {
  return (
    <div className='my-6'>
        <h6 className='text-center text-[22px] font-semibold text-[#1769fe] leading-[46px]'>News</h6>
        <h2 className='text-center text-[48px] font-medium leading-[57px]'>Our Latest News</h2>

        <div className='mt-6 w-[95%] mx-auto'>
            <div className='grid grid-cols-3 gap-4 '>

                <div className='p-[30px] shadow-[0px_-0.5px_2px_1px_gray] rounded-[5px]'>
                    <div className='mb-4'>
                        <Image src={assets.blog1} alt='blog-img' className='w-[90%] ' />
                    </div>

                    <div className='flex items-center gap-8'>
                        <ul className='flex item-center gap-2'>
                            <Image src={assets.user} alt='user' className='w-5 h-5'/>
                            <span className='font-normal'>By Rezilla</span>
                        </ul>

                        <ul className='flex items-center gap-2'>
                            <Image src={assets.calendar} alt='calendar' className='w-4 h-4 rounded-md'/>
                            <span className='font-normal'>August 18,2022</span>
                        </ul>

                    </div>
                    <div className='mt-4'>

                        <h4 className='text-[22px] font-semibold leading-[30px]text-wrap pr-[10%] hover:text-[#1769fe]'>Consulting Report in Business Group of people</h4>
                    </div>
                </div>

                <div className='p-[30px] shadow-[0px_-0.5px_2px_1px_gray] rounded-[5px]'>
                    <div className='mb-4'>
                        <Image src={assets.blog2} alt='blog-img' className='w-[90%]' />
                    </div>

                    <div className='flex items-center gap-8'>
                        <ul className='flex item-center gap-2'>
                            <Image src={assets.user} alt='user' className='w-5 h-5'/>
                            <span className='font-normal'>By Rezilla</span>
                        </ul>

                        <ul className='flex items-center gap-2'>
                            <Image src={assets.calendar} alt='calendar' className='w-4 h-4 rounded-md'/>
                            <span className='font-normal'>August 25,2022</span>
                        </ul>

                    </div>
                    <div className='mt-4'>

                        <h4 className=' text-[22px] font-semibold leading-[30px]text-wrap pr-[10%] hover:text-[#1769fe]'>How to build the Best IT Solutions Company…</h4>
                    </div>
                </div>

                <div className='p-[30px] shadow-[0px_-0.5px_2px_1px_gray] rounded-[5px]'>
                    <div className='mb-4'>
                        <Image src={assets.blog3} alt='blog-img' className='w-[90%]' />
                    </div>

                    <div className='flex items-center gap-8'>
                        <ul className='flex item-center gap-2'>
                            <Image src={assets.user} alt='user' className='w-5 h-5'/>
                            <span className='font-normal'>By Rezilla</span>
                        </ul>

                        <ul className='flex items-center gap-2'>
                            <Image src={assets.calendar} alt='calendar' className='w-4 h-4 rounded-md'/>
                            <span className='font-normal'>August 18,2022</span>
                        </ul>

                    </div>
                    <div className='mt-4'>

                        <h4 className='text-[22px] font-semibold leading-[30px]text-wrap pr-[10%] hover:text-[#1769fe]'>People Taking Part in Colleagues Having fun a…</h4>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Blog;
