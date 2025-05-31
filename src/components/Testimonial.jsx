import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const Textimonial = () => {
  return (
    <div className='container mx-auto my-[50px]'>

        <h6 className='text-center text-[22px] font-semibold text-[#1769fe] leading-[46px]'>Testimonials</h6>
        <h2 className='text-center text-[48px] font-medium leading-[57px] mb-6'>Our Client Says</h2>

        <div className='grid grid-cols-1 gap-y-3 md:grid-cols-2'>

          {/* testimonial 1 */}
          <div className='flex items-center justify-center p-[30px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]'>
            <div className='mr-4 rounded-[5px]'>
              <Image src={assets.team2} alt='testimonial-img' className='w-[650px] ' />
            </div>
            <div>
                <div className='flex items-center justify-between mb-[20px]'>
                    <Image src={assets.quote} alt='quote' className='w-[50px]' />
                    <div className='flex items-center'>
                      

                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        
                    </div>

                </div>
                <p className='text-[15px] leading-7 opacity-' >I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                <h3 className='text-[20px] font-medium leading-[34px] mt-[10px]'>Arnold Berner</h3>
                <h6 className='text-[16px] font-normal leading-[18px]' >Design Lead</h6>
            </div>

          </div>

          {/* testimonial 2 */}
          <div className='flex items-center justify-center p-[30px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]'>
            <div className='mr-4 rounded-[5px]'>
              <Image src={assets.team5} alt='testimonial-img' className='w-[650px] ' />
            </div>
            <div>
                <div className='flex items-center justify-between mb-[20px]'>
                    <Image src={assets.quote} alt='quote' className='w-[50px]' />
                    <div className='flex items-center'>
                      

                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        <Image  src={assets.starIcon} alt='star-icon' className='m-1' />
                        
                    </div>

                </div>
                <p className='text-[15px] leading-7 opacity-' >I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                <h3 className='text-[20px] font-medium leading-[34px] mt-[10px]'>Rodney J Sabor</h3>
                <h6 className='text-[16px] font-normal leading-[18px]' >Founder</h6>
            </div>

          </div>

        </div>
      
    </div>
  )
}

export default Textimonial;
