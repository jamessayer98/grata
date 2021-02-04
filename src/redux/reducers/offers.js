import { createReducer } from "@reduxjs/toolkit";
import { ADD_OFFER, EDIT_OFFER, GET_OFFERS, FILTER_OFFERS, GET_OFFER } from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  offers: [],
  offer: {},
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
    offers: payload,
    error: null,
  }),

  [requestFail(GET_OFFERS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_OFFERS),
    offers: [],
    error: payload.error,
  }),

  [requestSuccess(GET_OFFER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(GET_OFFER),
    offer: payload,
    error: null,
  }),

  [requestFail(GET_OFFER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(GET_OFFER),
    offer: {},
    error: payload.error,
  }),

  [requestSuccess(ADD_OFFER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(ADD_OFFER),
    error: null,
  }),

  [requestFail(ADD_OFFER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(ADD_OFFER),
    error: payload.error,
  }),

  [requestSuccess(EDIT_OFFER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(EDIT_OFFER),
    error: null,
  }),

  [requestFail(EDIT_OFFER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(EDIT_OFFER),
    error: payload.error,
  }),
});
