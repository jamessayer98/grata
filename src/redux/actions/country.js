import { createAction } from "redux-actions";
import { GET_COUNTRY, GET_STATE } from "../constants";

export const getCountry = createAction(GET_COUNTRY);
export const getState = createAction(GET_STATE);

export default {
  getCountry,
  getState,
};
