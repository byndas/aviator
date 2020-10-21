import { galleryActionTypes } from "./gallery.types";

export const galleryReducer = (state = null, action) => {
  switch (action.type) {
    case galleryActionTypes.FIREBASE_GALLERY:
      return Object.assign({}, state, action.payload);

    case galleryActionTypes.DELETE_GALLERY_ITEM:
      const deleteID = action.id;
      delete state[deleteID];
      return Object.assign({}, state);
    default:
      return state;
  }
};
