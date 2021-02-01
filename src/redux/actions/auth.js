import { createAction } from "@reduxjs/toolkit";
import { LOG_IN, LOG_OUT, SET_IS_LOGGED_IN, SET_ROLE_ID } from "../constants";

export const login = createAction(LOG_IN);
export const logout = createAction(LOG_OUT);
export const setIsLoggedIn = createAction(SET_IS_LOGGED_IN);
export const setRoleId = createAction(SET_ROLE_ID);

export default {
  login,
  logout,
  setIsLoggedIn,
  setRoleId,
};
