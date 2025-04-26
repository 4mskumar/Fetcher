import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gradient from "../Gradient";
import { Link } from "react-router-dom";

const Trending = () => {
  const { trending } = useGlobalContext();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [titleLarge, setTitleLarge] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full z-30 px-5 sm:px-10 md:px-16 lg:px-20">
      <h1 className="text-lg sm:text-xl md:text-2xl font-inter font-semibold text-white mb-5">
        Trending now
      </h1>

      {trending && trending.length > 0 ? (
        <Slider {...settings} className="trending-slider">
          {trending.map((val, ind) => (
            <Link to={`/movie/${val.id}`} key={val.id}>
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
                    src={`https://image.tmdb.org/t/p/w500${val.backdrop_path}`}
                    className="w-full h-full object-cover z-[-1] rounded-lg transition-opacity duration-300 ease-in-out"
                    alt={`Trending ${ind}`}
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
                    {val.title}
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

export default Trending;
