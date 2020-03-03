import { takeLatest, all } from "redux-saga/effects";
import { fetchBusinesses } from "./home";

export default function* rootSaga() {
  yield all([takeLatest("FETCH_BUSINESSES", fetchBusinesses)]);
}
