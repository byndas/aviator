import { newsActionTypes } from "./news.types";

export const newsReducer = (state = null, action) => {
  switch (action.type) {
    case newsActionTypes.CREATE_NEWS:
      console.log("reduxNews payload: ", action.payload);
      return Object.assign({}, state, action.payload);
    // case newsActionTypes.CREATE_NEWS:
    //   return {
    //     ...state,
    //     id: action.payload
    //   };
    case newsActionTypes.DELETE_NEWS:
      console.log("STATE.LENGTH: ", state.length);
      if (state) {
        console.log("state id: ", state.find("id"));
        const index = state.find("id");
        state.splice(index, 1);
        return state;
      }
    default:
      return state;
  }
};
