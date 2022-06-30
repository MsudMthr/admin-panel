import React, { useEffect, useState } from "react";
import DoughnutChart from "../../components/DoughnutChart";
import RadarChart from "../../components/RadarChart";
import getUser from "./../../Redux/Users/usersAction";

import useApi from "./../../hook/useApi";
import { useDispatch, useSelector } from "react-redux";
import TransporterButton from "../../components/TransporterButton";
import Loading from "./../../shared/Loading";
const Charts = () => {
  //*  get role of users and set to array for chart data
  const dispatch = useDispatch();
  const [usersRole, setUsersRole] = useState([]);
  const users = useSelector((state) => state.usersState.users);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  useEffect(() => {
    users?.map((user) =>
      setUsersRole((prevUsers) => [...prevUsers, user.role])
    );
  }, [users]);

  //* get product categories
  const [categories, setCategories] = useState([]);
  const [productLengthCategory, setProductLengthCategory] = useState([]);
  const { isLoading, data } = useApi("/categories");
  useEffect(() => {
    data?.map((category) => {
      setCategories((prevCategoryName) => [...prevCategoryName, category.name]);
      setProductLengthCategory((prevProductsLength) => [
        ...prevProductsLength,
        category.products.length,
      ]);
    });
  }, [data]);
  if (isLoading || !usersRole.length) return <Loading />;
  return (
    <div className="mx-auto w-11/12">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 md:flex-row md:justify-around  ">
        <DoughnutChart
          datasets={[usersRole.length]}
          labels={["Role Customers"]}
        />
        <RadarChart datasets={productLengthCategory} labels={categories} />
      </div>
      <TransporterButton />
    </div>
  );
};

export default Charts;
