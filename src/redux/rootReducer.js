import { combineReducers } from "redux";
// import siteReducer from "./site/site.reducer";
// import { adminReducer } from "./admin/admin.reducer";
// import { calendarReducer } from "./calendar/calendar.reducer";
// import { catalogReducer } from "./catalog/catalog.reducer";
// import { galleryReducer } from "./gallery/gallery.reducer";
// import { projectsReducer } from "./projects/projects.reducer";
import { newsReducer } from "./news/news.reducer";

export default combineReducers({
  news: newsReducer
  // siteData: siteReducer,
  // admin: adminReducer,
  // calendar: calendarReducer,
  // catalog: catalogReducer,
  // gallery: galleryReducer,
  // projects: projectsReducer
});
