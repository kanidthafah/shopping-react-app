import React from 'react';
import { Link } from 'react-router-dom';
import bannerIMG from '/banner-img.png'


const Banner = () => {
  return (
    <div className="max-w-full h-HeightST bg-neutral-50 md:px-24 md:py-10 px-10 py-4">

        <div className='h-full flex flex-col justify-center items-center gap-4 md:flex-row'>

          <div className='md:basis-1/2 flex flex-col gap-4 text-Neutral1'>
              <h1 className='text-5xl font-semibold uppercase animate-bounce'>Hawaii Shark</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet perspiciatis atque commodi dignissimos quae molestias nesciunt, qui asperiores sapiente.</p>
              <button className='text-start text-white '>
                <Link to= "/shop" className='px-4 py-1.5 bg-sky-500 rounded-md hover:bg-Sky'>Shop Now</Link>
              </button>
          </div>

          <div className='md:basis-1/2 flex justify-center items-center'>
              <img src={bannerIMG} alt="Hawaii Shirts image" className='w-3/6 object-cover md:w-full ' />
          </div>

        </div>
     
    </div>
  )
}

export default Banner