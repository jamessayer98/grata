import { createReducer } from "@reduxjs/toolkit";
import {
  LOG_IN,
  LOG_OUT,
  FETCH_REFRESH_TOKEN,
  SET_ID_TOKEN,
  SET_REFRESH_TOKEN,
  SET_IS_LOGGED_IN,
} from "../constants";
import { requestSuccess, requestFail } from "../../utils/status";

const initialState = {
  isLoggedIn: false,
  refreshToken: null,
  idToken: null,
};

export default createReducer(initialState, {
  [requestSuccess(LOG_IN)]: (state, { payload }) => {
    localStorage.setItem("idToken", payload.idToken);
    localStorage.setItem("refreshToken", payload.refreshToken);

    return {
      ...state,
      idToken: { idToken: payload.idToken },
      refreshToken: { refreshToken: payload.refreshToken },
      isLoggedIn: true,
    };
  },

  [requestSuccess(FETCH_REFRESH_TOKEN)]: (state, { payload }) => {
    return {
      ...state,
      idToken: payload,
    };
  },

  [requestFail(FETCH_REFRESH_TOKEN)]: (state, { payload }) => ({
    ...state,
    idToken: null,
  }),

  [SET_ID_TOKEN]: (state, { payload }) => ({
    ...state,
    idToken: payload,
  }),

  [SET_REFRESH_TOKEN]: (state, { payload }) => ({
    ...state,
    refreshToken: payload,
  }),

  [SET_IS_LOGGED_IN]: (state, { payload }) => ({
    ...state,
    isLoggedIn: payload,
  }),

  [LOG_OUT]: (state) => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("refreshToken");

    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
