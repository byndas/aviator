import { newsActionTypes } from "./news.types";

export const NEWS_DATA = "NEWS_DATA";

export const storeNews = data => {
  return {
    type: NEWS_DATA,
    payload: data
  };
};

// export const setNews = newsObj => ({
//   type: SET_NEWS_ITEM,
//   payload: newsObj
// });

// export const createNews = newsObj => ({
//   type: CREATE_NEWS,
//   payload: newsObj
// });

// export const editNews = newsObj => ({
//   type: EDIT_NEWS,
//   payload: newsObj
// });

// export const deleteNews = newsObj => ({
//   type: DELETE_NEWS,
//   payload: newsObj
// });
