import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function Navbar() {
  return (
    <header className='bg-black'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-green-700'
            className='inflex-flex items-center py-8 px-3 mr-4 text-green-500 hover:text-green-200 text-2xl font-bold cursive tracking-widest'
          >
            Home
          </NavLink>
          {/* <NavLink
            to='/post'
            activeClassName='text-blue-300'
            className='inflex-flex items-center py-8 px-3 mr-4 text-blue-100 hover:text-yellow-300 text-2xl font-bold cursive tracking-widest'
          >
            Blog Posts
          </NavLink> */}
          <NavLink
            to='/project'
            activeClassName='text-green-700'
            className='inflex-flex items-center py-8 px-3 mr-4 text-green-500 hover:text-green-200 text-2xl font-bold cursive tracking-widest'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='text-green-700'
            className='inflex-flex items-center py-8 px-3 mr-4 text-green-500 hover:text-green-200 text-2xl font-bold cursive tracking-widest'
          >
            About Me
          </NavLink>
        </nav>

        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.linkedin.com/in/ranyou83/'
            className='mr-4'
            target='_blank'
            fgcolor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
