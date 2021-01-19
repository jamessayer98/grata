import { createAction } from "redux-actions";
import {
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  REMOVE_CUSTOMER,
  GET_CUSTOMERS,
  GET_CUSTOMER,
} from "../constants";

export const addCustomer = createAction(ADD_CUSTOMER);
export const editCustomer = createAction(EDIT_CUSTOMER);
export const removeCustomer = createAction(REMOVE_CUSTOMER);
export const getCustomers = createAction(GET_CUSTOMERS);
export const getCustomer = createAction(GET_CUSTOMER);

export default {
  addCustomer,
  editCustomer,
  removeCustomer,
  getCustomers,
  getCustomer,
};
