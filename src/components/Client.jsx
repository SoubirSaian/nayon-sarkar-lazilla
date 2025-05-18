import { assets } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

const Client = () => {
  return (
    <div className='my-8'>

        <div className='flex items-center justify-center gap-8'>
            <Image src={assets.client_1} alt='client-img' />
            <Image src={assets.client_2} alt='client-img' />
            <Image src={assets.client_3} alt='client-img' />
            <Image src={assets.client_4} alt='client-img' />
            <Image src={assets.client_5} alt='client-img' />
            <Image src={assets.client_6} alt='client-img' />
        </div>
      
    </div>
  )
}

export default Client;
