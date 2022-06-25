import axios from "axios";

const getProductsRequest = () => {
  return { type: "GET_PRODUCTS_REQUEST" };
};
const getProductsSuccess = (products) => {
  return { type: "GET_PRODUCTS_SUCCESS", payload: products };
};
const getProductsFailure = (error) => {
  return { type: "GET_PRODUCTS_FAILURE", payload: error };
};

const getProducts = (page) => {
  return (dispatch) => {
    dispatch(getProductsRequest());
    axios
      .get(`/products?limit=10&page=${page}`)
      .then((res) => {
        dispatch(getProductsSuccess(res.data.data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getProductsFailure(errorMsg));
      });
  };
};

export default getProducts;
