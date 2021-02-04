import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import {
  CForm,
  CFormGroup,
  CCardGroup,
  CContainer,
  CRow,
  CCol,
  CInputGroup,
  CSelect,
  CInvalidFeedback,
  CLabel,
  CInput,
  CButton,
  CCardHeader,
  CCardBody,
  CCard,
  CCardTitle,
} from "@coreui/react";

import * as Yup from "yup";

const AddBooking = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = function (values) {
    return Yup.object().shape({});
  };

  return <>Add Booking</>;
};

export default AddBooking;
