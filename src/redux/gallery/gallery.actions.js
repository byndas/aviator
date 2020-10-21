import { galleryActionTypes } from "./gallery.types";

export const firebaseGallery = data => ({
  type: galleryActionTypes.FIREBASE_GALLERY,
  payload: data
});

export const deleteGalleryItem = id => ({
  type: galleryActionTypes.DELETE_GALLERY_ITEM,
  id: id
});
