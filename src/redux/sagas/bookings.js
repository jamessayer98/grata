import { takeLatest } from "redux-saga/effects";
import { ADD_BOOKING, EDIT_BOOKING, GET_BOOKINGS, GET_BOOKING } from "../constants";
import apiCall from "../../utils/apiCall";

const addBooking = apiCall({
  type: ADD_BOOKING,
  method: "post",
  path: "/bookings",
});

const editBooking = apiCall({
  type: EDIT_BOOKING,
  path: ({ id }) => `/bookings/${id}`,
});

const getBooking = apiCall({
  type: GET_BOOKING,
  path: ({ id }) => `/bookings/${id}`,
});

const getBookings = apiCall({
  type: GET_BOOKINGS,
  method: "get",
  path: "/bookings",
});

export default function* bookingsSaga() {
  yield takeLatest(ADD_BOOKING, addBooking);
  yield takeLatest(EDIT_BOOKING, editBooking);
  yield takeLatest(GET_BOOKING, getBookings);
  yield takeLatest(GET_BOOKING, getBooking);
}
