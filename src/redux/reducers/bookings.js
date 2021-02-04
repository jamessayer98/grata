import { createReducer } from "@reduxjs/toolkit";
import {
  GET_BOOKINGS,
  ADD_BOOKING,
  EDIT_BOOKING,
  GET_BOOKING,
  FILTER_BOOKINGS,
} from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  bookings: [],
  booking: {},
  status: "INIT",
  errors: null,
};

export default createReducer(initialState, {
  [FILTER_BOOKINGS]: (state, { payload }) => ({
    ...state,
    bookings: payload,
  }),

  [requestSuccess(ADD_BOOKING)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(ADD_BOOKING),
  }),

  [requestFail(ADD_BOOKING)]: (state, { payload }) => ({
    ...state,
    status: requestFail(ADD_BOOKING),
  }),

  [requestSuccess(GET_BOOKINGS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_BOOKINGS),
    bookings: payload,
  }),

  [requestFail(GET_BOOKINGS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_BOOKINGS),
    bookings: [],
  }),

  [requestSuccess(GET_BOOKING)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_BOOKING),
    booking: payload,
  }),

  [requestFail(GET_BOOKING)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_BOOKING),
    booking: {},
  }),

  [requestSuccess(EDIT_BOOKING)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(EDIT_BOOKING),
  }),

  [requestFail(EDIT_BOOKING)]: (state, { payload }) => ({
    ...state,
    status: requestFail(EDIT_BOOKING),
  }),
});
