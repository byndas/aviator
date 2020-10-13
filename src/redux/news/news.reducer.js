import { newsActionTypes } from "./news.types";

export const newsReducer = (state = null, action) => {
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
      // UPDATES POST ID'S DATA OBJECT
      state[updateID] = state[updatePost];
      console.log("REDUX news STATE", state);
      return Object.assign({}, state);

    default:
      return state;
  }
};
