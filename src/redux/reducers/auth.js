import { createReducer } from "@reduxjs/toolkit";
import { LOG_IN, LOG_OUT, SET_IS_LOGGED_IN, SET_ROLE_ID } from "../constants";
import { requestSuccess } from "../../utils/status";

const initialState = {
  isLoggedIn: false,
  orgId: null,
  roleId: null,
};

export default createReducer(initialState, {
  [requestSuccess(LOG_IN)]: (state, { payload }) => {
    localStorage.setItem("idToken", payload.idToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
    localStorage.setItem("orgId", payload.orgId);
    localStorage.setItem("roleId", payload.roleId);
    localStorage.setItem("firstname", payload.firstname);
    localStorage.setItem("lastname", payload.lastname);

    return {
      ...state,
      isLoggedIn: true,
    };
  },

  [SET_IS_LOGGED_IN]: (state, { payload }) => ({
    ...state,
    isLoggedIn: payload,
  }),

  [SET_ROLE_ID]: (state, { payload }) => ({
    ...state,
    roleId: payload,
  }),

  [LOG_OUT]: (state) => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("orgId");
    localStorage.removeItem("roleId");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");

    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
