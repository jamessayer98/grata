import { takeLatest } from "redux-saga/effects";
import { GET_OFFERS, GET_OFFER, EDIT_OFFER, ADD_OFFER } from "../constants";
import apiCall from "../../utils/apiCall";

const getOffers = apiCall({
  type: GET_OFFERS,
  method: "get",
  path: "/offers",
});

const getCustomOffers = apiCall({
  type: GET_OFFER,
  method: "get",
  path: ({ id }) => `/offers/${id}`,
});

const addOffer = apiCall({
  type: ADD_OFFER,
  method: "post",
  path: "/offers",
});

const editOffer = apiCall({
  type: EDIT_OFFER,
  method: "put",
  path: ({ id }) => `/offers/${id}`,
});

export default function* offersSaga() {
  yield takeLatest(GET_OFFERS, getOffers);
  yield takeLatest(GET_OFFER, getCustomOffers);
  yield takeLatest(EDIT_OFFER, editOffer);
  yield takeLatest(ADD_OFFER, addOffer);
}
