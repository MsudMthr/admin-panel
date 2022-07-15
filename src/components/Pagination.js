import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import getProducts from "./../Redux/Products/productAction";
import queryString from "query-string";

const Pagination = () => {
  const [pageCount, setPageCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const pageChangeHandler = (selectedObject) => {
    setCurrentPage(selectedObject.selected + 1);

    dispatch(getProducts(currentPage));
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRange={3}
      marginPagesDisplayed={2}
      onPageChange={pageChangeHandler}
      containerClassName={"container"}
      previousLinkClassName={
        "page bg-slate-900 text-white px-2 py-1 font-bold rounded"
      }
      breakClassName={"page "}
      nextLinkClassName={
        "page bg-slate-900 text-white px-2 py-1 font-bold rounded"
      }
      pageClassName={"page bg-slate-300 px-2 py-1 rounded"}
      disabledClassNae={"disabled bg-slate-900/50"}
      activeClassName={"active bg-slate-500 font-bold"}
      className={"my-4 flex items-center justify-center gap-4 md:my-0"}
    />
  );
};

export default Pagination;
