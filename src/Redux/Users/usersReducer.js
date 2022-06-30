const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

const userReduce = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return {
        isLoading: true,
      };
    case "GET_USERS_SUCCESS":
      return {
        isLoading: false,
        users: action.payload,
      };
    case "GET_USERS_FAILURE":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReduce;
