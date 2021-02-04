import { createReducer } from "@reduxjs/toolkit";
import {
  FILTER_AMENITIES,
  GET_AMENITY,
  GET_AMENITIES,
  ADD_AMENITIES,
  EDIT_AMENITIES,
  GET_BUILDING_AMENITIES,
} from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  amenities: [],
  amenity: {},
  status: "INIT",
  errors: null,
};

export default createReducer(initialState, {
  [FILTER_AMENITIES]: (state, { payload }) => ({
    ...state,
    amenities: payload,
  }),

  [GET_AMENITY]: (state, { payload }) => ({
    ...state,
    amenity: payload,
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

  [requestSuccess(GET_BUILDING_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_AMENITIES),
    error: null,
    amenities: payload,
  }),

  [requestFail(GET_BUILDING_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_AMENITIES),
  }),

  [requestSuccess(ADD_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(ADD_AMENITIES),
    error: null,
  }),

  [requestFail(ADD_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestFail(ADD_AMENITIES),
    error: payload.error,
  }),

  [requestSuccess(EDIT_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(EDIT_AMENITIES),
    error: null,
  }),

  [requestFail(EDIT_AMENITIES)]: (state, { payload }) => ({
    ...state,
    status: requestFail(EDIT_AMENITIES),
    error: payload.error,
  }),
});
