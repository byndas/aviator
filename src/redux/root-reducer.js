import { combineReducers } from "redux";
import { adminReducer } from "./admin/admin.reducer";
import { calendarReducer } from "./calendar/calendar.reducer";

export default combineReducers({
  admin: adminReducer,
  calendar: calendarReducer,
});
