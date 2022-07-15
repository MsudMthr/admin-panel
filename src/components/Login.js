import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
const Login = () => {
  const [loginError, setLoginError] = useState("");

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios
        .post("/auth/login", values)
        .then((response) => console.log(response.data))
        .catch((err) => {
          console.error(err);
          setLoginError(err.response.data.message);
        });
    },
  });
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center ">
      <form
        onSubmit={formik.handleSubmit}
        className={"my-8 flex w-8/12 flex-col gap-2"}
      >
        <div className="flex flex-auto flex-col">
          <label className="font-semibold" htmlFor="email">
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
          <label className="font-semibold" htmlFor="password">
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
            <div className="text-sm text-red-400">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="mx-auto w-7/12 rounded-sm bg-black/75 py-0.5 font-semibold text-white backdrop-blur-md transition hover:bg-black/90"
        >
          Login
        </button>
      </form>
      {loginError && (
        <p className="font-semibold text-red-500 ">{loginError}</p>
      )}
    </div>
  );
};

export default Login;
