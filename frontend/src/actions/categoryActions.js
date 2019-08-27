const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
const ADD_CATEGORY = "ADD_CATEGORY";
const UPDATE_CATEGORY = "UPDATE_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const IS_FETCHING_CATEGORY = "IS_FETCHING_CATEGORY";
const FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR";
const DELETE_CATEGORY_ERROR = "DELETE_CATEGORY_ERROR";
const ADD_CATEGORY_ERROR = "ADD_CATEGORY_ERROR";
const EDIT_CATEGORY_ERROR = "EDIT_CATEGORY_ERROR";

const getAllCategories = categories => ({type: GET_ALL_CATEGORIES, categories});
const addCategory = category => ({type: ADD_CATEGORY, category});
const updateCategory = category => ({type: UPDATE_CATEGORY, category});
const deleteCategory = id => ({type: DELETE_CATEGORY, id});
const isFetchingCategory = bool => ({type: IS_FETCHING_CATEGORY, bool});
const fetchCategoryError = err => ({type: FETCH_CATEGORY_ERROR, err});
const deleteCategoryError = err => ({type: DELETE_CATEGORY_ERROR, err});
const addCategoryError = err => ({type: ADD_CATEGORY_ERROR, err});
const editCategoryError = err => ({type: EDIT_CATEGORY_ERROR, err});

export {
  GET_ALL_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  IS_FETCHING_CATEGORY,
  FETCH_CATEGORY_ERROR,
  DELETE_CATEGORY_ERROR,
  ADD_CATEGORY_ERROR,
  EDIT_CATEGORY_ERROR,
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  isFetchingCategory,
  fetchCategoryError,
  deleteCategoryError,
  addCategoryError,
  editCategoryError
}
