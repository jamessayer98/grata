import { all } from "redux-saga/effects";
import user from "./user";
import auth from "./auth";
import services from "./services";
import customer from "./customer";
import building from "./building";
import unit from "./unit";

export default function* rootSaga() {
  yield all([user(), auth(), services(), customer(), building(), unit()]);
}
