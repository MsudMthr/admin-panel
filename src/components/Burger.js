import React, { useState } from "react";

const Burger = ({ showMenuHandler, isShowMenu }) => {
  return (
    <div
      onClick={showMenuHandler}
      className="fixed top-0 left-0 z-30  ml-2 mt-2 flex h-4 w-6 flex-col justify-around  md:hidden"
    >
      <span
        className={`h-0.5 w-full origin-[4px] bg-black transition ${
          isShowMenu && "rotate-45 bg-white"
        }`}
      ></span>
      <span
        className={`h-0.5 w-full origin-[4px] bg-black transition ${
          isShowMenu && "bg-white opacity-0"
        }`}
      ></span>
      <span
        className={`h-0.5 w-full origin-[4px] bg-black transition ${
          isShowMenu && "-rotate-45 bg-white"
        }`}
      ></span>
    </div>
  );
};

export default Burger;
