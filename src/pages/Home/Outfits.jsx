import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Outfits = () => {

    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        fetch('../../../public/outfit-ideas.json')
            .then(response => response.json())
            .then(data => setOutfits(data))
            .catch(error => console.error('Error fetching data:', error));

    },[])

    const exampleOutfitIdeas =  outfits.filter((item) => item.status === "Recommended")
    // console.log(exampleOutfitIdeas);

  return (
    <div className='w-full h-auto bg-neutral-200 px-10 py-4 md:px-28 md:py-10'>
        <div className='flex flex-col justify-center mb-4'>
            <h1 className='text-center text-Neutral1 text-xl font-medium uppercase'>Outfit Ideas</h1>
            <p className='text-Neutral2 text-center text-sm mt-2 mb-2 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio distinctio earum sunt repellat pariatur eum quia. Cum ex non excepturi cupiditate reiciendis.</p>
        </div>

        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            {
                exampleOutfitIdeas.map((outfits) => (
                    <SwiperSlide key={outfits.id}>
                        <div className='bg-white px-2 py-2 rounded-md'>
                            <img src={outfits.img} alt="outfit ideas image" />
                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>
        
        <div className='mt-4 flex justify-center items-center'>
          <button className='px-4 py-1 bg-Neutral1 rounded-md hover:bg-Neutral2 active:translate-y-1'>
            <Link to="/outfit-ideas" className='text-white'>View more</Link>
          </button>
        </div>

    </div>
  )
}

export default Outfits