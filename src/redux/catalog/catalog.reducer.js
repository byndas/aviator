import { catalogActionTypes } from "./catalog.types";

export const catalogReducer = (state = null, action) => {
  switch (action.type) {
    case catalogActionTypes.FIREBASE_CATALOG:
      return Object.assign({}, state, action.payload);

    case catalogActionTypes.DELETE_CATALOG_ITEM:
      const deleteID = action.id;
      delete state[deleteID];
      return Object.assign({}, state);

    default:
      return state;
  }
};
