import { galleryActionTypes } from "./gallery.types";

export const galleryReducer = (state = {}, action) => {
  switch (action.type) {
    case galleryActionTypes.CREATE_GALLERY_ID:
      return {
        ...state,
        id: action.payload
      };
    case galleryActionTypes.EDIT_GALLERY_ID:
      return {
        ...state,
        id: action.payload
      };
    case galleryActionTypes.DELETE_GALLERY_ID:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
