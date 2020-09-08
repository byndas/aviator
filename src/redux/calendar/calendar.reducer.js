const INITIAL_STATE = {
  month: null,
  day: null,
  year: null,
  text: null
};

export const calendarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MONTH":
      return {
        ...state,
        month: action.payload
      };
    case "SET_DAY":
      return {
        ...state,
        month: action.payload
      };
    case "SET_YEAR":
      return {
        ...state,
        year: action.payload
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};
