import React from "react";
import { Link } from "react-router-dom";

const TransporterButton = () => {
  return (
    <div className="mx-auto mt-10 flex w-5/6 flex-wrap justify-around gap-y-5 gap-x-2">
      <Link  to={"/Users"} className="transporter-items users">
        <h6 className="flex h-full w-full items-center justify-center text-xl font-black drop-shadow-2xl backdrop-blur-sm">
          Users
        </h6>
      </Link>
      <Link  to={"/Products"} className="transporter-items products">
        <h6 className="flex h-full w-full items-center justify-center text-xl font-black drop-shadow-2xl backdrop-blur-sm">
          Products
        </h6>
      </Link>
      <Link to={"/Categories"}  className="transporter-items categories">
        <h6 className="flex h-full w-full items-center justify-center text-xl font-black text-white drop-shadow-2xl backdrop-blur-sm">
          Categories
        </h6>
      </Link>
    </div>
  );
};

export default TransporterButton;
