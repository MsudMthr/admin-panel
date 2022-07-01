import axios from "axios";
import React, { useState } from "react";
import FormInput from "./FormInput";

const PutUser = ({ setIsShowPutForm, id }) => {
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    number: +"",
    password: "",
    password_repeat: "",
  });
  const changeHandler = (e) => {
    setUpdateData({ ...updateData, [e.target.id]: e.target.value });
  };
  const updateUserHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/users/${id}`, {
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
        onSubmit={updateUserHandler}
        className="flex flex-col gap-3 rounded-bl-lg rounded-br-lg bg-slate-500/30 px-8 py-5 shadow-inner backdrop-blur-md"
      >
        <FormInput
          changeHandler={changeHandler}
          name={"Name"}
          id="name"
          value={updateData.name}
          type="text"
        />
        <FormInput
          changeHandler={changeHandler}
          name={"Email"}
          id="email"
          value={updateData.email}
          type="email"
        />
        <FormInput
          changeHandler={changeHandler}
          name={"Number"}
          id="number"
          value={updateData.number}
          type="number"
        />
        <FormInput
          changeHandler={changeHandler}
          name={"Password"}
          id="password"
          value={updateData.password}
          type="password"
        />
        <FormInput
          changeHandler={changeHandler}
          name={"Confirm password"}
          id="password_repeat"
          value={updateData.password_repeat}
          type="password"
        />
        <button className="rounded bg-green-400 " type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default PutUser;
