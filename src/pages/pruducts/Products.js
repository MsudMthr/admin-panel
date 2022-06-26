import React, { useEffect, useState } from "react";
import axios from "axios";
import useTitle from "./../../hook/useTitle";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "./../../Redux/Products/productAction";
import SearchData from "../../components/SearchData";
import ProductCard from "../../shared/ProductCard";
const Products = () => {
  useTitle("Products");
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    dispatch(getProducts(2));
  }, []);

  const searchProducts = productsState.products?.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(searchProducts);
  return (
    <div>
      <SearchData setSearchText={setSearchText} />
      {searchProducts?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
