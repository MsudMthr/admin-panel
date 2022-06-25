import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useTitle from "./../hook/useTitle";
import axios from "axios";
import TransporterButton from "./../components/TransporterButton";
import Loading from "./Loading";
import PutUser from "../components/PutUser";
import DeleteButton from "../components/DeleteButton";
import UserDeleted from "../components/UserDeleted";
const UserDetails = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletedUser, setIsDeletedUser] = useState(false);
  const [isShowPutForm, setIsShowPutForm] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    try {
      axios.get(`/users/${_id}`).then((res) => {
        setUser(res.data.data);
        setIsLoading(false);
      });
    } catch (error) {
      setUser(error.message);
      setIsLoading(false);
    }
  }, []);
  const { name, email, role, number } = user;
  console.log(name);
  useTitle(name, user);
  if (isLoading) return <Loading />;
  return (
    <div className="mx-auto w-11/12 ">
      {isDeletedUser ? (
        <UserDeleted />
      ) : (
        <>
          {" "}
          <div className="mt-3 ml-5 flex items-center justify-between">
            <button
              onClick={() => setIsShowPutForm(true)}
              className=" rounded bg-slate-800 px-2 py-1 font-bold text-white transition focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2 md:ml-0"
            >
              Update User
            </button>
            <DeleteButton
              data={"users"}
              id={_id}
              setIsDeletedUser={setIsDeletedUser}
            />
          </div>
          <div className=" mt-6 flex  flex-wrap gap-3 rounded bg-slate-300 px-3 py-5 shadow-inner">
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
          {isShowPutForm && (
            <PutUser
              setIsShowPutForm={setIsShowPutForm}
              id={_id}
              setUser={setUser}
            />
          )}
        </>
      )}

      <TransporterButton />
    </div>
  );
};

export default UserDetails;
