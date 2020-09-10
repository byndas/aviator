import { createSelector } from "reselect";

// input selector
const selectNews = state => state.news;

// output selector
export const selectNewsItems = createSelector([selectNews], news => news.items);
// output selector
export const searchNewsItems = createSelector(
  [selectNewsItems]
  //   items => items.filter();
);
