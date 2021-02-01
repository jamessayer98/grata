import { createAction } from "@reduxjs/toolkit";
import { GET_COUNTRY, GET_STATE } from "../constants";

export const getCountry = createAction(GET_COUNTRY);
export const getState = createAction(GET_STATE);

export default {
  getCountry,
  getState,
};
