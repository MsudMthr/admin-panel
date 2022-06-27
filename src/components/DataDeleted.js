import React from "react";

const DataDeleted = ({ data }) => {
  return (
    <div className="mx-auto mt-5 h-auto w-11/12 rounded bg-green-100 py-10 text-center ">
      <p className="font-bold">{data} Is Deleted</p>
    </div>
  );
};

export default DataDeleted;
