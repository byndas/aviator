import { createSelector } from "reselect";

// input selector
const selectCatalog = state => state.catalog;

export const selectCatalogItems = createSelector(
  [selectCatalog],
  catalog => catalog.items
);

export const searchCatalogItems = createSelector(
  [selectCatalogItems]
  //   items => items.filter();
);
