import axios from "axios";
import React, { useEffect, useState } from "react";
import SuggestionCard from "../shared/SuggestionCard";
import ProductCard from "./../shared/ProductCard";

const SuggestionProducts = ({ slug }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`/categories/${slug}`)
      .then((response) => setProducts(response.data?.data?.products))
      .catch((err) => console.error(err));
  }, []);

  console.log(products);
  return (
    <div className="mt-3 flex  flex-wrap justify-center overflow-hidden rounded ">
      {products?.map((product) => (
        <SuggestionCard product={product} slug={slug} />
      ))}
    </div>
  );
};

export default SuggestionProducts;
