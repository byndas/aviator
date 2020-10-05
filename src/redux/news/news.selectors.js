import { createSelector } from "reselect";

// input selector
export const selectBase = state => state.base;

// output selector
export const selectNews = createSelector([selectBase], base => base.news);

// output selector
// export const searchNews = createSelector(
//   [selectNews]
//   //   items => items.filter();
// );
