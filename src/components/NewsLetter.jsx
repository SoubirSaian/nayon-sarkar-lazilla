import React from 'react';

const NewsLetter = () => {
  return (

    <div className='bg-gradient-to-r from-blue-500 to-blue-700 mt-[50px] text-center'>
        <div className=' container mx-auto p-12'>
            <h2 className='text-3xl font-bold text-white mb-4'>Ready to get started</h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>Join thousands of satisfied customers who are already using our platform.</p>

            <div className='flex justify-center items-center gap-3'>
                <button  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-blue-700 hover:bg-gray-100">Start Free Trial</button>

                <button  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-blue-700 hover:bg-gray-100">Contact Sales</button>
            </div>
        </div>
      
    </div>

    
  )
}

export default NewsLetter;


/*
<div className='bg-[url("/newsletter-ng.png")] bg-no-repeat bg-cover bg-center'>
        <div className='w-[80%] mx-auto py-[80px]'>

            <div className='flex items-center justify-between text-white'>
                <div>
                    <h2 className='text-[40px] font-semibold leading-[58px]'>Sign Up for latest Saas <br /> resources news from Restly</h2>
                </div>
                <div>
                    <form>
                        <div className='w-[100%] flex items-center bg-white rounded-full'>
                            <input type="email" className='block w-full  h-[60px] rounded-[30px] px-[30px] py-[11px] outline-none text-black' placeholder='Your email address' required />

                            <button type="submit" className="bg-[#18153b] text-white  text-[17px] font-bold hover:bg-[#1529fe] active:scale-95 transition-all duration-400 px-[25px] py-[11px] m-1 rounded-full">
                                    Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
      
    </div>
*/
