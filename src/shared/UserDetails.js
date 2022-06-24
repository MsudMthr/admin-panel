import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { splitId } from "./../helper/function";
import useTitle from "./../hook/useTitle";
import axios from "axios";
import TransporterButton from "./../components/TransporterButton";
const UserDetails = () => {
  const [user, setUser] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`https://api.storerestapi.com/users/${_id}`)
        .then((res) => setUser(res.data.data));
    } catch (error) {
      setUser(error.message);
    }
  }, []);
  const { name, email, role, number } = user;
  console.log(name);
  useTitle(name, user);
  return (
    <div>
      <div className="mx-auto mt-8 flex w-11/12 flex-wrap gap-3 rounded bg-slate-300 px-3 py-5 shadow-inner">
        <p className="userDetail">
          <span className="opacity-60">Name : </span>
          {name}
        </p>
        <p className="userDetail">
          <span className="opacity-60">Email : </span>
          {email}
        </p>
        <p className="userDetail">
          <span className="opacity-60">Role : </span>
          {role}
        </p>
        <p className="userDetail">
          <span className="opacity-60">Number : </span>
          {number}
        </p>
        <p className="userDetail">
          <span className="opacity-60">Id : </span>
          {_id}
        </p>
      </div>

      <TransporterButton />
    </div>
  );
};

export default UserDetails;
