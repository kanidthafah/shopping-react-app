import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Recommended = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('../../../public/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  const recommendProducts = products.filter((item) => item.status === "Recommended")
  // console.log(recommendProducts);

  return (
    <div className='w-full h-auto bg-neutral-50 px-10 py-4 md:px-28 md:py-10'>
        <div className='flex flex-col justify-center mb-4'>
            <h1 className='text-center text-Neutral1 text-xl font-medium uppercase'>Recommended</h1>
            <p className='text-Neutral2 text-center text-sm mt-2 mb-2 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure placeat voluptatem veniam, suscipit fugiat accusantium ducimus sequi molestias vitae a, necessitatibus mollitia nisi nulla incidunt quas qui autem repellat.</p>
        </div>

        <Swiper
          autoplay={{
            delay: 2500,
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >       
          {
            recommendProducts.map((product) => (
              <SwiperSlide key={product.id} className='px-1 py-1'>
                <div className="bg-white rounded-md drop-shadow px-2 py-3">
                  <Link to={`/shop/${product.id}`}>
                      
                    <div className="px-2 py-2 border-b-Borderproduct border-gray-200 overflow-hidden">
                        <img src={product.image} alt="Hawaii Shirt image" className='w-fit h-fit object-contain hover:scale-150 transition-transform ease-in-out duration-300'/>
                    </div>

                    <div className="px-2 py-2">
                        <h4 className='text-Sky text-center font-semibold capitalize'>{product.brand}</h4>
                    </div>


                    <div className='px-2 py-2 flex flex-row justify-between'>
                        <div className="w-10 h-full bg-gray-200 text-Neutral1 text-center rounded-md">
                            <p className="uppercase text-sm">{product.size}</p>
                        </div>
                        <h6 className="text-sm text-center text-Neutral2">{product.fabric}</h6>
                        
                    </div>

                    <div className='px-2 py-2 flex flex-row justify-between items-center'>
                        <p className="font-medium text-emerald-500"><span>&#3647;</span> {product.price}</p>
                        <button type='submit' className='flex justify-center items-center px-2 py-1 rounded-md text-xl text-Neutral1 active:translate-y-0.5 hover:text-Neutral2 hover:scale-105'>
                          <BsCartPlusFill />
                        </button>
                    </div>

                  </Link>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className='mt-4 flex justify-center items-center '>
          <button className='px-4 py-1 bg-Neutral2 rounded-md hover:bg-Neutral1 animate-bounce'>
            <Link to="/shop" className='text-white'>All products</Link>
          </button>
        </div>

        
    </div>
  )
}

export default Recommended