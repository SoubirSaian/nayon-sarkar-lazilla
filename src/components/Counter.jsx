import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const Counter = () => {
  return (
    <div className='bg-[url("/counter-bg.png")] bg-cover bg-no-repeat bg-center' >
      <div className='w-[80%] mx-auto text-white'>

         <div className='grid grid-cols-4 gap-8 py-20'>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.admin} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>8230 <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Acive Clients</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.developer} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>8230 <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Project Done</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.consent} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>8230 <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Gain Reviews</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.sustainability} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>8230 <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Awards win</h2>
            </div>

         </div>
      </div>
    </div>
  )
}

export default Counter;
