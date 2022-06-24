import React from "react";

const FormInput = ({ id, changeHandler, name, value, type }) => {
  return (
    <label className="flex flex-col " htmlFor={id}>
      <span>{name}</span>
      <input
        type={type}
        id={id}
        onChange={changeHandler}
        required
        value={value}
        className="rounded outline-none transition out-of-range:ring-red-400 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      />
    </label>
  );
};

export default FormInput;
