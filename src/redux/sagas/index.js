import { all } from "redux-saga/effects";
import user from "./user";
import auth from "./auth";

export default function* rootSaga() {
  yield all([user(), auth()]);
}
