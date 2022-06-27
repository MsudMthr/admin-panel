import React from "react";
import axios from "axios";

const DeleteButton = ({ data, id, setIsDeletedData }) => {
  const deleteUserHandler = () => {
    const confirm = window.confirm(`Are You Sure for Delete ${data} ? `);
    if (confirm) {
      axios.delete(`/${data}/${id}`).then((res) => {
        if (res.status === 200) {
          setIsDeletedData(true);
        }
      });
    }
  };

  return (
    <button
      onClick={deleteUserHandler}
      className="rounded bg-red-400  px-3 py-1 font-black text-rose-900 transition focus:ring-2 focus:ring-rose-700 focus:ring-offset-2"
    >
      Delete {data}
    </button>
  );
};

export default DeleteButton;
