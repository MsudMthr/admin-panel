import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { pathLocation } from "../helper/pathLocation";

const MenuItems = () => {
  const [activeLink, setActiveLink] = useState(pathLocation());
  const activeLinkHandler = (e) => {
    setActiveLink(e.target.innerText);
  };

  return (
    <div className="flex flex-col px-3">
      <p className="text-menu/40">Menu</p>
      <span className="h-0.5 w-5/6 bg-menu/40"></span>
      <div className="mt-4 flex flex-col gap-2 ">
        <div
          className={`relative  transition ${
            activeLink === "Home" && "translate-x-3 border-r-2 border-red-500"
          }`}
        >
          <Link onClick={activeLinkHandler} className={`menuLink`} to={"/"}>
            Home
          </Link>
        </div>
        <div
          className={`relative  transition ${
            activeLink === "Users" && "translate-x-3 border-r-2 border-red-500"
          }`}
        >
          <Link
            onClick={activeLinkHandler}
            className={`menuLink `}
            to={"/Users"}
          >
            Users
          </Link>
        </div>
        <div
          className={`relative  transition ${
            activeLink === "Products" && "translate-x-3 border-r-2 border-red-500"
          }`}
        >
          <Link
            onClick={activeLinkHandler}
            className={`menuLink transition `}
            to={"/Products"}
          >
            Products
          </Link>
        </div>
        <div
          className={`relative  transition ${
            activeLink === "Charts" && "translate-x-3 border-r-2 border-red-500"
          }`}
        >
          <Link
            onClick={activeLinkHandler}
            className={`menuLink transition `}
            to={"/Charts"}
          >
            Charts
          </Link>
        </div>
        <div
          className={`relative  transition ${
            activeLink === "Auth" && "translate-x-3 border-r-2 border-red-500"
          }`}
        >
          <Link onClick={activeLinkHandler} className={`menuLink`} to={"/Auth"}>
            Auth
          </Link>
        </div>
        {/* <Link className="text-menu" to={"/Categories"}>
          Categories
        </Link> */}
      </div>
    </div>
  );
};

export default MenuItems;
