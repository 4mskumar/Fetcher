import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { options } from '../api';
import { FaStar } from "react-icons/fa";

const ShowCard = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}`, options);
        const data = await res.json();
        setShow(data);

        const epRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/1`, options);
        const epData = await epRes.json();
        setEpisodes(epData.episodes || []);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching show:", error);
      }
    };

    const debounce = setTimeout(() => {
      fetchShowData();
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
      <div className="relative">
        <img 
          className="w-full h-[50vh] md:h-[70vh] object-cover" 
          src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} 
          alt={show.original_name || 'Show Poster'} 
        />
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>

        {/* Show Info */}
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-6 md:px-12 pb-8 md:pb-0 z-20 text-white">
          <div className="space-y-4 max-w-2xl">
            <h1 className="font-title font-bold text-3xl md:text-6xl">{show.original_name}</h1>
            <div className="flex flex-wrap items-center gap-3 text-gray-300 text-xs md:text-sm font-semibold">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {show.vote_average?.toFixed(1)}
              </span>
              <span>• {show.vote_count} votes</span>
              <span>• {show.first_air_date?.slice(0, 4)}</span>
              <span>• {show.original_language?.toUpperCase()}</span>
            </div>
            <p className="text-gray-300 text-sm md:text-base line-clamp-4 md:line-clamp-none">
              {show.overview}
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-gradient-to-r from-green-500 to-teal-500 px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold hover:scale-105 hover:opacity-90 transition duration-300">
                Start Watching
              </button>
              <button className="bg-white/20 px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold text-white hover:bg-white/30 transition duration-300">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="relative bg-black px-6 md:px-12 py-12 mt-[-20px] rounded-t-3xl z-30">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Season 1 Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.length > 0 ? episodes.map((episode) => (
            <div 
              key={episode.id} 
              className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 md:p-6 rounded-xl flex gap-4 items-start"
            >
              <img 
                src={episode.still_path ? `https://image.tmdb.org/t/p/w300${episode.still_path}` : '/no-image.png'}
                alt={episode.name}
                className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-base md:text-lg text-white font-semibold">{episode.episode_number}. {episode.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  {episode.overview ? `${episode.overview.slice(0, 100)}...` : 'No description available.'}
                </p>
              </div>
            </div>
          )) : (
            <p className="text-gray-400">No episodes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
