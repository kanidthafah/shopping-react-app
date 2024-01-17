import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartPlusFill } from "react-icons/bs";

const Cards = ({filteredItems}) => {

    return (
        <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
            {
                filteredItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-md drop-shadow-md px-2 py-4">
                        <Link to={`/shop/${item.id}`}>

                            <div className="px-2 py-2 border-b-BorderItem border-gray-200 overflow-hidden">
                                <img src={item.image} alt="Hawaii Shirt image" className='w-fit h-fit object-contain hover:scale-150 transition-transform ease-in-out duration-300'/>
                            </div>

                            <div className="px-2 py-2">
                                <h4 className='text-Sky text-center font-semibold capitalize'>{item.brand}</h4>
                            </div>

                            <div className='px-2 py-2 flex flex-row justify-between items center'>
                                <div className="w-10 h-full bg-gray-200 text-Gray text-center rounded-md">
                                    <p className="uppercase text-sm">{item.size}</p>
                                </div>
                                <h6 className="text-sm text-center text-gray-500">{item.fabric}</h6>
                                
                            </div>

                            <div className='px-2 py-2 flex flex-row justify-between items-center'>
                                <p className="font-medium text-emerald-500"><span>&#3647;</span> {item.price}</p>
                                
                                <button type='submit' className='flex justify-center items-center px-2 py-1 rounded-md text-xl text-Neutral1 active:translate-y-0.5 hover:text-Neutral2 hover:scale-105'>
                                    <BsCartPlusFill />
                                </button>
                            </div>

                        </Link>
                    </div>
                ))
            }
        </div>
  )
}

export default Cards