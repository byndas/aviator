import { newsActionTypes } from "./news.types";

export const newsReducer = (state = {}, action) => {

  switch (action.type) {
    case newsActionTypes.FIREBASE_NEWS:
      return Object.assign({}, state, action.payload);

    case newsActionTypes.DELETE_NEWS:
      const deleteID = action.id;
      delete state[deleteID];
      return Object.assign({}, state);

    case newsActionTypes.EDIT_NEWS:
      console.log("REDUX STATE", state);
      console.log("action.id", action.id);
      console.log("action.payload", action.payload);

      const updateID = action.id;
      const updatePost = action.payload;
      // UPDATES POST ID DATA OBJECT
      state[updateID] = updatePost;

      console.log("REDUX news STATE", state);
      return Object.assign({}, state);

    case newsActionTypes.EDIT_POST:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
