import { createReducer } from "@reduxjs/toolkit";
import { GET_OFFERS, FILTER_OFFERS } from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  offers: [],
  status: "INIT",
  error: null,
};

export default createReducer(initialState, {
  [FILTER_OFFERS]: (state, { payload }) => ({
    ...state,
    offers: payload,
  }),

  [requestSuccess(GET_OFFERS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_OFFERS),
    error: null,
  }),

  [requestFail(GET_OFFERS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_OFFERS),
    error: payload.error,
  }),
});
