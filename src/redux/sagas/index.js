import { all } from "redux-saga/effects";
import user from "./user";
import auth from "./auth";
import services from "./services";

export default function* rootSaga() {
  yield all([user(), auth(), services()]);
}
