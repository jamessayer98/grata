import { createReducer } from "@reduxjs/toolkit";
import { GET_SERVICES, GET_SERVICE } from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  servicesList: [],
  service: {},
  comments: [],
};

export default createReducer(initialState, {
  [requestSuccess(GET_SERVICES)]: (state, { payload }) => ({
    ...state,
    servicesList: payload,
  }),

  [requestFail(GET_SERVICES)]: (state, { payload }) => ({
    ...state,
    servicesList: [],
  }),

  [requestSuccess(GET_SERVICE)]: (state, { payload }) => ({
    ...state,
    service: payload,
    comments: payload.comments,
  }),

  [requestFail(GET_SERVICES)]: (state, { payload }) => ({
    ...state,
    service: {},
    comments: [],
  }),
});
