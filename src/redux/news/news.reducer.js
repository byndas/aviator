import { newsActionTypes } from "./news.types";
import { REMOVE_NEWS } from "./news.actions";

const INITIAL_STATE = {
  newsItem: null
};

export const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMOVE_NEWS:
      console.log("ewoughregiuhergiuhreguh!~~~~~~~", state);
    // const index = siteData.state.news.find('id')
    // siteData.state.news.splice(index, 1)
    // return sideData.state.news
    // case newsActionTypes.SET_NEWS_ITEM:
    //   return {
    //     ...state,
    //     newsItem: action.payload
    //   };
    default:
      return state;
  }
};
