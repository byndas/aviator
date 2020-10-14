import { newsActionTypes } from "./news.types";

export const firebaseNews = data => ({
  type: newsActionTypes.FIREBASE_NEWS,
  payload: data
});

export const deleteNews = id => ({
  type: newsActionTypes.DELETE_NEWS,
  id: id
});

export const editNews = data => ({
  type: newsActionTypes.EDIT_NEWS,
  payload: data
});
