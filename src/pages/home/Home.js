import React from "react";
import Banner from "../../components/Banner";
import TransporterButton from "../../components/TransporterButton";
import useTitle from "./../../hook/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div className="pb-5">
      <Banner />
      <TransporterButton />
    </div>
  );
};

export default Home;
