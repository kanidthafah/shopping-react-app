import React, { useEffect, useState } from 'react'
import CardsOutfit from '../components/CardsOutfit'

const OutfitIdeas = () => {
  const [outfits, setOutfits] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        let res = await fetch('../../public/outfit-ideas.json')
        let data = await res.json()
        setOutfits(data)
        // console.log(data);
      }catch(err){
        console.log("Error fetch data: ", err);
      }
    }
    fetchData()
  }, [])

  return (
    <div className='w-full min-h-screen mx-auto bg-neutral-50 md:px-24 md:py-10 px-10 py-4'>
      <div className='container'>

        <div className='flex flex-col gap-2 mb-5 text-center'>
          <h1 className='text-Neutral1 text-3xl font-medium uppercase'>Outfit Ideas</h1>
          <p className='text-sm px-2 text-Neutral2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iusto nihil illum impedit vitae itaque sit, ipsam id reiciendis. Quaerat at facilis tenetur dolor mollitia labore veritatis possimus incidunt sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis.</p>
          <p className='text-sm text-neutral-500 font-medium'>by Hawaii Shark</p>
        </div>
        
        <div className='flex justify-center items-center'>
          <CardsOutfit outfitItems={outfits}/>
        </div>

      </div>
    </div>
  )
}

export default OutfitIdeas