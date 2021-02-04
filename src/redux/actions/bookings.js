import { createAction } from "@reduxjs/toolkit";
import {
  ADD_BOOKING,
  EDIT_BOOKING,
  GET_BOOKINGS,
  GET_BOOKING,
  FILTER_BOOKINGS,
} from "../constants";

export const addBooking = createAction(ADD_BOOKING);
export const editBooking = createAction(EDIT_BOOKING);
export const getBookings = createAction(GET_BOOKINGS);
export const getBooking = createAction(GET_BOOKING);
export const filterBookings = createAction(FILTER_BOOKINGS);

export default {
  addBooking,
  editBooking,
  getBookings,
  getBooking,
  filterBookings,
};
