import { createReducer } from "@reduxjs/toolkit";
import { GET_COUNTRY, GET_STATE } from "../constants";

const initialState = {
  country: "",
  state: [],
};

export default createReducer(initialState, {
  [GET_COUNTRY]: (state, { payload }) => ({
    ...state,
    country: payload,
  }),

  [GET_STATE]: (state, { payload }) => ({
    ...state,
    state: payload,
  }),
});
