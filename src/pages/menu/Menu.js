import React from "react";

import adminImage from "../../assets/admin.png";
import MenuItems from "../../components/MenuItems";

const Menu = ({ isShowMenu, setIsShowMenu }) => {
  return (
    <>
      <div
        className={`menu-container fixed top-0 left-0 z-20 transition md:static ${
          isShowMenu ? " translate-x-0" : "-translate-x-full md:translate-x-0 "
        }`}
      >
        <img src={adminImage} alt="admin" />
        <MenuItems />
      </div>
      <button
        onClick={() => setIsShowMenu(!isShowMenu)}
        className={`md:hidden ${
          isShowMenu ? "fixed  z-10 h-screen w-screen bg-gray-700/40 " : "hidden"
        }`}
      ></button>
    </>
  );
};

export default Menu;
