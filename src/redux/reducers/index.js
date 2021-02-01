import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import window from "./window";
import user from "./user";
import services from "./services";
import customer from "./customer";
import building from "./building";
import unit from "./unit";
import country from "./country";
import amenities from "./amenities";
import offers from "./offers";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    window,
    user,
    services,
    customer,
    building,
    unit,
    country,
    amenities,
    offers,
  });
