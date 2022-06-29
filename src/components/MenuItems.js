import React from "react";

import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="flex flex-col px-3">
      <p className="text-menu/40">Menu</p>
      <span className="h-0.5 w-5/6 bg-menu/40"></span>
      <div className="mt-4 flex flex-col gap-2 ">
        <div className="relative">
          <Link
            className="text-menu after:absolute after:bottom-0 after:left-0  after:h-0.5 after:w-0  after:bg-white/70 after:rounded-xl after:hover:left-1 after:transition-all after:duration-500 after:ease-in after:content-[''] after:hover:w-3/4"
            to={"/"}
          >
            Home
          </Link>
        </div>
        <div className="relative">
          <Link
            className="text-menu after:absolute after:bottom-0 after:left-0  after:h-0.5 after:w-0  after:bg-white/70 after:rounded-xl after:hover:left-1 after:transition-all after:duration-500 after:ease-in after:content-[''] after:hover:w-3/4"
            to={"/Users"}
          >
            Users
          </Link>
        </div>
        <div className="relative">
          <Link
            className="text-menu after:absolute after:bottom-0 after:left-0  after:h-0.5 after:w-0  after:bg-white/70 after:rounded-xl after:hover:left-1 after:transition-all after:duration-500 after:ease-in after:content-[''] after:hover:w-3/4"
            to={"/Products"}
          >
            Products
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
