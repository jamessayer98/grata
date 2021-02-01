import { createAction } from "@reduxjs/toolkit";
import { GET_AMENITIES, FILTER_AMENITIES } from "../constants";

export const getAmenities = createAction(GET_AMENITIES);
export const filterAmenities = createAction(FILTER_AMENITIES);

export default {
  getAmenities,
  filterAmenities,
};
