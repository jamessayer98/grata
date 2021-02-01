import { createAction } from "@reduxjs/toolkit";
import {
  ADD_BUILDING,
  EDIT_BUILDING,
  GET_BUILDINGS,
  GET_BUILDING,
  FILTER_BUILDINGS,
} from "../constants";

export const addBuilding = createAction(ADD_BUILDING);
export const editBuilding = createAction(EDIT_BUILDING);
export const getBuildings = createAction(GET_BUILDINGS);
export const getBuilding = createAction(GET_BUILDING);
export const filterBuildings = createAction(FILTER_BUILDINGS);

export default {
  addBuilding,
  editBuilding,
  getBuildings,
  getBuilding,
  filterBuildings,
};
