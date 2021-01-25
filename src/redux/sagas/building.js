import { takeLatest } from "redux-saga/effects";
import { ADD_BUILDING, EDIT_BUILDING, GET_ALLBUILDINGS, GET_CUSTOMBUILDINGS } from "../constants";
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

const getAllBuildings = apiCall({
  type: GET_ALLBUILDINGS,
  method: "get",
  path: "/buildings",
});

const getCustomBuildings = apiCall({
  type: GET_CUSTOMBUILDINGS,
  method: "get",
  path: ({ id }) => `/orgs/${id}/buildings`,
});

export default function* buildingSaga() {
  yield takeLatest(ADD_BUILDING, addBuilding);
  yield takeLatest(EDIT_BUILDING, editBuilding);
  yield takeLatest(GET_CUSTOMBUILDINGS, getCustomBuildings);
  yield takeLatest(GET_ALLBUILDINGS, getAllBuildings);
}
