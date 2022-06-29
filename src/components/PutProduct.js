import axios from "axios";
import React, { useState } from "react";
import { joinTitle } from "../helper/function";
import FormInput from "./FormInput";

const PutProduct = ({ setIsShowPutForm, title }) => {
  const [updateData, setUpdateData] = useState({
    title: "",
    price: +"",
    description: "",
    category: "",
  });
  const changeHandler = (e) => {
    setUpdateData({ ...updateData, [e.target.id]: e.target.value });
  };
  const updateProductHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/products/${joinTitle(title)}`, {
        updateData,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" mx-auto mt-5 grid max-w-lg items-center transition">
      <button
        onClick={() => setIsShowPutForm(false)}
        className="rounded-tl-lg rounded-tr-lg bg-red-400 font-bold"
      >
        Close
      </button>
      <form
        onSubmit={updateProductHandler}
        className="flex flex-col gap-3 rounded-bl-lg rounded-br-lg bg-slate-500/30 px-8 py-5 shadow-inner backdrop-blur-md"
      >
        <FormInput
          changeHandler={changeHandler}
          name={"Title"}
          id="title"
          value={updateData.title}
          type="text"
        />
        <FormInput
          changeHandler={changeHandler}
          name={"Price"}
          id="price"
          value={updateData.price}
          type="text"
        />
        <FormInput
          changeHandler={changeHandler}
          name={"description"}
          id="description"
          value={updateData.description}
          type="text"
        />
        <FormInput
          changeHandler={changeHandler}
          name={"category (id)"}
          id="category"
          value={updateData.category}
          type="text"
        />

        <button className="rounded bg-green-400 " type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default PutProduct;
