import { createReducer } from "@reduxjs/toolkit";
import {
  GET_UNIT,
  GET_ALLUNITS,
  GET_CUSTOMUNITS,
  REMOVE_UNIT,
  EDIT_UNIT,
  ADD_UNIT,
} from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  units: [],
  unit: {},
  status: "INIT",
  params: {
    page: 1,
  },
  error: null,
};

export default createReducer(initialState, {
  [GET_UNIT]: (state, { payload }) => ({
    ...state,
    unit: payload,
  }),

  [requestSuccess(GET_ALLUNITS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_ALLUNITS),
    error: null,
  }),

  [requestFail(GET_ALLUNITS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_ALLUNITS),
    error: payload.error,
  }),

  [requestSuccess(ADD_UNIT)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(ADD_UNIT),
    error: null,
  }),

  [requestFail(ADD_UNIT)]: (state, { payload }) => ({
    ...state,
    status: requestFail(ADD_UNIT),
    error: payload.error,
  }),

  [requestSuccess(EDIT_UNIT)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(EDIT_UNIT),
    error: null,
  }),

  [requestFail(EDIT_UNIT)]: (state, { payload }) => ({
    ...state,
    status: requestFail(EDIT_UNIT),
    error: payload.error,
  }),

  [requestSuccess(REMOVE_UNIT)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(REMOVE_UNIT),
    error: null,
  }),

  [requestFail(REMOVE_UNIT)]: (state, { payload }) => ({
    ...state,
    status: requestFail(REMOVE_UNIT),
    error: payload.error,
  }),

  [requestSuccess(GET_CUSTOMUNITS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_CUSTOMUNITS),
    units: payload,
    error: null,
  }),

  [requestFail(GET_CUSTOMUNITS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_CUSTOMUNITS),
    units: [],
    error: payload.error,
  }),
});
