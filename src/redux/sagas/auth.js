import { takeLatest } from "redux-saga/effects";
import { LOG_IN } from "../constants";
import apiCall from "../../utils/apiCall";

const login = apiCall({
  type: LOG_IN,
  method: "post",
  path: "/login2",
});

export default function* authSaga() {
  yield takeLatest(LOG_IN, login);
}
