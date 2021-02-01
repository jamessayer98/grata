import { createReducer } from "@reduxjs/toolkit";
import {
  GET_SERVICES,
  GET_SERVICE,
  ADD_COMMENT,
  GET_COMMENT_ID,
  ADD_COMMENT_DYNAMIC,
  FILTER_SERVICES,
} from "../constants";
import { requestSuccess, requestPending, requestFail } from "../../utils/status";

const initialState = {
  servicesList: [],
  service: {},
  comments: [],
  commentId: null,
};

export default createReducer(initialState, {
  [GET_COMMENT_ID]: (state, { payload }) => ({
    ...state,
    commentId: payload,
  }),

  [FILTER_SERVICES]: (state, { payload }) => ({
    ...state,
    servicesList: payload,
  }),

  [ADD_COMMENT_DYNAMIC]: (state, { payload }) => {
    const date = new Date().toISOString();

    return {
      ...state,
      comments: [
        ...state.comments,
        {
          first_name: localStorage.getItem("firstname"),
          last_name: localStorage.getItem("lastname"),
          create_date: date,
          comment: payload,
        },
      ],
    };
  },

  [requestSuccess(GET_SERVICES)]: (state, { payload }) => ({
    ...state,
    servicesList: payload,
  }),

  [requestFail(GET_SERVICES)]: (state, { payload }) => ({
    ...state,
    servicesList: [],
  }),

  [requestSuccess(GET_SERVICE)]: (state, { payload }) => ({
    ...state,
    service: payload,
    comments: payload.comments,
  }),

  [requestPending(GET_SERVICE)]: (state, { payload }) => ({
    ...state,
    comments: [],
  }),

  [requestFail(GET_SERVICES)]: (state, { payload }) => ({
    ...state,
    service: {},
    comments: [],
  }),

  [requestSuccess(ADD_COMMENT)]: (state, { payload }) => ({
    ...state,
  }),

  [requestFail(ADD_COMMENT)]: (state, { payload }) => ({
    ...state,
  }),
});
