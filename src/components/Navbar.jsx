import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '/logo-brand.png'
import { IoCart, IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

function Navbar(){

    const [openMenu, setOpenMenu] = useState(false)
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
  
    return (
        <div className="max-w-full container sticky top-0 z-10">
            <nav className="h-12 flex justify-between items-center shadow bg-white px-4 md:px-10">

                {/* LOGO BRAND */}
                <div className="flex">
                    <Link to="/">
                        <img src={logo} alt="LOGO" className="w-20 h-12 object-cover" />
                    </Link>
                </div>

                {/* MENU BAR */}
                <ul className="sm:flex justify-center items-center gap-x-7 text-sm text-Neutral1 font-normal uppercase hidden">
                    <li className="hover:border-b-4 border-Sky py-3 hover:text-Sky hover:font-medium cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:border-b-4 border-Sky py-3 hover:text-Sky hover:font-medium cursor-pointer">
                        <Link to= "/outfit-ideas">Outfit Ideas</Link>
                    </li>
                    <li className="hover:border-b-4 border-Sky py-3 hover:text-Sky hover:font-medium cursor-pointer">
                        <Link to= "/shop">Shop</Link>
                    </li>
                    <li className="hover:border-b-4 border-Sky py-3 hover:text-Sky hover:font-medium cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>  
                </ul>

                {/* MENU ICONS */}
                <div className="flex justify-center items-center gap-x-2 text-2xl text-Neutral1">

                    <div className="px-2 py-2">
                        <Link to="/cart"className="hover:text-Sky">
                            <IoCart  />
                        </Link>
                    </div>
                    
                    {/* Navbar for sm device */}
                     <div className="sm:hidden flex justify-center items-center">
                        <button onClick={toggleMenu} className="text-xl">
                            {
                                openMenu ? <IoClose className="text-Neutral1 hover:text-Neutral2" /> : <FaBars className="text-Neutral1 hover:text-Sky"/>
                            }               
                        </button>
                     </div> 
                     
                </div>

                
            </nav>
            
            {/* Menu small device */}
            <div className={`h-auto py-3 px-8 bg-gray-50 shadow-sm z-10 ${openMenu ? "" : "hidden"}`}>
                <ul className={`flex-block flex-col text-Neutral1 text-sm` } > 
                    <li className="mb-2">
                        <Link to="/" className="active:border-b-2 border-Sky active:text-Sky active:font-medium">Home</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/outfit-ideas" className="active:border-b-2 border-Sky active:text-Sky active:font-medium">Outfit Ideas</Link>
                    </li>
                    <li className="mb-2" >
                        <Link to= "/shop" className="active:border-b-2 border-Sky active:text-Sky active:font-medium">Shop</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/contact" className="active:border-b-2 border-Sky active:text-Sky active:font-medium">Contact</Link>
                    </li> 
                </ul>
            </div>

        </div>
        
    )
}

export default Navbar