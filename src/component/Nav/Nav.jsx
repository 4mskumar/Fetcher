import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import { BiBell } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Browse', 'Kids', 'Support', 'FAQ'];

  return (
    <div className='px-20 py-4 bg-transparent'>
      <div className='flex justify-between items-center'>
        {/* Desktop Menu */}
        <div className='hidden md:flex gap-20'>
          {/* <img src='/images/logo.png' alt='Logo' className='w-10 h-10' /> */}
          {navItems.map((val, ind) => (
            <a
              href={`/${val.toLowerCase()}`}
              key={ind}
              onClick={() => setActiveIndex(ind)}
              className={`text-lg font-medium font-inter transition-colors duration-300 ${
                activeIndex === ind ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {val}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white'>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Right Side */}
        <div className='flex gap-5'>
          <SearchBar />
          <div className='text-white bg-white/20 text-2xl p-3 rounded-full'>
            <BiBell />
          </div>
          <div className='flex text-white items-center font-inter text-base gap-1'>
            <MdAccountCircle className='cursor-pointer text-5xl' />
            <p>username</p>
            <FaCaretDown className='cursor-pointer' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-5`}>
        <div className='flex flex-col gap-4'>
          {navItems.map((val, ind) => (
            <a
              href={`/${val.toLowerCase()}`}
              key={ind}
              onClick={() => setActiveIndex(ind)}
              className={`text-lg font-medium font-inter transition-colors duration-300 ${
                activeIndex === ind ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {val}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
