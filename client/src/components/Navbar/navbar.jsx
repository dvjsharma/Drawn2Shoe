import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Divide, Divide as Hamburger} from 'hamburger-react'

const Navbar = () => {
  const [toggled, setToggled] = useState(false)
  return (
    <nav className="flex items-center p-2 text-sm">
      <div className="flex gap-4 w-[30%] justify-center items-center max-lg:hidden">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : null)}
        >
          
          Home
        </NavLink>
        <NavLink
          to="categories"
          className={({ isActive }) => (isActive ? "nav-active" : null)}
        >
          
          Categories
        </NavLink>
        <NavLink
          to="customize"
          className={({ isActive }) => (isActive ? "nav-active" : null)}
        >
          Customize
        </NavLink>
        <NavLink
          to="shop"
          className={({ isActive }) => (isActive ? "nav-active" : null)}
        >
          Shop
        </NavLink>
      </div>
      <div className="flex w-[50%] text-left justify-center items-center">
        <div className='lg:hidden'>
          <Divide size={20} toggled={toggled} toggle={setToggled} />
        </div>
        <Link to="/" className="font-bold text-[25px]">
          Drawn2Shoe
        </Link>
      </div>
      <div className="flex w-[30%] justify-center gap-4 max-lg:w-full max-lg:justify-end">
        <Link to="login"> <button
        className="inline-block rounded-full border-2 border-neutral-800 px-4 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-black hover:text-white focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 max-lg:hidden" 
      > 
        Login
      </button> </Link>
        <Link to="signup"> <button
        className="inline-block bg-black  rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-white hover:text-black focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 "
      > 
        SignUp
      </button> </Link>
      </div>
    </nav>
  );
}

export default Navbar
