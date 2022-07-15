import axios from "axios";
import React, { useEffect, useState } from "react";
import { joinTitle } from "../helper/function";
import FormInput from "./FormInput";

const PutProduct = ({ setIsShowPutForm, title }) => {
  const [categories, setCategories] = useState(null);
  const [updateData, setUpdateData] = useState({
    title: "",
    price: +"",
    description: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get("/categories")
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const changeHandler = (e) => {
    setUpdateData({ ...updateData, [e.target.id]: e.target.value });
  };

  const updateProductHandler = (e) => {
    e.preventDefault();
    console.log(updateData);
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
        <div className="flex flex-col">
          <label htmlFor="category">category</label>
          <select name="" id="category">
            {categories?.map((category) => (
              <option
                onClick={() => setUpdateData({ category: category._id })}
                value={category?._id}
              >
                {category?.name}
              </option>
            ))}
          </select>
        </div>

        <button className="rounded bg-green-400 " type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default PutProduct;
