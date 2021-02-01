import { createAction } from "@reduxjs/toolkit";
import {
  ADD_UNIT,
  EDIT_UNIT,
  GET_UNITS,
  GET_UNIT,
  SET_UNIT_FLAG,
  FILTER_UNITS,
} from "../constants";

export const addUnit = createAction(ADD_UNIT);
export const editUnit = createAction(EDIT_UNIT);
export const getUnits = createAction(GET_UNITS);
export const getUnit = createAction(GET_UNIT);
export const setUnitFlag = createAction(SET_UNIT_FLAG);
export const filterUnits = createAction(FILTER_UNITS);

export default {
  addUnit,
  editUnit,
  getUnits,
  getUnit,
  setUnitFlag,
  filterUnits,
};
