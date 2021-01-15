import { takeLatest } from "redux-saga/effects";
import { FETCH_REFRESH_TOKEN, LOG_IN } from "../constants";
import apiCall from "../../utils/apiCall";

const login = apiCall({
  type: LOG_IN,
  method: "post",
  path: "/login2",
});

const fetchRefreshToken = apiCall({
  type: FETCH_REFRESH_TOKEN,
  method: "post",
  path: "/login/refresh-token",
});

export default function* authSaga() {
  yield takeLatest(LOG_IN, login);
  yield takeLatest(FETCH_REFRESH_TOKEN, fetchRefreshToken);
}
