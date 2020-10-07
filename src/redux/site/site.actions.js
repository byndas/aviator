export const FIREBASE_DATA = "FIREBASE_DATA";

export const storeFirebaseData = data => {
  return {
    type: FIREBASE_DATA,
    payload: data
  };
};
