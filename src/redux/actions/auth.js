import { createAction } from "redux-actions";
import {
  LOG_IN,
  LOG_OUT,
  SET_REFRESH_TOKEN,
  SET_ID_TOKEN,
  SET_IS_LOGGED_IN,
  FETCH_REFRESH_TOKEN,
} from "../constants";

export const login = createAction(LOG_IN);
export const logout = createAction(LOG_OUT);
export const fetchRefreshToken = createAction(FETCH_REFRESH_TOKEN);
export const setRefreshToken = createAction(SET_REFRESH_TOKEN);
export const setIdToken = createAction(SET_ID_TOKEN);
export const setIsLoggedIn = createAction(SET_IS_LOGGED_IN);

export default {
  login,
  logout,
  fetchRefreshToken,
  setRefreshToken,
  setIdToken,
  setIsLoggedIn,
};
