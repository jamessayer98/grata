import { takeLatest } from "redux-saga/effects";
import { GET_AMENITIES } from "../constants";
import apiCall from "../../utils/apiCall";

const getAmenities = apiCall({
  type: GET_AMENITIES,
  method: "get",
  path: "/amenities",
});

export default function* amenitiesSaga() {
  yield takeLatest(GET_AMENITIES, getAmenities);
}
