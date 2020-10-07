import { newsActionTypes } from "./news.types";

export const stateNews = data => ({
  type: newsActionTypes.FIREBASE_NEWS,
  payload: data
});

export const deleteNews = id => ({
  type: newsActionTypes.DELETE_NEWS,
  payload: id
});

export const editNews = data => ({
  type: newsActionTypes.EDIT_NEWS,
  payload: data
});
