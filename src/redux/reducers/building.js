import { createReducer } from "@reduxjs/toolkit";
import {
  GET_BUILDING,
  ADD_BUILDING,
  EDIT_BUILDING,
  GET_ALLBUILDINGS,
  GET_CUSTOMBUILDINGS,
} from "../constants";
import { requestSuccess, requestFail, requestPending } from "../../utils/status";

const initialState = {
  buildings: [],
  building: {},
  status: "INIT",
  errors: null,
};

export default createReducer(initialState, {
  [GET_BUILDING]: (state, { payload }) => ({
    ...state,
    building: payload,
  }),

  [requestSuccess(ADD_BUILDING)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(ADD_BUILDING),
  }),

  [requestFail(ADD_BUILDING)]: (state, { payload }) => ({
    ...state,
    status: requestFail(ADD_BUILDING),
    error: null,
  }),

  [requestSuccess(EDIT_BUILDING)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(ADD_BUILDING),
  }),

  [requestFail(EDIT_BUILDING)]: (state, { payload }) => ({
    ...state,
    status: requestPending(GET_BUILDING),
    error: null,
  }),

  [requestSuccess(GET_ALLBUILDINGS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_ALLBUILDINGS),
    buildings: payload,
  }),

  [requestFail(GET_ALLBUILDINGS)]: (state, { payload }) => ({
    ...state,
    status: requestPending(GET_ALLBUILDINGS),
    error: null,
  }),

  [requestSuccess(GET_CUSTOMBUILDINGS)]: (state, { payload }) => ({
    ...state,
    buildings: payload,
    status: requestSuccess(GET_CUSTOMBUILDINGS),
  }),

  [requestFail(GET_CUSTOMBUILDINGS)]: (state, { payload }) => ({
    ...state,
    buildings: payload,
    status: requestPending(GET_CUSTOMBUILDINGS),
    error: null,
  }),
});
