import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useGlobalContext } from "../../context/context";

const Index = () => {
    const { query, setQuery } = useGlobalContext();
  return (
    <div className="text-white">
      <div className="relative flex justify-center items-center">
        <input
          type="text"
          name=""
          placeholder="Search movie, show, etc"
          className="w-[80%] outline-none rounded-lg h-10 py-3 px-5 placeholder:text-zinc-300 placeholder:font-inter bg-zinc-800"
          id=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute cursor-pointer text-white text-2xl top-1/4 right-[12rem]">
          <IoSearchSharp />
        </div>
      </div>
    </div>
  );
};

export default Index;
