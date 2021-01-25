import { createAction } from "redux-actions";
import { ADD_UNIT, EDIT_UNIT, GET_ALLUNITS, GET_CUSTOMUNITS, GET_UNIT } from "../constants";

export const addUnit = createAction(ADD_UNIT);
export const editUnit = createAction(EDIT_UNIT);
export const getAllUnits = createAction(GET_ALLUNITS);
export const getCustomUnits = createAction(GET_CUSTOMUNITS);
export const getUnit = createAction(GET_UNIT);

export default {
  addUnit,
  editUnit,
  getAllUnits,
  getCustomUnits,
  getUnit,
};
