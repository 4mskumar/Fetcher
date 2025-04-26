import gsap from "gsap";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import carousel from "../../data/carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    loop: true,
  };

  return (
    <div className="relative w-full h-[100vh] bg-black overflow-hidden">
      <Slider {...settings}>
        {carousel.map((val, ind) => (
          <div
            key={val.id}
            className="relative w-full h-[100vh] flex items-center px-5 sm:px-10 lg:px-20"
          >
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover"
                src={val.image}
                alt={val.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            <div className="relative mt-20 sm:mt-40 z-0 w-full sm:w-2/3 lg:w-1/2 px-4 sm:px-8">
              <h1
                style={{ letterSpacing: "2px" }}
                className="text-4xl sm:text-6xl lg:text-8xl text-white font-title font-semibold"
              >
                {val.title}
              </h1>
              <div className="flex mt-3 font-inter items-center text-sm sm:text-base font-semibold text-white gap-6 sm:gap-10">
                <p>{val.year}</p>
                <p>{val.duration || "1 Season"}</p>
                <p className="border-2 border-white px-3 py-1 rounded-full">
                  {val.type.toUpperCase()}
                </p>
              </div>
              <p className="text-zinc-400 mt-4 sm:mt-10 w-full sm:w-3/4 lg:w-2/3 font-inter text-sm sm:text-base">
                {val.description}
              </p>
              <div className="flex mt-5 gap-4">
                <button className="flex relative overflow-hidden hover:bg-blue-700 duration-300 transition-colors items-center text-white text-sm sm:text-lg font-inter bg-blue-600 px-4 sm:px-5 py-2 rounded-full gap-2">
                  <span className="text-base">
                    <FaPlay />
                  </span>
                  Play
                </button>
                <button className="flex items-center bg-white/10 text-white text-sm sm:text-lg px-3 py-2 font-inter rounded-full gap-2">
                  <span className="text-base">
                    <LuInfo />
                  </span>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
