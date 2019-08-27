const CHANGE_ITEMS_TO_SHOW = 'CHANGE_ITEMS_TO_SHOW';
const ADD_PRODUCT_TO_RENDERED = 'ADD_PRODUCT_TO_RENDERED';
const REMOVE_PRODUCT_FROM_RENDERED = 'REMOVE_PRODUCT_FROM_RENDERED';

const itemsToShow = value => ({type: CHANGE_ITEMS_TO_SHOW, value});
const addProductToRendered = id => ({type: ADD_PRODUCT_TO_RENDERED, id});
const removeProductFromRendered = id => ({type: REMOVE_PRODUCT_FROM_RENDERED, id});

export {
  CHANGE_ITEMS_TO_SHOW,
  ADD_PRODUCT_TO_RENDERED,
  REMOVE_PRODUCT_FROM_RENDERED,
  itemsToShow,
  addProductToRendered,
  removeProductFromRendered
}