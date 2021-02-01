import { takeLatest } from "redux-saga/effects";
import { GET_OFFERS } from "../constants";
import apiCall from "../../utils/apiCall";

const getOffers = apiCall({
  type: "GET_OFFERS",
  method: "get",
  path: "/offers",
});

export default function* offersSaga() {
  yield takeLatest(GET_OFFERS, getOffers);
}
