import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pagesData }) => {
  const nextPageHandler = () => {};
  const PreviousPageHandler = () => {};
  return (
    <div className="my-2 flex items-center justify-center gap-2 ">
      <Link
        to={`/products/?page=${
          pagesData?.currentPage - 1 >= 1 && pagesData?.currentPage - 1
        }`}
        className={`rounded bg-gray-800 px-2 py-1 font-medium text-white  ${
          pagesData?.currentPage - 1 < 1 && "opacity-25 "
        }`}
      >
        Previous
      </Link>
      <p className="rounded bg-gray-800 px-2 py-1 font-medium text-white">
        {pagesData?.currentPage}
      </p>
      <Link
        to={`/products/?page=${pagesData?.nextPage}`}
        className={`rounded bg-gray-800 px-2 py-1 font-medium text-white ${
          !pagesData?.nextPage && "opacity-25"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
