import { createAction } from "@reduxjs/toolkit";
import { GET_OFFERS, FILTER_OFFERS } from "../constants";

export const getOffers = createAction(GET_OFFERS);
export const filterOffers = createAction(FILTER_OFFERS);

export default {
  getOffers,
  filterOffers,
};
