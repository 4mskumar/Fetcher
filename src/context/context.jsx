import React, { useContext, useEffect, useState } from "react";
import { MOVIE_API_URL, options, TV_API_OPTIONS, TV_API_URL } from "../api"; // assumes you export them from a separate file
import { useLocation } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tvShows, setTvShows] = useState([])
  const [movie, setMovie] = useState([]);
  const [trending, setTrending] = useState([])
  const [error, setError] = useState({
    show: false,
    msg: "",
  });
  const [query, setQuery] = useState('')
  const loc = useLocation()

    const handleQueryMovie = async (e) => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          options)
        const data = await res.json()
        setError({
          show: true,
          msg:'hello'
        })
        setIsLoading(false)
        console.log(data); 
        setMovie(data.results)
      } catch (error) {
        console.log(error);
        setError({
          show: true,
          msg:'error message'
        })
        setIsLoading(true)
        
      }
    }
    const handleQueryTv = async (e) => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
          options)
        const data = await res.json()
        setError({
          show: true,
          msg:'hello'
        })
        setIsLoading(false)
        console.log(data);
        setTvShows(data.results)
      } catch (error) {
        console.log(error);
        setError({
          show: true,
          msg:'error message'
        })
        setIsLoading(true)        
      }
    }

    const getTrendingMovies = async (url, opt) => {
      const newUrl = `${url}/movie/top_rated`
      setIsLoading(true)
      try {
        const res = await fetch(newUrl, opt);
        const data = await res.json();
        if(data.results){
          setTrending(data.results)
          console.log('trending');
          
          // console.log(data.results);
          setIsLoading(false);
          setError({ show: false, msg: "" });
        }  else{
          setError({ show: true, msg: "No movies found." });
          setIsLoading(false);
        }      
      } catch (error) {
        setError({ show: true, msg: "Something went wrong." });
        setIsLoading(false);
        console.error(err);        
      }
    }
  
    const getTvShows = async (url, opt) => {
      setIsLoading(true)
      try {
        const resTv = await fetch(url, opt);
        const dataTv = await resTv.json();
        if(dataTv.results){
          setTvShows(dataTv.results)
          console.log(dataTv.results);
          setIsLoading(false);
          setError({ show: false, msg: "" });
        }  else{
          setError({ show: true, msg: "No movies found." });
          setIsLoading(false);
        }      
      } catch (error) {
        setError({ show: true, msg: "Something went wrong." });
        setIsLoading(false);
        console.error(err);        
      }
    }

  const getMovies = async (url, options) => {
    try {
      setIsLoading(true); 
      const response = await fetch(`${url}`, options);

      const data = await response.json();

      if (data.results) {
        setMovie(data.results);
        console.log(data.results);
        
        setIsLoading(false);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "No movies found." });
        setIsLoading(false);
      }
    } catch (err) {
      setError({ show: true, msg: "Something went wrong." });
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    
    if(query===''){
      getMovies(`${MOVIE_API_URL}/discover/movie`, options);
      getTvShows(TV_API_URL, TV_API_OPTIONS)
      getTrendingMovies(MOVIE_API_URL, options)
      
    }else{
      const debounce = setTimeout(() => {
        if(loc.pathname === '/browse' || loc.pathname === '/'){
          handleQueryMovie()
          handleQueryTv()          
      }
    }, 800);
      
      return () => clearTimeout(debounce);
    }

  }, [query, loc.pathname]);

  return (
    <AppContext.Provider value={{ isLoading, movie, error, query, setQuery, tvShows, trending }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
export { AppContext, useGlobalContext };
