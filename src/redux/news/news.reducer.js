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

      if (state.length) {
        const index = state.find("id");
        state.splice(index, 1);
      } else {
        return state;
      }


    default:
      return state;
  }
};
