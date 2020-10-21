import { newsActionTypes } from "./news.types";

export const firebaseNews = data => ({
  type: newsActionTypes.FIREBASE_NEWS,
  payload: data
});

export const deleteNewsItem = id => ({
  type: newsActionTypes.DELETE_NEWS_ITEM,
  id: id
});
