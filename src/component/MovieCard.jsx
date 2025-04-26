import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { options } from '../api';
import { FaStar } from "react-icons/fa";

const MovieCard = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    const debounce = setTimeout(() => {
      getData();
    }, 800);

    return () => clearTimeout(debounce);
  }, [id]);

  if (isLoading) return (
    <div className="text-white text-2xl flex justify-center items-center h-screen">
      Loading...
    </div>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        className="w-full h-full object-cover absolute top-0 left-0" 
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} 
        alt={movie.original_title || 'Movie Poster'} 
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-end md:items-center justify-start p-6 md:p-16">
        <div className="space-y-5 max-w-2xl md:max-w-3xl">
          <h1 className="font-title font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-white">
            {movie.original_title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-gray-300 text-sm font-semibold">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-400" /> {movie.vote_average?.toFixed(1) || 'N/A'}
            </span>
            <span>• {movie.vote_count} votes</span>
            <span>• {new Date(movie.release_date).getFullYear()}</span>
            <span>• {movie.original_language?.toUpperCase()}</span>
          </div>

          <p className="text-gray-300 tracking-tight text-sm md:text-base">
            {movie.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold hover:scale-105 hover:opacity-90 transition duration-300">
              Watch Now
            </button>
            <button className="bg-white/20 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold text-white hover:bg-white/30 transition duration-300">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Blur bottom effect */}
      <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-black z-20"></div>
    </div>
  );
};

export default MovieCard;
