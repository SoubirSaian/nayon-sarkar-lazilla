import React from 'react';

const GetStarted = () => {
  return (
    <div className='container mx-auto mt-24 text-center'>
        <div className='bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-12'>
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

export default GetStarted;
