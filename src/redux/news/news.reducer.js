import { newsActionTypes } from "./news.types";

const INITIAL_STATE = null;

export const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case newsActionTypes.FIREBASE_NEWS:
      return Object.assign({}, state, action.payload);

    case newsActionTypes.DELETE_NEWS:
      const deleteID = action.id;
      delete state[deleteID];
      return Object.assign({}, state);

    case newsActionTypes.EDIT_NEWS:
      const updateID = action.id;
      const updatePost = action.payload;
      // UPDATES POST ID'S OBJECT
      state[updateID] = state[updatePost];
      console.log("REDUX news STATE", state);
      return Object.assign({}, state);

    case newsActionTypes.EDIT_POST:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
