import {
  FETCH_BUSINESSES,
  FETCHING_BUSINESSES,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_BUSINESSES_ERROR,
  SET_FILTER_SEARCH
} from "../actions/actionTypes";

export const initialState = {
  businesses: [],
  termFiltered: "",
  loading: false
};

export default function BusinessesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_BUSINESSES:
      return {
        ...state,
        loading: action.loading
      };
    case FETCH_BUSINESSES:
      return {
        ...state
      };
    case FETCH_BUSINESSES_SUCCESS:
      return {
        ...state,
        businesses: action.businesses
      };
    case FETCH_BUSINESSES_ERROR:
      return {
        ...state,
        businesses: action.data
      };
    case SET_FILTER_SEARCH:
      return {
        ...state,
        termFiltered: action.termFiltered
      };
    default:
      return state;
  }
}
