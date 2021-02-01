import { createReducer } from "@reduxjs/toolkit";
import { FILTER_AMENITIES, GET_AMENITIES } from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  amenities: [],
  status: "INIT",
  errors: null,
};

export default createReducer(initialState, {
  [FILTER_AMENITIES]: (state, { payload }) => ({
    ...state,
    amenities: payload,
  }),

  [requestSuccess(GET_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_AMENITIES),
    error: null,
    amenities: payload,
  }),

  [requestFail(GET_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_AMENITIES),
  }),
});
