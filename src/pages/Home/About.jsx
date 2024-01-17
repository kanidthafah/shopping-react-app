import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import aboutIMG from "/about.jpg"

const About = () => {

  const socialIcons = [
    {id:1, icon: <BsInstagram />},
    {id:2, icon: <FaFacebook />},
    {id:3, icon: <FaLine />}
  ]
 
  return (
    <div  className="w-full h-auto bg-neutral-100 px-6 py-10">

      <h1 className='text-center text-Neutral1 font-semibold text-3xl uppercase mb-5'>About Us</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-full mx-auto md:w-9/12'>
        <div className='px-2 py-2'>
          <img src={aboutIMG} alt="hawaii shirts" className='w-full h-full object-cover rounded-md'/>
        </div>

        <div className='flex flex-col gap-2 px-2 py-2 justify-evenly'>

          <div className='flex flex-col gap-1 uppercase text-center md:text-start'>
            <h2 className='font-semibold text-2xl text-Neutral1'>Hawaii Shark</h2>
            <h3 className='font-medium text-lg text-neutral-500'>Second Hand Hawaii Shirts</h3>
          </div>
          
          <div className='flex flex-col gap-1 text-Neutral2 text-center md:text-start'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum maiores atque dolore architecto odit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem numquam iure. Architecto praesentium laudantium, odit officia quasi eveniet quisquam necessitatibus numquam laboriosam, nisi quam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequatur distinctio modi facere sit numquam repellat eius, explicabo eligendi error.</p>
          </div>

          <div className='flex flex-row justify-center items-center gap-10 md:justify-start'>

              {
                socialIcons.map(({id, icon}) => (
                  <div key={id} className='bg-neutral-50 w-14 h-14 flex justify-center items-center rounded-full drop-shadow-md'>
                    <a href='#' className='text-xl text-Neutral1'>{icon}</a>
                  </div>
                ))
              }

         </div>

        </div>

        
            
      </div>

    </div>
  )
}

export default About