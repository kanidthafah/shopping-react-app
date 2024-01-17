import React from 'react'
import { TbTruck, TbIroningSteam, TbWashMachine } from "react-icons/tb";

const valuePropositions= [
  {id: 1, title: "Free Shipping", description: "Lorem ipsum dolor sit amet.", icon: <TbTruck className='stroke-Neutral1'/>},
  {id: 2, title: "Washed Clothing", description: "Lorem ipsum dolor sit amet.", icon: <TbWashMachine className='stroke-Neutral1' />},
  {id: 3, title: "Ironed Clothing", description: "Lorem ipsum dolor sit amet.", icon: <TbIroningSteam className='stroke-Neutral1'/>}
]

const Vp = () => {
  return (
    <div  className="w-full h-HeightST3 bg-neutral-100 px-6 py-2 border-b border-t border-neutral-200 md:px-28">

    <div className='grid grid-cols-3 gap-2 h-full mx-auto md:w-8/12'>
          {
            valuePropositions.map(({id, title, description, icon}) => (
              <div key={id} className='flex flex-col items-center justify-evenly gap-1'>

                <div className="flex justify-center items-center w-14 h-14 bg-neutral-300 rounded-full text-2xl">
                 {icon}
                </div>

                <div className='flex flex-col items-center text-center'>
                  <h1 className='text-Neutral1 text-xs md:text-sm uppercase font-medium flex-nowrap'>{title}</h1>
                  <p className='text-Neutral2 text-xs md:text-sm text-center'>{description}</p>
               </div>

              </div>

            ))
          }
    </div>

    </div>
  )
}

export default Vp