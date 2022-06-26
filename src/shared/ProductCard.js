import React from "react";
import { slugSplitter } from "../helper/function";

const ProductCard = ({ product }) => {
  const { title, price, category, slug } = product;
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{category.name}</p>
      <div className="flex gap-4">
        {slugSplitter(slug).map((slug) => (
          <p className="bg-red-500">{slug}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
