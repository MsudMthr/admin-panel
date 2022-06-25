import axios from "axios";
import React, { useEffect } from "react";
import useTitle from "./../../hook/useTitle";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "./../../Redux/Products/productAction";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsState);
  useEffect(() => {
    dispatch(getProducts(3));
  }, []);
  console.log(products);
  useTitle("Products");
  return <div></div>;
};

export default Products;
