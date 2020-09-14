import { createSelector } from "reselect";

// input selector
const selectCalendar = state => state.calendar;

// output selector
export const selectCalendarItems = createSelector(
  [selectCalendar],
  calendar => calendar.items
);
// output selector
export const searchCalendarItems = createSelector(
  [selectCalendarItems]
  //   items => items.filter();
);
import { createSelector } from "reselect";

// input selector
const selectCalendar = state => state.calendar;

// output selector
export const selectCalendarItems = createSelector(
  [selectCalendar],
  calendar => calendar.items
);
// output selector
export const searchCalendarItems = createSelector(
  [selectCalendarItems]
  //   items => items.filter();
);
