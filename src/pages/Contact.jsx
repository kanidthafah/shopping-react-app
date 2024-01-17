import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";

const Contact = () => {

  const socialIcons = [
    {id:1, icon: <BsInstagram />, link: "#"},
    {id:2, icon: <FaFacebook />, link: "#"},
    {id:3, icon: <FaLine />, link: "#"}
  ]

  return (
    <div className='w-full min-h-screen bg-neutral-100 md:px-24 md:py-10 px-10 py-4'>
      <div className='flex flex-col justify-center items-center px-4 pb-5 text-Neutral1'>
        <h1 className=' text-3xl font-medium uppercase mb-5 md:text-5xl'>Contact us</h1>

        <form action="mailto:kanidtha.fah@gmail.com" method="get" className='px-2 py-2 flex flex-col text-sm lg:text-base mb-5 border-b-2' >

            <div className='flex flex-row flex-wrap md:flex-none justify-start items-center gap-1 mb-3'>
              <label htmlFor='fname'>First Name</label>
              <input type="text" name='fname' id='fname' placeholder='First Name' className='w-full md:w-auto bg-neutral-50 px-2 py-1 rounded-sm drop-shadow focus:outline-none' required/>
              <label htmlFor="lname">Last Name</label>
              <input type="text" name='lname' id='lname' placeholder="Last name" className='w-full md:w-auto bg-neutral-50 px-2 py-1 rounded-sm drop-shadow focus:outline-none' required/>
            </div>

            <div className='flex flex-row flex-wrap justify-start items-center gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input type="email" name='email' id='email' placeholder='Email' className='w-full px-2 py-1 bg-neutral-50 rounded-sm drop-shadow focus:outline-none' required/>
            </div>
            
            <div className='flex flex-row flex-wrap justify-start items-center gap-1 mb-3'>
              <label htmlFor="phone">Phone</label>
              <input type="text" name='phone' id='phone' placeholder='Phone Number' className='w-full px-2 py-1 bg-neutral-50 rounded-sm drop-shadow focus:outline-none' required/>
            </div>

            <div className='flex flex-col flex-wrap justify-start  gap-1 mb-3'>
              <label htmlFor="message">Message</label>
              <textarea id='message' placeholder='Your Message'rows="10"  className='w-full px-2 py-2 bg-neutral-50 rounded-sm drop-shadow resize-none focus:outline-none' required/>
            </div>

            <button type='submit' value="send" className='my-2 px-8 py-1 justify-self-center self-center rounded-2xl bg-Neutral1 text-white text-base uppercase hover:bg-Neutral2 active:translate-y-0.5'>Send</button>
              
        </form>

        <div className='flex flex-col md:flex-row justify-center items-center gap-4 rounded px-10 py-4 md:px-20 bg-neutral-200'>
            <h1 className='self-center'>Social Platform</h1>
              {
                socialIcons.map(({id, icon, link}) => (
                  <div key={id} className='bg-neutral-50 w-14 h-14 flex justify-center items-center rounded-full drop-shadow'>
                    <a href={link} className='text-xl text-Neutral1'>{icon}</a>
                  </div>
                ))
              }
         </div>

      </div>
      
    </div>
  )
}

export default Contact