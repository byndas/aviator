import { calendarActionTypes } from "./calendar.types";

export const setDate = dateObj => ({
  type: calendarActionTypes.SET_DATE,
  payload: dateObj
});

// export const createDate = dateObj => ({
//   type: CREATE_DATE,
//   payload: dateObj
// });

// export const editDate = dateObj => ({
//   type: EDIT_DATE,
//   payload: dateObj
// });

// export const deleteDate = dateObj => ({
//   type: DELETE_DATE,
//   payload: dateObj
// });
