import { FIREBASE_DATA } from "./site.actions";

export default (siteData = [], action) => {
  switch (action.type) {
    case FIREBASE_DATA:
      return siteData.concat(Object.values(action.payload));
    default:
      return siteData;
  }
};

/*
import SiteActionTypes from "./site.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const siteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SiteActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case SiteActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case SiteActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default siteReducer;
*/
//////////////////////////////////////////////
