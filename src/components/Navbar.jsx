import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo01.png';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const[menu, setMenu] = useState(false);

  const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='logo'  />
      <ul className='navbar-menu'>
      <Link to={"/"}  target="_top" ><li className="hover:scale-110 duration-150 hover:border-b border-blue-500">Home</li></Link>
      <Link to={"/about-us"}  target="_top" > <li className="hover:scale-110 duration-150 hover:border-b border-blue-500">About Us</li></Link>
      <Link to={"/products"}  target="_top" ><li className="hover:scale-110 duration-150 hover:border-b border-blue-500">Products</li></Link>
      <Link to={"/enquiries"}  target="_top" > <li className="hover:scale-110 duration-150 hover:border-b border-blue-500">Enquiries</li></Link>
      <Link to={"/blogs"}  target="_top" > <li className="hover:scale-110 duration-150 hover:border-b border-blue-500">Blogs</li></Link>
      <Link to={"/contact-us"}  target="_top" > <li className="hover:scale-110 duration-150 hover:border-b border-blue-500">Contact Us</li></Link>
      <Link to={"/mobile-app"}  target="_top" > <li className="hover:scale-110 duration-150 hover:border-b border-blue-500">MobileApp</li></Link>
      </ul>
      <div className='navbar-right' >
      <IoMdSearch size={24} className='' />
      <div className="navbar-search-icon">
        <FaShoppingCart size={24}/>
        <div className="dot"></div>

      </div>
      <button><FaUserAlt /></button>



      </div>

      <div onClick={handleNav} className="block md:hidden">
            {nav ? <IoMdCloseCircleOutline size={26}/> : <CgMenuRight size={26}/> }
            
        </div>

        <div className={nav ? "fixed left-0 top-0 w-[80%] border-r border-r-gray-300 h-full bg-[#ffffff] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <div className='flex gap-1 '>
            <div className='ml-5'><FaUserAlt className='w-[70px] h-[70px] mt-7 mx-4 bg-[#53dded] p-4 rounded-full'/></div>
        <h1 className="w-full text-2xl font-bold text-[#010101] mt-7">User name</h1>
    
        </div>
            <ul className='pt-10 '>
            <Link to={"/"}  target="_top" ><li className='p-2 border-b border-gray-300 text-lg font-semibold' >Home</li></Link>
            <Link to={"/about-us"}  target="_top" > <li className='p-2 border-b border-gray-300 text-lg font-semibold'>About Us</li></Link>
            <Link to={"/products"}  target="_top" ><li className='p-2 border-b border-gray-300 font-semibold text-lg'>Products</li></Link>
            <Link to={"/enquiries"}  target="_top" > <li className='p-2 border-b border-gray-300 text-lg font-semibold'>Enquiries</li></Link>
            <Link to={"/blogs"}  target="_top" > <li className='p-2 border-b border-gray-300 text-lg font-semibold'>Blogs</li></Link>
            <Link to={"/contact-us"}  target="_top" > <li className='p-2 border-b border-gray-300 text-lg font-semibold'>Contact Us</li></Link>
            <Link to={"/mobile-app"}  target="_top" > <li className='p-2 border-b border-gray-300 text-lg font-semibold'>MobileApp</li></Link>
      </ul>
        </div>
    </div>
  )
}

export default Navbar