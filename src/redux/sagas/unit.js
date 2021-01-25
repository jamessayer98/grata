import { takeLatest } from "redux-saga/effects";
import { ADD_UNIT, EDIT_UNIT, GET_ALLUNITS, GET_CUSTOMUNITS } from "../constants";
import apiCall from "../../utils/apiCall";

const addUnit = apiCall({
  type: ADD_UNIT,
  method: "post",
  path: "units",
});

const editUnit = apiCall({
  type: EDIT_UNIT,
  method: "put",
  path: ({ id }) => `/units/${id}`,
});

const getAllUnits = apiCall({
  type: GET_ALLUNITS,
  method: "get",
  path: "/buildings",
});

const getCustomUnits = apiCall({
  type: GET_CUSTOMUNITS,
  method: "get",
  path: ({ id }) => `/buildings/${id}/units`,
});

export default function* unitSaga() {
  yield takeLatest(ADD_UNIT, addUnit);
  yield takeLatest(EDIT_UNIT, editUnit);
  yield takeLatest(GET_CUSTOMUNITS, getCustomUnits);
  yield takeLatest(GET_ALLUNITS, getAllUnits);
}
