import { calendarActionTypes } from "./calendar.types";

export const createDate = data => ({
  type: calendarActionTypes.CREATE_DATE,
  payload: data
});

export const editDate = data => ({
  type: calendarActionTypes.EDIT_DATE,
  payload: data
});

export const deleteDate = data => ({
  type: calendarActionTypes.DELETE_DATE,
  payload: data
});
