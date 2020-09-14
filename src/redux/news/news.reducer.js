import { newsActionTypes } from "./news.types";

const INITIAL_STATE = {
  newsItem: null
};

export const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case newsActionTypes.SET_NEWS_ITEM:
      return {
        ...state,
        newsItem: action.payload
      };
    default:
      return state;
  }
};
