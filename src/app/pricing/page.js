import ComparePlan from '@/components/PricingPage/ComparePlan';
import FAQ from '@/components/PricingPage/FAQ';
import GetStarted from '@/components/PricingPage/GetStarted';
import PricingCard from '@/components/PricingPage/PricingCard';
import React from 'react';

const PricingPage = () => {
  return (
    <div className='mt-[100px]'>
        <h1 className='text-center text-4xl font-bold tracking-tight mb-4'>Simple Transparent Pricing</h1>
        <h5 className='text-center text-xl text-muted'>Choose the perfect plan for your needs. Always know what you'll pay.</h5>
       <PricingCard/>
       <ComparePlan/>
       <FAQ/>
       <GetStarted/>
    </div>
  )
}

export default PricingPage;
