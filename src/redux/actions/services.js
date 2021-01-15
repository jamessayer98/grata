import { createAction } from "redux-actions";
import { GET_SERVICES } from "../constants";

export const getServices = createAction(GET_SERVICES);

export default {
  getServices,
};
