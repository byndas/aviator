import { createSelector } from "reselect";

const selectSite = state => state.site;

export const selectCollections = createSelector(
  [selectSite],
  site => site.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectSite],
  site => site.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectSite],
  site => !!site.collections
);
