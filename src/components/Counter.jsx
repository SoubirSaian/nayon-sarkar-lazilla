"use client"
import React, { useEffect, useState } from 'react';
import { assets } from '@/assets/asset';
import Image from 'next/image';

const Counter = () => {
    const [count,setCount] = useState(5126);
    const [data,setData] = useState(1258);
    const [dataCount,setDataCount] = useState(500);
    const [dataCount2,setDataCount2] = useState(0);


    useEffect(() => {

        const timer = setInterval( () => {

            setCount((prev) => {
                if(prev < 8246){
                    return  prev + 1;
                }else{
                    clearInterval(timer);
                    return prev;
                }
            });

            setData((prev) => {
                if(prev < 1846){
                    return  prev + 1;
                }else{
                    clearInterval(timer);
                    return prev;
                }
            });

            setDataCount((prev) => {
                if(prev < 636){
                    return  prev + 1;
                }else{
                    clearInterval(timer);
                    return prev;
                }
            });

            setDataCount2((prev) => {
                if(prev < 145){
                    return  prev + 1;
                }else{
                    clearInterval(timer);
                    return prev;
                }
            });

        },30);

        return () => clearInterval(timer);
    },[]);

  return (
    <div className='bg-[url("/counter-bg.png")] bg-cover bg-no-repeat bg-center' >
      <div className='w-[80%] mx-auto text-white'>

         <div className='grid grid-cols-4 gap-8 py-20'>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.admin} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>{count} <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Active Clients</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.developer} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>{data} <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Project Done</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.consent} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>{dataCount} <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Gain Reviews</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[100px] h-[100px] bg-white border-[5px] border-[#2589d9] rounded-full flex items-center justify-center mb-[30px]'>
                    <Image src={assets.sustainability} alt='admin' className='w-16' />
                </div>
                <div className='text-[42px] font-[700]'>{dataCount2} <span>+</span></div>
                <h2 className='text-[23px] font-[400]'>Awards win</h2>
            </div>

         </div>
      </div>
    </div>
  )
}

export default Counter;
