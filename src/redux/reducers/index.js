import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import window from "./window";
import user from "./user";
import services from "./services";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    window,
    user,
    services,
  });
