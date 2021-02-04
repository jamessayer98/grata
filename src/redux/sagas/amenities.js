import { takeLatest } from "redux-saga/effects";
import { GET_AMENITIES, GET_BUILDING_AMENITIES, EDIT_AMENITIES, ADD_AMENITIES } from "../constants";
import apiCall from "../../utils/apiCall";

const getAmenities = apiCall({
  type: GET_AMENITIES,
  method: "get",
  path: "/amenities",
});

const getBuildingAmenities = apiCall({
  type: GET_BUILDING_AMENITIES,
  method: "get",
  path: "/buildings/:id/amenities",
});

const addAmenities = apiCall({
  type: ADD_AMENITIES,
  method: "post",
  path: "/amenities",
});

const editAmenities = apiCall({
  type: EDIT_AMENITIES,
  method: "put",
  path: ({ id }) => `/amenities/${id}`,
});

export default function* amenitiesSaga() {
  yield takeLatest(GET_AMENITIES, getAmenities);
  yield takeLatest(GET_BUILDING_AMENITIES, getBuildingAmenities);
  yield takeLatest(ADD_AMENITIES, addAmenities);
  yield takeLatest(EDIT_AMENITIES, editAmenities);
}
