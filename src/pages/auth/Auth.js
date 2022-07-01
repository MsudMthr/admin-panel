import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Register from "../../components/Register";
import Login from "../../components/Login";

const Auth = () => {
  return (
    <>
      <Outlet />
      <div>
        <Link to={"/Auth/Register"}>Sign Up</Link>
        <Link to={"/Auth/Login"}>Login</Link>
      </div>
      
    </>
  );
};

export default Auth;
