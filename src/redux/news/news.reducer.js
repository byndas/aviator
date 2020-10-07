import { newsActionTypes } from "./news.types";

export const newsReducer = (state = null, action) => {
  if (state !== null) {
    console.log("action.payload: ", action.payload);
  }
  switch (action.type) {
    case newsActionTypes.FIREBASE_NEWS:
      return Object.assign({}, state, action.payload);

    case newsActionTypes.DELETE_NEWS:
      console.log(
        "delete post index: ",
        action
        // state.findIndex(obj => obj[0] === action[0])
      );
      // state.splice(
      //   state.findIndex(obj => obj[0] === action[0]),
      //   1
      // );
      return state;

    case newsActionTypes.EDIT_NEWS:
      state.splice(
        state.findIndex(obj => obj[0] === action[0]),
        1,
        action.payload
      );
      return state;

    default:
      return state;
  }
};
