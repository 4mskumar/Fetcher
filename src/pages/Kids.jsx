import React, { useEffect, useState } from 'react'
import { MdMoodBad } from "react-icons/md";
import Nav from '../component/Nav/Nav'

const Kids = () => {
    const [showNav, setShowNav] = useState(false);
    
      useEffect(() => {
        const handleScroll = (e) => {
          setShowNav(window.scrollY > 100);
          console.log('scrolle');
          
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div className='w-full min-h-screen'>
        <div>
            <Nav />
        </div>
        <div className="h-full">
            {showNav && <StickyNav />}
        </div>
            <h1 className='text-white text-4xl font-bold pl-20 pt-10 w-full'>Kids</h1>
        <div className='flex justify-center items-center w-full relative'>
            <div className='pl-20 py-5 pr-10 flex flex-col items-center justify-center '>
                <p className='text-white text-lg font-inter font-semibold tracking-tighter text-center mx-auto w-full'>This feature is under process</p>
                <MdMoodBad className='text-[22rem] text-zinc-800' />
            </div>
        </div>
    </div>
  )
}

export default Kids