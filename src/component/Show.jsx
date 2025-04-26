import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gradient from "./Gradient";

const Show = () => {
  const { tvShows } = useGlobalContext();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [titleLarge, setTitleLarge] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // small tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-5 sm:px-10 md:px-16 lg:pl-20 pb-14 relative w-full z-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl py-5 font-inter font-bold text-white">
        Popular Shows
      </h1>

      {tvShows && tvShows.length > 0 ? (
        <Slider {...settings} className="tvShows-slider z-50">
          {tvShows.map((val, ind) => (
            <Link to={`/tvShows/${val.id}`} key={val.id}>
              <div className="px-2 sm:px-3 relative">
                <div
                  onMouseEnter={() => {
                    setHoveredIndex(ind);
                    setTitleLarge(ind);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setTitleLarge(null);
                  }}
                  className="h-[12rem] sm:h-[14rem] md:h-[15rem] cursor-pointer relative flex flex-col justify-end rounded-lg overflow-hidden transition-all duration-300"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} // CHANGED here
                    className="w-full h-full object-cover z-[-1] rounded-lg transition-opacity duration-300 ease-in-out"
                    alt={`tvShow ${ind}`}
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute top-[5vh] left-0 w-full h-full transition-opacity duration-300 z-[20] pointer-events-none ${
                      hoveredIndex === ind ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Gradient height="20vh" />
                  </div>

                  <p
                    className={`text-sm sm:text-base ${
                      titleLarge === ind ? "scale-125" : "scale-100"
                    } duration-500 transition-all ease-in-out absolute origin-bottom-left bottom-0 p-2 sm:p-4 left-0 font-inter font-bold z-30 text-white`}
                  >
                    {val.original_name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default Show;
