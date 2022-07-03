import React from "react";

import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="flex flex-col px-3">
      <p className="text-menu/40">Menu</p>
      <span className="h-0.5 w-5/6 bg-menu/40"></span>
      <div className="mt-4 flex flex-col gap-2 ">
        <div className="relative">
          <Link className="menuLink" to={"/"}>
            Home
          </Link>
        </div>
        <div className="relative">
          <Link className="menuLink" to={"/Users"}>
            Users
          </Link>
        </div>
        <div className="relative">
          <Link className="menuLink" to={"/Products?page=1"}>
            Products
          </Link>
        </div>
        <div className="relative">
          <Link className="menuLink" to={"/Charts"}>
            Charts
          </Link>
        </div>
        <div className="relative">
          <Link className="menuLink" to={"/Auth"}>
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
