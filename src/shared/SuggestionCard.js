import React, { useEffect, useState } from "react";
import useApi from "./../hook/useApi";
import { Link } from "react-router-dom";

const SuggestionCard = ({ product, slug }) => {
  const { title, price, createdBy } = product;
  const { data } = useApi(`/users/${createdBy}`);
  return (
    <>
      {data && (
        <div className="m-2 flex min-h-full w-96 flex-col justify-center gap-2 rounded bg-red-400 p-2">
          <p className="font-bold">Name : {title}</p>
          <p className="font-bold">Price : ${price}</p>
          <p className="font-bold">category : {slug}</p>
          <div className="flex  items-center justify-between">
            <p className="font-bold">Created By : {data?.name}</p>
            <Link className="font-sans text-xs" to={`/users/${data?._id}`}>
              Go to profile
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestionCard;
