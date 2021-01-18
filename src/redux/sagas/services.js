import { takeLatest } from "redux-saga/effects";
import { GET_SERVICE, GET_SERVICES } from "../constants";
import apiCall from "../../utils/apiCall";

const getServices = apiCall({
  type: GET_SERVICES,
  method: "get",
  path: "/requests",
});

const getService = apiCall({
  type: GET_SERVICE,
  method: "get",
  path: ({ id }) => `/requests/${id}`,
});

export default function* servicesSaga() {
  yield takeLatest(GET_SERVICES, getServices);
  yield takeLatest(GET_SERVICE, getService);
}
