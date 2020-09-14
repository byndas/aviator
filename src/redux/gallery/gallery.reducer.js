import { galleryActionTypes } from "./gallery.types";

const INITIAL_STATE = {
  galleryId: null
};

export const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case galleryActionTypes.SET_GALLERY_ID:
      return {
        ...state,
        galleryId: action.payload
      };
    default:
      return state;
  }
};
