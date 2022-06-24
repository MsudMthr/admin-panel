import axios from "axios";

const getUsersRequest = () => {
  return { type: "GET_USERS_REQUEST" };
};
const getUsersSuccess = (users) => {
  return { type: "GET_USERS_SUCCESS", payload: users };
};
const getUsersFailure = (error) => {
  return { type: "GET_USERS_FAILURE", payload: error };
};

const getUser = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    axios
      .get("/users")
      .then((res) => {
        dispatch(getUsersSuccess(res.data.data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getUsersFailure(errorMsg));
      });
  };
};

export default getUser;
