const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        isLoading: true,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        isLoading: false,
        users: action.payload,
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
