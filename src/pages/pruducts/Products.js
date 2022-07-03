import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import { Link } from "react-router-dom";
import useTitle from "./../../hook/useTitle";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "./../../Redux/Products/productAction";
import SearchData from "../../components/SearchData";
import ProductCard from "../../shared/ProductCard";
import Loading from "../../shared/Loading";
import Pagination from "../../components/Pagination";

const Products = () => {
  useTitle("Products");
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const [searchText, setSearchText] = useState("");
  const pageProducs = queryString.parse(window.location.search);
  useEffect(() => {
    dispatch(getProducts(pageProducs.page));
  }, []);
  console.log(productsState.products?.metadata);
  const searchProducts = productsState.products?.data?.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(searchProducts);
  return (
    <div className="mx-auto w-11/12 pt-2">
      <SearchData setSearchText={setSearchText} />
      <div className="mx-auto grid max-w-7xl grid-cols-6 gap-3  sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-12">
        {productsState.isLoading ? (
          <Loading />
        ) : (
          searchProducts?.map((product, index) => (
            <Link
              to={`/Products/${product.title}`}
              className={`col-span-6 sm:col-span-4`}
              key={index}
            >
              <ProductCard product={product} />
            </Link>
          ))
        )}
      </div>
      <Pagination pagesData={productsState.products?.metadata} />
    </div>
  );
};

export default Products;
