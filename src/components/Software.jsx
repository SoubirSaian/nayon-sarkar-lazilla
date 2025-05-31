import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const Software = () => {
  return (
    <div className='bg-[linear-gradient(259deg,rgba(0,0,54,1)_0%,rgba(0,0,95,1)_37%,rgba(0,0,54,1)_62%,rgba(0,0,95,1)_91%)] bg-no-repeat bg-cover bg-center my-[50px]'>

        <div className='container mx-auto pb-[50px]'>

            <div className='flex items-center justify-between text-white'>

                <div className='w-1/2'>
                    <h6 className='text-[22px] font-medium leading-[40px] mb-3'>Get The Software</h6>
                    <h2 className='text-[40px] font-medium leading-[50px]'>Try Our Software</h2>
                    <p className='my-[20px] leading-[28px]'>To be effective, it is important to clearly communicate the value and benefits of the software, and to make the trial process as simple and seamless as possible. Additionally, providing excellent customer support and a positive user experience can help increase the.</p>

                    <div>
                        <button type="submit" className="bg-white text-[#18153b]  text-[14px] font-medium hover:bg-[#18153b] hover:text-white active:scale-95 transition-all duration-400 px-[30px] py-[16px] m-1 rounded-[43px]">
                                    Google Store
                        </button>
                        <button type="submit" className="bg-[#18153b] text-white  text-[14px] font-medium hover:bg-white hover:text-[#15183b] active:scale-95 transition-all duration-400 px-[30px] py-[16px] m-1 rounded-full">
                                    Apple Store
                        </button>

                    </div>
                </div>
                
                <div>
                    <Image src={assets.heroImage} alt='hero-img'  />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Software;
