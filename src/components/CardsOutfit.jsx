import React from 'react'
import { MdDownloadForOffline } from "react-icons/md";

const CardsOutfit = ({outfitItems}) => {
  return (
    <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      {
        outfitItems.map((item) => (
          <div key={item.id} className='bg-white rounded-md shadow-md'>

              <div className='overflow-hidden rounded-t-md'>
                  <img src={item.img} alt="Hawaii Shirt image" className='w-fit h-fit object-contain hover:scale-105 transition-transform ease-in-out duration-300'/>
              </div>

              <div className="flex flex-row justify-between items-center text-Neutral1 m-2">
                <p className='text-base'>Download Image</p>
                <a href={item.img} 
                   download 
                   className='text-4xl hover:text-Neutral2'
                >
                  <MdDownloadForOffline/>
                </a>
              </div>

          </div>
        ))
      }
    </div>
  )
}

export default CardsOutfit