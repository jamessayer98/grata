import { createAction } from "redux-actions";
import { ADD_UNIT, EDIT_UNIT, GET_UNITS, GET_UNIT, SET_UNIT_FLAG } from "../constants";

export const addUnit = createAction(ADD_UNIT);
export const editUnit = createAction(EDIT_UNIT);
export const getUnits = createAction(GET_UNITS);
export const getUnit = createAction(GET_UNIT);
export const setUnitFlag = createAction(SET_UNIT_FLAG);

export default {
  addUnit,
  editUnit,
  getUnits,
  getUnit,
  setUnitFlag,
};
