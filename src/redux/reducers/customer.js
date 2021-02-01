import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  REMOVE_CUSTOMER,
  GET_CUSTOMERS,
  GET_CUSTOMER,
  FILTER_CUSTOMERS,
} from "../constants";
import { requestSuccess, requestFail, requestPending } from "../../utils/status";

const initialState = {
  customers: [],
  customer: {},
  status: "INIT",
  error: null,
};

export default createReducer(initialState, {
  [GET_CUSTOMER]: (state, { payload }) => ({
    ...state,
    customer: payload,
  }),

  [FILTER_CUSTOMERS]: (state, { payload }) => ({
    ...state,
    customers: payload,
  }),

  [requestSuccess(ADD_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(ADD_CUSTOMER),
    error: null,
  }),

  [requestPending(ADD_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestPending(ADD_CUSTOMER),
    error: null,
  }),

  [requestFail(ADD_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(ADD_CUSTOMER),
    error: payload.error,
  }),

  [requestSuccess(GET_CUSTOMERS)]: (state, { payload }) => ({
    ...state,
    customers: payload,
    status: requestSuccess(GET_CUSTOMERS),
    error: null,
  }),

  [requestPending(GET_CUSTOMERS)]: (state, { payload }) => ({
    ...state,
    customers: [],
    status: requestPending(GET_CUSTOMERS),
    error: null,
  }),

  [requestFail(GET_CUSTOMERS)]: (state, { payload }) => ({
    ...state,
    customers: [],
    status: requestFail(GET_CUSTOMERS),
    error: payload.error,
  }),

  [requestSuccess(REMOVE_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(REMOVE_CUSTOMER),
    error: null,
  }),

  [requestPending(REMOVE_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestPending(REMOVE_CUSTOMER),
    error: null,
  }),

  [requestFail(REMOVE_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(REMOVE_CUSTOMER),
    error: payload.error,
  }),

  [requestSuccess(EDIT_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(EDIT_CUSTOMER),
    error: null,
  }),

  [requestPending(EDIT_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestPending(EDIT_CUSTOMER),
    error: null,
  }),

  [requestFail(EDIT_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(EDIT_CUSTOMER),
    error: payload.error,
  }),
});
