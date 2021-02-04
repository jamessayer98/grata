import { all } from "redux-saga/effects";
import user from "./user";
import auth from "./auth";
import services from "./services";
import customer from "./customer";
import building from "./building";
import unit from "./unit";
import amenities from "./amenities";
import offers from "./offers";
import bookings from "./bookings";

export default function* rootSaga() {
  yield all([
    user(),
    auth(),
    services(),
    customer(),
    building(),
    unit(),
    amenities(),
    offers(),
    bookings(),
  ]);
}
