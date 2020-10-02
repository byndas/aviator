import { calendarActionTypes } from "./calendar.types";

export const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case calendarActionTypes.SET_DATE:
      return {
        ...state,
        date: action.payload
        // day: action.payload,
        // month: action.payload,
        // year: action.payload,
        // text: action.payload
      };
    default:
      return state;
  }
};
