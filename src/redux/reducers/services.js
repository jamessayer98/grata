import { createReducer } from "@reduxjs/toolkit";
import { GET_SERVICES } from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  servicesList: [],
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
});
