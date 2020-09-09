import { createSelector } from "reselect";

// input selector
const selectCatalog = state => state.catalog;

export const selectCatalogItems = createSelector(
  [selectCatalog],
  catalog => catalog.catalogItems
);

export const searchCatalogItems = createSelector(
  [selectCatalogItems],
  catalogItems => catalogItems.filter();
);
