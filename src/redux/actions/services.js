import { createAction } from "redux-actions";
import {
  GET_SERVICE,
  GET_SERVICES,
  ADD_COMMENT,
  GET_COMMENT_ID,
} from "../constants";

export const getServices = createAction(GET_SERVICES);
export const getService = createAction(GET_SERVICE);
export const addComment = createAction(ADD_COMMENT);
export const getCommentId = createAction(GET_COMMENT_ID);

export default {
  getServices,
  getService,
  addComment,
  getCommentId,
};
