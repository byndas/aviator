import { catalogActionTypes } from "./catalog.types";

export const firebaseCatalog = data => ({
  type: catalogActionTypes.FIREBASE_CATALOG,
  payload: data
});

export const deleteCatalogItem = id => ({
  type: catalogActionTypes.DELETE_CATALOG_ITEM,
  id: id
});
