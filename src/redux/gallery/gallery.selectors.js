import { createSelector } from "reselect";

// input selector
const selectGallery = state => state.gallery;

// output selector
export const selectGalleryItems = createSelector(
  [selectGallery],
  gallery => gallery.items
);
// output selector
export const searchGalleryItems = createSelector(
  [selectGalleryItems]
  //   items => items.filter();
);
