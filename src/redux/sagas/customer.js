import { takeLatest } from "redux-saga/effects";
import {
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  REMOVE_CUSTOMER,
  GET_CUSTOMERS,
} from "../constants";
import apiCall from "../../utils/apiCall";

const addCustomer = apiCall({
  type: ADD_CUSTOMER,
  method: "post",
  path: "/orgs",
});

const editCustomer = apiCall({
  type: EDIT_CUSTOMER,
  method: "put",
  path: ({ id }) => `/orgs/${id}`,
});

const getCustomers = apiCall({
  type: GET_CUSTOMERS,
  method: "get",
  path: "/orgs",
});

const removeCustomer = apiCall({
  type: REMOVE_CUSTOMER,
  method: "delete",
  path: ({ id }) => `/orgs/${id}`,
});

export default function* customerSaga() {
  yield takeLatest(ADD_CUSTOMER, addCustomer);
  yield takeLatest(EDIT_CUSTOMER, editCustomer);
  yield takeLatest(GET_CUSTOMERS, getCustomers);
  yield takeLatest(REMOVE_CUSTOMER, removeCustomer);
}
