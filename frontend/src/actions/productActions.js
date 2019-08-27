const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const TOGGLE_SELECT_PRODUCT = "TOGGLE_SELECT_PRODUCT";
const IS_FETCHING_PRODUCT = "IS_FETCHING_PRODUCT";
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";
const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";
const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";
const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";
const SHOW_ALL = "SHOW_ALL";
const SHOW_AVAILABLE = "SHOW_AVAILABLE";
const SHOW_UNAVAILABLE = "SHOW_UNAVAILABLE";

const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products});
const addProduct = product => ({type: ADD_PRODUCT, product});
const updateProduct = product => ({type: UPDATE_PRODUCT, product});
const deleteProduct = id => ({type: DELETE_PRODUCT, id});
const toggleSelectProduct = payload => ({type: TOGGLE_SELECT_PRODUCT, payload});
const isFetchingProduct = bool => ({type: IS_FETCHING_PRODUCT, bool});
const createProductError = err => ({type: CREATE_PRODUCT_ERROR, err});
const editProductError = err => ({type: EDIT_PRODUCT_ERROR, err});
const fetchProductError = err => ({type: FETCH_PRODUCT_ERROR, err});
const deleteProductError = err => ({type: DELETE_PRODUCT_ERROR, err});
// for control shown products in product.index
const showAllProducts = () => ({type: SHOW_ALL});
const showAvailableProducts = () => ({type: SHOW_AVAILABLE});
const showUnAvailableProducts = () => ({type: SHOW_UNAVAILABLE});

export {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  TOGGLE_SELECT_PRODUCT,
  IS_FETCHING_PRODUCT,
  CREATE_PRODUCT_ERROR,
  EDIT_PRODUCT_ERROR,
  FETCH_PRODUCT_ERROR,
  DELETE_PRODUCT_ERROR,
  SHOW_ALL,
  SHOW_AVAILABLE,
  SHOW_UNAVAILABLE,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  toggleSelectProduct,
  isFetchingProduct,
  createProductError,
  editProductError,
  fetchProductError,
  deleteProductError,
  showAllProducts,
  showAvailableProducts,
  showUnAvailableProducts
};
