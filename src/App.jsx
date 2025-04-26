import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import MovieCard from './component/MovieCard'
import Tv from './component/Tv'
import ShowCard from './component/ShowCard'
import Browse from './pages/Browse'
import Kids from './pages/Kids'
import Faq from './component/Faq'
import Support from './pages/Support'

const App = () => {
  return (
    <div className='bg-zinc-950  w-full min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/movies' element={<Home />} />
          <Route path='/movie/:id' element={<MovieCard />} />
          <Route path='/tvShows/:id' element={<ShowCard />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/support' element={<Support />} />
        </Routes>
    </div>
  )
}

export default App