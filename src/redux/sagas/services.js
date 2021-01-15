import { takeLatest } from "redux-saga/effects";
import { GET_SERVICES } from "../constants";
import apiCall from "../../utils/apiCall";

const getServices = apiCall({
  type: GET_SERVICES,
  method: "get",
  path: "/requests",
});

export default function* servicesSaga() {
  yield takeLatest(GET_SERVICES, getServices);
}
