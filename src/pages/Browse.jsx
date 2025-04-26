import React, { useEffect, useState } from 'react'
import Index from '../component/Browse/Index'
import Nav from '../component/Nav/Nav'
import StickyNav from '../component/Nav/StickyNav';
import Trending from "../component/Trending/Trending";
import Movie from '../component/Movie';
import Show from '../component/Show';

const Browse = () => {

  

  return (
    <div className="relative ">
      <div className="h-full">
        <StickyNav />

      </div>
      <div className='pl-20 py-5 pr-10'>
        <Index />
      </div>
      <div className='pl-20 mt-5 py-5 pr-10'>
        <Trending />        
      </div>
      <div className='pl-20 py-5 pr-10'>
        <Movie />        
      </div>
    </div>
  )
}

export default Browse