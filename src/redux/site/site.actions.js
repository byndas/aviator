import SiteActionTypes from "./site.types";

export const updateCollections = collectionsMap => ({
  type: SiteActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
