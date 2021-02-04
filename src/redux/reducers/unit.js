import { createReducer } from "@reduxjs/toolkit";
import { GET_UNIT, GET_UNITS, REMOVE_UNIT, EDIT_UNIT, ADD_UNIT } from "../constants";
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

  [requestSuccess(GET_UNITS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_UNITS),
    units: payload,
    error: null,
  }),

  [requestFail(GET_UNITS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_UNITS),
    units: [],
    error: payload.error,
  }),
});
