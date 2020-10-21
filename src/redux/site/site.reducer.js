import { FIREBASE_DATA } from "./site.actions";

export const siteReducer = (state = null, action) => {
  switch (action.type) {
    case FIREBASE_DATA:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
