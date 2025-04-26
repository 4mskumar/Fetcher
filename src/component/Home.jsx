import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import Movie from "./Movie";
import SearchBar from "./SearchBar";
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";
import Trending from "./Trending/Trending";
import Gradient from "./Gradient";
import Show from "./Show";
import StickyNav from "./Nav/StickyNav";

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && window.innerWidth >= 768) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // also listen for screen resize!

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar absolute top */}
      <div className="absolute top-0 left-0 z-10 w-full">
        <Nav />
      </div>

      {/* Carousel Section */}
      <div>
        <div className="relative min-h-[80vh] z-0 w-full overflow-hidden">
          <Carousel />
          <div className="z-30 absolute top-[80vh] left-0 w-full h-full">
            <Gradient height="25vh" />
          </div>

          {/* Trending OVERLAPPED at Bottom of Carousel */}
          <div className="absolute bottom-[1rem] left-0 w-full z-30">
            <Trending />
          </div>
        </div>

        <div className="w-full min-h-full">
          <Movie />
          <Show />
        </div>
      </div>

      {/* StickyNav */}
      <div className="h-full absolute top-0 left-0">
        {showNav && <StickyNav />}
      </div>
    </div>
  );
};

export default Home;
