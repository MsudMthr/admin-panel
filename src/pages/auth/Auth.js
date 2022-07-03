import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Register from "../../components/Register";
import Login from "../../components/Login";
import TransporterButton from "./../../components/TransporterButton";
const Auth = () => {
  const [pathName, setPathName] = useState("");
  return (
    <>
      <div className="flex items-center justify-center gap-4 pt-4">
        <Link
          onClick={(e) => setPathName(e.target.innerText)}
          to={"/Auth/Register"}
          className={` px-3 py-2 font-semibold transition ${
            pathName === "Sign Up" ? "bg-gray-700 text-white" : "bg-gray-700/20"
          }`}
        >
          Sign Up
        </Link>
        <Link
          onClick={(e) => setPathName(e.target.innerText)}
          to={"/Auth/Login"}
          className={` px-3 py-2 font-semibold transition ${
            pathName === "Login" ? "bg-gray-700 text-white" : "bg-gray-700/20"
          }`}
        >
          Login
        </Link>
      </div>
      <Outlet />
      <TransporterButton />
    </>
  );
};

export default Auth;
