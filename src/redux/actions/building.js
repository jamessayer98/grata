import { createAction } from "redux-actions";
import {
  ADD_BUILDING,
  EDIT_BUILDING,
  GET_ALLBUILDINGS,
  GET_CUSTOMBUILDINGS,
  GET_BUILDING,
} from "../constants";

export const addBuilding = createAction(ADD_BUILDING);
export const editBuilding = createAction(EDIT_BUILDING);
export const getAllBuildings = createAction(GET_ALLBUILDINGS);
export const getCustomBuildings = createAction(GET_CUSTOMBUILDINGS);
export const getBuilding = createAction(GET_BUILDING);

export default {
  addBuilding,
  editBuilding,
  getAllBuildings,
  getCustomBuildings,
  getBuilding,
};
