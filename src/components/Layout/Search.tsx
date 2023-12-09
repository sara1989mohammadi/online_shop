import React from "react";

const Search = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center w-full max-w-2xl">
        <div className="whitespace-nowrap cursor-pointer border-2 border-primary-color border-r-0 rounded-l-md py-3 px-5 flex items-center space-x-3">
          <span className="font-normal italic">All Category</span>
          <i className="fa-solid fa-chevron-down text-sm mt-1 text-gray-500"></i>
        </div>
        <div className="relative w-full flex">
          <span className="absolute left-4 top-3 text-lg text-gray-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="w-full focus:border-gray-500 border-2 border-primary-color border-r-0 pl-12 py-3 pr-3 font-medium italic focus:outline-none placeholder-gray-500"
            placeholder="Search here ..."
          />
          <button className=" bg-primary-color rounded-r-md text-white px-8 hover:bg-transparent hover:text-primary-color">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
