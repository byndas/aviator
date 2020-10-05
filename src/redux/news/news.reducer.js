import { newsActionTypes } from "./news.types";

export const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case newsActionTypes.CREATE_NEWS:
      return {
        ...state,
        id: action.payload
      };

    case newsActionTypes.DELETE_NEWS:
      console.log("ewoughregiuhergiuhreguh!~~~~~~~", state);

      if (state) {
        const index = state.news.find("id");
        state.news.splice(index, 1);
      }
      return state.news;

    default:
      return state;
  }
};
