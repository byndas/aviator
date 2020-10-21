export const FIREBASE_DATA = "FIREBASE_DATA";

export const storeFireDb = data => {
  return {
    type: FIREBASE_DATA,
    payload: data
  };
};
