import { combineReducers } from "redux";
import siteReducer from "./site/site.reducer";
import directoryReducer from "./directory/directory.reducer";
import { adminReducer } from "./admin/admin.reducer";
import { calendarReducer } from "./calendar/calendar.reducer";
import { catalogReducer } from "./catalog/catalog.reducer";
import { galleryReducer } from "./gallery/gallery.reducer";
import { newsReducer } from "./news/news.reducer";
import { projectsReducer } from "./projects/projects.reducer";

export default combineReducers({
  siteData: siteReducer,
  directory: directoryReducer,
  admin: adminReducer,
  calendar: calendarReducer,
  catalog: catalogReducer,
  gallery: galleryReducer,
  news: newsReducer,
  projects: projectsReducer
});
