import { newsActionTypes } from "./news.types";

export const newsReducer = (state = null, action) => {
  switch (action.type) {
    case newsActionTypes.FIREBASE_NEWS:
      return Object.assign({}, state, action.payload);

    case newsActionTypes.DELETE_NEWS_ITEM:
      const deleteID = action.id;
      delete state[deleteID];
      return Object.assign({}, state);

    default:
      return state;
  }
};
