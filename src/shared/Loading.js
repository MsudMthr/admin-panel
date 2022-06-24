import React from "react";
import "../style/loader.css";
const Loading = () => {
  return (
    <div className="spinner absolute top-1/2 left-1/2">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
