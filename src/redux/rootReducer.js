import { combineReducers } from "redux";
import { siteReducer } from "./site/site.reducer";
import { catalogReducer } from "./catalog/catalog.reducer";
import { galleryReducer } from "./gallery/gallery.reducer";
import { projectsReducer } from "./projects/projects.reducer";
import { newsReducer } from "./news/news.reducer";
// import { calendarReducer } from "./calendar/calendar.reducer";
// import { adminReducer } from "./admin/admin.reducer";

export default combineReducers({
  siteData: siteReducer,
  catalog: catalogReducer,
  gallery: galleryReducer,
  projects: projectsReducer,
  news: newsReducer
  // calendar: calendarReducer,
  // admin: adminReducer,
});
