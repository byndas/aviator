import { FIREBASE_DATA } from "./siteActions";

export default (siteData = [], action) => {
  switch (action.type) {
    case FIREBASE_DATA:
      return siteData.concat(Object.values(action.payload));
    default:
      return siteData;
  }
};
