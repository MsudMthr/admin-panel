import React from "react";

const Pagination = ({ currentPage, nextPage, previousPage }) => {
  const nextPageHandler = () => {};
  const PreviousPageHandler = () => {};
  return (
    <div>
      <button onClick={nextPageHandler}>«</button>
      <button>{currentPage}</button>
      <button onClick={PreviousPageHandler}>»</button>
    </div>
  );
};

export default Pagination;
