import {
  CHANGE_ITEMS_TO_SHOW,
  ADD_PRODUCT_TO_RENDERED,
  REMOVE_PRODUCT_FROM_RENDERED
} from "../actions/filterActions";

const initialState = {
  itemsToShow: 1,
  renderedProductsID: []
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case (CHANGE_ITEMS_TO_SHOW):
      return {
        ...state,
        itemsToShow: action.value
      };
    case (ADD_PRODUCT_TO_RENDERED):
      return {
        ...state,
        renderedProductsID: [...state.renderedProductsID, action.id]
      };
    case (REMOVE_PRODUCT_FROM_RENDERED):
      return {
        ...state,
        renderedProductsID: state.renderedProductsID.filter(id => id !== action.id)
      };
    default:
      return state
  }
};

export default filterReducer