import {
  GET_ALL_SPECS,
  ADD_SPEC,
  UPDATE_SPEC,
  DELETE_SPEC,
  IS_FETCHING_SPEC,
  FETCH_SPEC_ERROR,
  ADD_SPEC_ERROR,
  EDIT_SPEC_ERROR,
  DELETE_SPEC_ERROR
} from "../actions/specActions";

const initialState = {
  specs: [],
  isFetchingSpec: true,
  errors: {
    addSpecError: false,
    editSpecError: false,
    fetchSpecError: false,
    deleteProductError: false
  }
};

const specReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPECS:
      return {
        ...state,
        specs: action.specs
      };
    case ADD_SPEC:
      return {
        ...state,
        specs: [...state.specs, action.spec]
      };
    case UPDATE_SPEC:
      return {
        ...state,
        specs: state.specs.map(spec => {
          if (spec._id === action.spec._id) return action.spec;
          else return spec
        })
      };
    case DELETE_SPEC:
      return {
        ...state,
        specs: state.specs.filter(spec => spec._id !== action.id)
      };
    case IS_FETCHING_SPEC:
      return {
        ...state,
        isFetchingSpec: action.bool
      };
    case FETCH_SPEC_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          fetchSpecError: action.err
        }
      };
    case ADD_SPEC_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          addSpecError: action.err
        }
      };
    case EDIT_SPEC_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          editSpecError: action.err
        }
      };
    case DELETE_SPEC_ERROR:
      return {
        ...state,
        errors: {
          deleteSpecError: action.err
        }
      };
    default:
      return state;
  }
};

export default specReducer
