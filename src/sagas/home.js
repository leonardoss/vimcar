import { put, call } from "redux-saga/effects";

import { get } from "../api/apiClient";
import * as actions from "../actions/index";

export function* fetchBusinesses(action) {
  yield put(actions.fetchingBusinesses(true));
  try {
    const response = yield call(get, action);
    yield put(actions.fetchBusinessesSuccess(response?.data?.businesses));
  } catch (e) {
    yield put(actions.fetchBusinessesError(e));
  }
  yield put(actions.fetchingBusinesses(false));
}
