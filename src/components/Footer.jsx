import React from 'react'
import logo from '/footer.png'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";

const Footer = () => {

    const socialIcons = [
        {id:1, icon: <BsInstagram />, link: "#"},
        {id:2, icon: <FaFacebook />, link: "#"},
        {id:3, icon: <FaLine />, link: "#"}
      ]

  return (
    <div className='w-full h-auto bg-neutral-500 px-4 py-2 mt-auto'>
        <div className='flex flex-col justify-between items-center text-neutral-300 md:flex-row'>
            <div className="flex">
                <Link to="/">
                    <img src={logo} alt="LOGO" className="w-20 h-12 object-contain" />
                </Link>
            </div>

            <div className='flex justify-center items-center'>
                {
                    socialIcons.map(({id, icon, link}) => (
                    <div key={id} className='w-10 h-10 flex justify-center items-center'>
                        <a href={link} className='text-lg'>{icon}</a>
                    </div>
                    ))
                }
            </div>

            <div className='flex text-sm'>
                <p>&copy; Copyright 2023 by Kanidtha</p>
            </div>

        </div>

    </div>
  )
}

export default Footer