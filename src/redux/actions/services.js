import { createAction } from "redux-actions";
import {
  GET_SERVICE,
  GET_SERVICES,
  ADD_COMMENT,
  GET_COMMENT_ID,
  ADD_COMMENT_DYNAMIC,
} from "../constants";

export const getServices = createAction(GET_SERVICES);
export const getService = createAction(GET_SERVICE);
export const addComment = createAction(ADD_COMMENT);
export const getCommentId = createAction(GET_COMMENT_ID);
export const addCommentDynamic = createAction(ADD_COMMENT_DYNAMIC);

export default {
  getServices,
  getService,
  addComment,
  getCommentId,
  addCommentDynamic,
};
