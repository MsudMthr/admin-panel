import React from "react";

const SearchData = ({ setSearchText }) => {
  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="ml-5 md:ml-0">
      <input
        type="text"
        placeholder="Search ..."
        className="rounded bg-[#e3e3e3] px-2 py-1 font-bold capitalize shadow-inner w-10/12 sm:w-full  outline-none"
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchData;
