import { galleryActionTypes } from "./gallery.types";

export const createGallery = data => ({
  type: galleryActionTypes.CREATE_GALLERY,
  payload: data
});

export const editGallery = data => ({
  type: galleryActionTypes.EDIT_GALLERY,
  payload: data
});

export const deleteGallery = data => ({
  type: galleryActionTypes.DELETE_GALLERY,
  payload: data
});
