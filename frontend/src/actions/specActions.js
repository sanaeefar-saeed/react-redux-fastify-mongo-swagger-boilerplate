const GET_ALL_SPECS = "GET_ALL_SPECS";
const ADD_SPEC = "ADD_SPEC";
const UPDATE_SPEC = "UPDATE_SPEC";
const DELETE_SPEC = "DELETE_SPEC";
const IS_FETCHING_SPEC = "IS_FETCHING_SPEC";
const FETCH_SPEC_ERROR = "FETCH_SPEC_ERROR";
const DELETE_SPEC_ERROR = "DELETE_SPEC_ERROR";
const ADD_SPEC_ERROR = "ADD_SPEC_ERROR";
const EDIT_SPEC_ERROR = "EDIT_SPEC_ERROR";

const getAllSpecs = specs => ({type: GET_ALL_SPECS, specs});
const addSpec = spec => ({type: ADD_SPEC, spec});
const updateSpec = spec => ({type: UPDATE_SPEC, spec});
const deleteSpec = id => ({type: DELETE_SPEC, id});
const isFetchingSpec = bool => ({type: IS_FETCHING_SPEC, bool});
const fetchSpecError = err => ({type: FETCH_SPEC_ERROR, err});
const addSpecError = err => ({type: ADD_SPEC_ERROR, err});
const editSpecError = err => ({type: EDIT_SPEC_ERROR, err});
const deleteSpecError = err => ({type: DELETE_SPEC_ERROR, err});

export {
  GET_ALL_SPECS,
  ADD_SPEC,
  UPDATE_SPEC,
  DELETE_SPEC,
  IS_FETCHING_SPEC,
  FETCH_SPEC_ERROR,
  DELETE_SPEC_ERROR,
  ADD_SPEC_ERROR,
  EDIT_SPEC_ERROR,
  getAllSpecs,
  addSpec,
  updateSpec,
  deleteSpec,
  isFetchingSpec,
  fetchSpecError,
  deleteSpecError,
  addSpecError,
  editSpecError
};
