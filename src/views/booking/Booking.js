import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditBooking from "./EditBooking";
import CIcon from "@coreui/icons-react";

const Booking = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bookings } = useSelector((state) => state.bookings);
  const [handleBookingsModal, setHandleBookingsModal] = useState(false);

  const fields = [
    { key: "index", _style: { width: "10%" } },
    { key: "name", _style: { width: "10% " } },
  ];

  return <>Booking</>;
};

export default Booking;
