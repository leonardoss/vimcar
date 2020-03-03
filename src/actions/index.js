import {
  FETCH_BUSINESSES,
  FETCHING_BUSINESSES,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_BUSINESSES_ERROR,
  SET_FILTER_SEARCH
} from "./actionTypes";

export const fetchBusinesses = (searchOptions, apiPath) => ({
  type: FETCH_BUSINESSES,
  searchOptions: searchOptions,
  apiPath: apiPath
});

export const fetchingBusinesses = value => ({
  type: FETCHING_BUSINESSES,
  loading: value
});

export const fetchBusinessesSuccess = value => ({
  type: FETCH_BUSINESSES_SUCCESS,
  businesses: value
});

export const fetchBusinessesError = error => ({
  type: FETCH_BUSINESSES_ERROR,
  payload: error
});

export const setFilterSearch = termFiltered => ({
  type: SET_FILTER_SEARCH,
  termFiltered: termFiltered
});
