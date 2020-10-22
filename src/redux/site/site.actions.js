export const FIREBASE_DATA = "FIREBASE_DATA";
export const DELETE_REDUX_ITEM = "DELETE_REDUX_ITEM";

export const storeFireDb = data => {
  return {
    type: FIREBASE_DATA,
    payload: data
  };
};

export const deletePageItem = (id, page) => ({
  type: DELETE_REDUX_ITEM,
  id: id,
  page: page
});
