import { combineReducers } from "redux ";
import { calendarReducer } from "./calendar/calendar.reducer";

export default combineReducers({
  calendar: calendarReducer
});
