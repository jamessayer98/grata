import { createAction } from "@reduxjs/toolkit";
import { GET_OFFERS, FILTER_OFFERS, GET_OFFER, ADD_OFFER, EDIT_OFFER } from "../constants";

export const getOffers = createAction(GET_OFFERS);
export const getOffer = createAction(GET_OFFER);
export const addOffer = createAction(ADD_OFFER);
export const editOffer = createAction(EDIT_OFFER);
export const filterOffers = createAction(FILTER_OFFERS);

export default {
  getOffers,
  getOffer,
  filterOffers,
  addOffer,
  editOffer,
};
