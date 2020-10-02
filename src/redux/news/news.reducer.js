import { newsActionTypes } from "./news.types";

export const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case newsActionTypes.CREATE_NEWS_ITEM:
      return {
        ...state,
        id: action.payload
      };
    case newsActionTypes.EDIT_NEWS_ITEM:
      return {
        ...state,
        id: action.payload
      };
    // const index = state.news.find("id");
    // return {
    //   ...state,
    //   id: action.payload
    // };
    case newsActionTypes.DELETE_NEWS:
      console.log("00000000", state.news);

      const index = state.news.find("id");
      state.news.splice(index, 1);

      return {
        ...state,
        id: action.payload
      };

    default:
      return state;
  }
};
