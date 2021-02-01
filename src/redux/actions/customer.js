import { createAction } from "@reduxjs/toolkit";
import {
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  REMOVE_CUSTOMER,
  GET_CUSTOMERS,
  GET_CUSTOMER,
  FILTER_CUSTOMERS,
} from "../constants";

export const addCustomer = createAction(ADD_CUSTOMER);
export const editCustomer = createAction(EDIT_CUSTOMER);
export const removeCustomer = createAction(REMOVE_CUSTOMER);
export const getCustomers = createAction(GET_CUSTOMERS);
export const getCustomer = createAction(GET_CUSTOMER);
export const filterCustomers = createAction(FILTER_CUSTOMERS);

export default {
  addCustomer,
  editCustomer,
  removeCustomer,
  getCustomers,
  getCustomer,
  filterCustomers,
};
