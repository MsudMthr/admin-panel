import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddUser from "../../components/AddUser";
import SearchData from "../../components/SearchData";
import UserCard from "../../shared/UserCard";
import getUser from "./../../Redux/Users/usersAction";
import useTitle from "./../../hook/useTitle";
import Loading from "../../shared/Loading";
const Users = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.usersState);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    dispatch(getUser());
  }, []);

  useTitle("Users");

  const searchUsers = usersState.users?.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="mx-auto w-11/12">
      <div className="my-2 flex justify-between items-center">
        <SearchData setSearchText={setSearchText} />
        <AddUser />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-6 gap-3  sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-12">
        {searchUsers ? (
          searchUsers?.map((user) => (
            <Link
              to={`/users/${user._id}`}
              key={user._id}
              className={`col-span-6 sm:col-span-4`}
            >
              <UserCard user={user} />
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Users;
