import React from "react";
import { useGlobalContext } from "../context/context";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  const { query, setQuery } = useGlobalContext();

  

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={`Search `}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12  py-3 placeholder:font-inter text-white font-inter text-base placeholder:text-white outline-none backdrop-blur-3xl bg-white/20  rounded-full w-32 max-w-md"
      />
      <div className="absolute text-white text-2xl top-1/4 left-4">
        <IoSearchSharp />
      </div>
    </div>
  );
};

export default SearchBar;
