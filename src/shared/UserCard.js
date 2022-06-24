import React from "react";

const UserCard = ({ user }) => {
  const { name, email, number, role, _id } = user;
  return (
    <div className=" rainbow  my-1 flex flex-auto flex-col  gap-2  overflow-hidden rounded-lg transition-all  hover:bg-teal-400/50  hover:shadow-lg  ">
      <div className="flex h-full gap-4 flex-col justify-between bg-neutral-400/40 px-2 py-1 backdrop-blur-md ">
        <p className=" font-black">
          <span className="opacity-60">Name: </span>
          {name}
        </p>

        <p className=" font-black">
          <span className="opacity-60">Role: </span>
          {role}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
