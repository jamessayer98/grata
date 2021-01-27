import { takeLatest } from "redux-saga/effects";
import { ADD_BUILDING, EDIT_BUILDING, GET_BUILDINGS } from "../constants";
import apiCall from "../../utils/apiCall";

const addBuilding = apiCall({
  type: ADD_BUILDING,
  method: "post",
  path: "/buildings",
});

const editBuilding = apiCall({
  type: EDIT_BUILDING,
  method: "put",
  path: ({ id }) => `/buildings/${id}`,
});

const getBuildings = apiCall({
  type: GET_BUILDINGS,
  method: "get",
  path: ({ id }) => `/orgs/${id}/buildings`,
});

export default function* buildingSaga() {
  yield takeLatest(ADD_BUILDING, addBuilding);
  yield takeLatest(EDIT_BUILDING, editBuilding);
  yield takeLatest(GET_BUILDINGS, getBuildings);
}
