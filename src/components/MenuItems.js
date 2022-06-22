import React from "react";

import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="flex flex-col px-3">
      <p className="text-menu/40">Menu</p>
      <span className="h-0.5 w-5/6 bg-menu/40"></span>
      <div className="mt-4 flex flex-col gap-2">
        <Link className="text-menu" to={"/"}>
          Home
        </Link>
        <Link className="text-menu" to={"/Users"}>
          Users
        </Link>
        <Link className="text-menu" to={"/Products"}>
          Products
        </Link>
        <Link className="text-menu" to={"/Categories"}>
          Categories
        </Link>
      </div>
    </div>
  );
};

export default MenuItems;
