// import SiteActionTypes from "./site.types";

// export const updateCollections = collectionsMap => ({
//   type: SiteActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap
// });
/////////////////////////////////////////////
export const FIREBASE_DATA = "FIREBASE_DATA";

export const storeFirebaseData = data => {
  return {
    type: FIREBASE_DATA,
    payload: data
  };
};
