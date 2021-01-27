import { takeLatest } from "redux-saga/effects";
import { ADD_UNIT, EDIT_UNIT, GET_UNITS } from "../constants";
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

const getUnits = apiCall({
  type: GET_UNITS,
  method: "get",
  path: ({ id }) => `/buildings/${id}/units`,
});

export default function* unitSaga() {
  yield takeLatest(ADD_UNIT, addUnit);
  yield takeLatest(EDIT_UNIT, editUnit);
  yield takeLatest(GET_UNITS, getUnits);
}
