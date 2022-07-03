import React from "react";
import { slugSplitter } from "../helper/function";

const ProductCard = ({ product }) => {
  const { title, price, category, slug } = product;
  return (
    <div className="productCard  my-1 flex flex-auto flex-col  gap-2  overflow-hidden rounded-lg transition-all  hover:bg-teal-400/50  hover:shadow-lg h-full">
      <div className="h-full bg-white/40 flex flex-col px-1 backdrop-blur-sm justify-between">
        <p className="font-bold">
          <span className="opacity-60">product:</span> {title}
        </p>
        <p className="font-bold">
          <span className="opacity-60">price:</span> {price}
        </p>
        <p className="font-bold">
          <span className="opacity-60">category:</span> {category.name}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 px-1 mb-1">
          {slugSplitter(slug).map((slug,index) => (
            <p className="rounded text-xs bg-slate-400 p-0.5 shadow-inner" key={index} >{slug}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
