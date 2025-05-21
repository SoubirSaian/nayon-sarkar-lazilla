import React from 'react';

const NewsLetter = () => {
  return (
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
  )
}

export default NewsLetter;
