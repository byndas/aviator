import { galleryActionTypes } from "./gallery.types";

export const setGallery = galleryObj => ({
  type: galleryActionTypes.SET_GALLERY_ID,
  payload: galleryObj
});

// export const createGallery = galleryObj => ({
//   type: CREATE_GALLERY,
//   payload: galleryObj
// });

// export const editGallery = galleryObj => ({
//   type: EDIT_GALLERY,
//   payload: galleryObj
// });

// export const deleteGallery = galleryObj => ({
//   type: DELETE_GALLERY,
//   payload: galleryObj
// });
