import React, { useEffect, useState } from "react";
import useApi from "./../hook/useApi";
import { Link } from 'react-router-dom';

const SuggestionCard = ({ product , slug }) => {
  const { title, price, createdBy } = product;
  const { data } = useApi(`/users/${createdBy}`);
  return (
    <div className="flex flex-col bg-red-400 w-96 min-h-full gap-2 rounded m-2 p-2 justify-center">
      <p className="font-bold">Name : {title}</p>
      <p className="font-bold">Price : ${price}</p>
      <p className="font-bold">category : {slug}</p>
      <div className="flex  justify-between items-center">
      <p className="font-bold">CreatedBy : {data?.name}</p>
      <Link className="font-sans text-xs" to={`/users/${data?._id}`}>Go to profile</Link>
      </div>
    </div>
  );
};

export default SuggestionCard;
