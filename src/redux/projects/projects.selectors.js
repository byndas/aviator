import { createSelector } from "reselect";

// input selector
const selectNews = state => state.projects;

// output selector
export const selectProjectsItems = createSelector(
  [selectNews],
  projects => projects.items
);
// output selector
export const searchProjectsItems = createSelector(
  [selectprojectsItems]
  //   items => items.filter();
);
