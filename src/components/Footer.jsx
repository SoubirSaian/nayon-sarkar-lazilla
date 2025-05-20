import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div style={{backgroundImage: 'url(/src/assets/footer-bg.png)'}} className='bg-[#0a0620] mt-8'>
        <div  className='w-[80%] mx-auto pt-[80px]'>

            <div className='grid grid-cols-4 gap-x-12'>

                <div>
                    <div className='mb-10'>
                        <Image src={assets.logoFooter} alt='logo-footer'/>
                    </div>

                    <p className='text-white mb-6'>There are many variatons of passages of available but the majorit have a form by injected humor or randomseds say. It high at my mind by roof.</p>

                    <ul className='flex items-center justify-start gap-3'>
                        <li className='border border-gray-300 rounded-full cursor-pointer'> <Image src={assets.facebook} alt='facebook' className='m-2' /> </li>
                        <li className='border border-gray-300 rounded-full cursor-pointer'> <Image src={assets.instagram} alt='instagram' className='m-2' /> </li>
                        <li className='border border-gray-300 rounded-full cursor-pointer'> <Image src={assets.twitter} alt='twitter' className='m-2' /> </li>
                        <li className='border border-gray-300 rounded-full cursor-pointer'> <Image src={assets.linkedIn} alt='linkedin' className='m-2' /> </li>
                    </ul>
                </div>

                <div className='mr-6'>
                    <h4 className='text-[28px] text-white mb-[40px]'>Quick Links</h4>

                    <ul className='list-disc'>
                        <li className='text-white text-[16px] my-2 hover:text-[#1769fe]'> Explore Products</li>
                        <li className='text-white text-[16px] my-2 hover:text-[#1769fe]'>  Bundle & Save</li>
                        <li className='text-white text-[16px] my-2 hover:text-[#1769fe]'> Continue Previous Quote</li>
                        <li className='text-white text-[16px] my-2 hover:text-[#1769fe]'> Report a claim</li>
                        <li className='text-white text-[16px] my-2 hover:text-[#1769fe]'> Make a pay,ent</li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-[28px] text-white mb-[40px]'>Recent Post</h4>

                    <ul className='flex flex-col gap-3'>
                        <li className='flex justify-center'>
                            <Image src={assets.blog7} alt='blog-img' className='w-[90px] h-[90px] rounded-[5px] mr-[20px]' />
                            <div>
                                <h6 className='text-lg text-white leading-[28px] hover:text-[#1769fe]'>Business people working together for..</h6>
                                <span className='italic text-sm text-white mt-3'>August 30,2022</span>
                            </div>
                        </li>
                        <li className='flex justify-center'>
                            <Image src={assets.blog8} alt='blog-img' className='w-[90px] h-[90px] rounded-[5px] mr-[20px]' />
                            <div>
                                <h6 className='text-lg text-white leading-[28px] hover:text-[#1769fe]'>Technology connections as online park..</h6>
                                <span className='italic text-sm text-white mt-3'>August 30,2022</span>
                            </div>
                        </li>
                       
                    </ul>
                </div>

                <div>
                    <h4 className='text-[28px] text-white mb-[40px]'>Contact Us</h4>

                    <ul className='flex flex-col items-start'>
                        <li className='flex justify-center mb-6'>
                            <Image src={assets.gps} alt='gps' className='w-6 h-6 mr-2' />
                            <p className='text-white'>1791 Yorkshire Circle Kitty Hawk, NC 27949</p>
                        </li>

                        <li className='flex justify-center mb-6'>
                            <Image src={assets.clock} alt='clock'  className='w-6 h-6 mr-2' />
                            <span className='text-white'>Mon-Sat 9:00 - 7:00</span>
                        </li>
                        <li className='flex justify-center mb-6'>
                            <Image src={assets.telephone} alt='telephone'  className='w-6 h-6 mr-2'/>
                            <span className='text-white'>+012-345-6789</span>
                        </li>

                        <li className='flex justify-center mb-6'>
                            <Image src={assets.email} alt='email'  className='w-6 h-6 mr-2'/>
                            <span className='text-white'>info@example.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className='mt-24 text-gray-800 h-[0.1px]' />

            <div className='mt-4 pb-6 flex items-center justify-between'>
                <div>
                    <p className='text-white text-lg'>© Copyright 2023 rezilla All Rights Reserved</p>
                </div>
                <div className='flex justify-center gap-4'>
                    <p className='text-white text-lg hover:text-[#1769fe]'>Privacy Policy</p>
                    <p className='text-white text-lg hover:text-[#1769fe]'>Terms & Condition</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer;
