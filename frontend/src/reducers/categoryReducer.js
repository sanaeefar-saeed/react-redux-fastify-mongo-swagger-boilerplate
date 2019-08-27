import {
  GET_ALL_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  IS_FETCHING_CATEGORY,
  FETCH_CATEGORY_ERROR,
  DELETE_CATEGORY_ERROR,
  ADD_CATEGORY_ERROR,
  EDIT_CATEGORY_ERROR,
} from "../actions/categoryActions"

const initialState = {
  categories: [],
  isFetchingCategory: true,
  errors: {
    fetchCategoryError: false,
    addCategoryError: false,
    editCategoryError: false,
    deleteProductError: false
  }
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category]
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category._id === action.category._id) return action.category;
          else return category
        })
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category._id !== action.id)
      };
    case IS_FETCHING_CATEGORY:
      return {
        ...state,
        isFetchingCategory: action.bool
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          fetchCategoryError: action.err
        }
      };
    case ADD_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          addCategoryError: action.err
        }
      };
    case EDIT_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          editCategoryError: action.err
        }
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        errors: {
          deleteCategoryError: action.err
        }
      };
    default:
      return state
  }
};

export default categoryReducer
