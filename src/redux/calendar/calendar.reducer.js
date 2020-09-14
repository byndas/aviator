import { calendarActionTypes } from "./calendar.types";

const INITIAL_STATE = {
  // day: null,
  // month: null,
  // year: null,
  // text: null
  date: null
};

export const calendarReducer = (state = INITIAL_STATE, action) => {
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
