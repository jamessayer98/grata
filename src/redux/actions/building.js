import { createAction } from "redux-actions";
import { ADD_BUILDING, EDIT_BUILDING, GET_BUILDINGS, GET_BUILDING } from "../constants";

export const addBuilding = createAction(ADD_BUILDING);
export const editBuilding = createAction(EDIT_BUILDING);
export const getBuildings = createAction(GET_BUILDINGS);
export const getBuilding = createAction(GET_BUILDING);

export default {
  addBuilding,
  editBuilding,
  getBuildings,
  getBuilding,
};
