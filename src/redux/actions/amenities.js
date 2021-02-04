import { createAction } from "@reduxjs/toolkit";
import {
  GET_AMENITY,
  GET_AMENITIES,
  GET_BUILDING_AMENITIES,
  ADD_AMENITIES,
  EDIT_AMENITIES,
  FILTER_AMENITIES,
} from "../constants";

export const getAmenity = createAction(GET_AMENITY);
export const getAmenities = createAction(GET_AMENITIES);
export const getBuildingAmenities = createAction(GET_BUILDING_AMENITIES);
export const addAmenities = createAction(ADD_AMENITIES);
export const editAmenities = createAction(EDIT_AMENITIES);
export const filterAmenities = createAction(FILTER_AMENITIES);

export default {
  getAmenity,
  getBuildingAmenities,
  addAmenities,
  editAmenities,
  getAmenities,
  filterAmenities,
};
