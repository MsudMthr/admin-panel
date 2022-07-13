import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useTitle from "./../hook/useTitle";
import axios from "axios";
import TransporterButton from "./../components/TransporterButton";
import Loading from "./Loading";
import PutUser from "../components/PutUser";
import DeleteButton from "../components/DeleteButton";
import DataDeleted from "./../components/DataDeleted";
import { UseDisableButton } from "../hook/useDisableButton";
import DeleteModal from "../components/DeleteModal";

const UserDetails = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletedUser, setIsDeletedUser] = useState(false);
  const [isShowPutForm, setIsShowPutForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { _id } = useParams();

  const deleteUserProfile = useRef();
  const updateUserProfile = useRef();

  UseDisableButton(isDeletedUser, updateUserProfile, deleteUserProfile);
  console.log(_id);
  useEffect(() => {
    axios.get(`/users/${_id}`).then((response) => {
      setUser(response.data.data);
      setIsLoading(false);
    });
  }, []);

  const { name, email, role, number } = user;
  console.log(user);
  useTitle(name, user);
  if (isLoading) return <Loading />;
  return (
    <div className="mx-auto w-11/12 ">
      {isDeletedUser ? (
        <DataDeleted data={"User"} />
      ) : (
        <>
          {" "}
          <div className="mt-3 ml-5 flex items-center justify-between">
            <button
              ref={updateUserProfile}
              onClick={() => setIsShowPutForm(true)}
              className=" rounded bg-slate-800 px-2 py-1 font-bold text-white transition focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2 md:ml-0"
            >
              Update User
            </button>
            <button
              ref={deleteUserProfile}
              className={` rounded bg-red-500 px-2 py-1 font-bold text-white disabled:bg-red-200/80 `}
              onClick={() => setIsOpen(true)}
            >
              Delete {name}
            </button>
          </div>
          <div className=" mt-6 flex  flex-wrap gap-3 rounded bg-slate-300 px-3 py-5 shadow-inner">
            <p className="dataDetail">
              <span className="mr-1 opacity-60">Name : </span>
              {name}
            </p>
            <p className="dataDetail">
              <span className="mr-1 opacity-60">Email : </span>
              {email}
            </p>
            <p className="dataDetail">
              <span className="mr-1 opacity-60">Role : </span>
              {role}
            </p>
            <p className="dataDetail">
              <span className="mr-1 opacity-60">Number : </span>
              {number}
            </p>
            <p className="dataDetail">
              <span className="mr-1 opacity-60">Id : </span>
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
      {isOpen && (
        <DeleteModal
          isOpen={isOpen}
          setIsDeletedData={setIsDeletedUser}
          setIsOpen={setIsOpen}
          id={_id}
          name={name}
          path={"users"}
        />
      )}
      <TransporterButton />
    </div>
  );
};

export default UserDetails;
