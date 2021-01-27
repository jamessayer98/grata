import { createAction } from "redux-actions";
import { LOG_IN, LOG_OUT, SET_IS_LOGGED_IN } from "../constants";

export const login = createAction(LOG_IN);
export const logout = createAction(LOG_OUT);
export const setIsLoggedIn = createAction(SET_IS_LOGGED_IN);

export default {
  login,
  logout,
  setIsLoggedIn,
};
