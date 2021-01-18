import { createAction } from "redux-actions";
import { GET_SERVICE, GET_SERVICES } from "../constants";

export const getServices = createAction(GET_SERVICES);
export const getService = createAction(GET_SERVICE);

export default {
  getServices,
  getService,
};
