import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.number) {
    errors.number = "Required";
  } else if (values.number === isNaN) {
    errors.number = "pleas enter number";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  if (values.password !== values.password_repeat) {
    errors.password_repeat = "Confirm Password";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const AddUser = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [addUserError, setAddUserError] = useState("");
  const showFormHandler = () => {
    setIsShowForm(!isShowForm);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      password_repeat: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("/users", values)
        .then((response) => console.log(response.data))
        .catch((err) => setAddUserError(err.message));
    },
  });

  return (
    <>
      {/* show form button */}
      <button
        onClick={showFormHandler}
        className="rounded bg-black/70 px-2 py-1 font-semibold text-white"
      >
        Add user
      </button>
      {/* add user form */}
      <div
        className={
          isShowForm
            ? "absolute top-[10%] left-[20%] z-50 w-8/12 md:left-[30%]"
            : "hidden"
        }
      >
        <form
          onSubmit={formik.handleSubmit}
          className={" flex w-10/12 flex-col gap-2"}
        >
          <div className="flex flex-auto flex-col">
            <label className="font-semibold text-white" htmlFor="name">
              Name
            </label>
            <input
              className="m-1 rounded-sm px-2 py-0.5 outline-none ring-1 ring-inset ring-black/25 transition focus:ring-black/75"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && (
              <div className="text-sm text-red-400">{formik.errors.name}</div>
            )}
          </div>
          <div className="flex flex-auto flex-col">
            <label className="font-semibold text-white" htmlFor="email">
              Email Address
            </label>
            <input
              className="m-1 rounded-sm px-2 py-0.5 outline-none ring-1 ring-inset ring-black/25 transition focus:ring-black/75"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <div className="text-sm text-red-400">{formik.errors.email}</div>
            )}
          </div>
          <div className="flex flex-auto flex-col">
            <label className="font-semibold text-white" htmlFor="number">
              Nember
            </label>
            <input
              className="m-1 rounded-sm px-2 py-0.5 outline-none ring-1 ring-inset ring-black/25 transition focus:ring-black/75"
              id="number"
              name="number"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
            />
            {formik.errors.number && (
              <div className="text-sm text-red-400">{formik.errors.number}</div>
            )}
          </div>
          <div className="flex flex-auto flex-col">
            <label className="font-semibold text-white" htmlFor="password">
              Password
            </label>
            <input
              className="m-1 rounded-sm px-2 py-0.5 outline-none ring-1 ring-inset ring-black/25 transition focus:ring-black/75"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <div className="text-sm text-red-400">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="flex flex-auto flex-col">
            <label
              className="font-semibold text-white"
              htmlFor="password_repeat"
            >
              Confirm Password
            </label>
            <input
              className="m-1 rounded-sm px-2 py-0.5 outline-none ring-1 ring-inset ring-black/25 transition focus:ring-black/75"
              id="password_repeat"
              name="password_repeat"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password_repeat}
            />
            {formik.errors.password_repeat && (
              <div className="text-sm text-red-400">
                {formik.errors.password_repeat}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="mx-auto w-7/12 rounded bg-black/75 py-1 font-semibold text-white backdrop-blur-md transition hover:bg-black/90"
          >
            Add User
          </button>
        </form>
        {addUserError && <p className="text-red-500 font-bold w-10/12 text-center mt-2">{addUserError}</p>}
      </div>
      {/* close form button */}
      <button
        onClick={showFormHandler}
        className={`${
          isShowForm
            ? "absolute top-0 left-0 z-40 min-h-screen w-full bg-black/75"
            : "hidden"
        } `}
      ></button>
    </>
  );
};

export default AddUser;
