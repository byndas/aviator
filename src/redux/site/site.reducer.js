import { FIREBASE_DATA } from "./site.actions";

const initialState = {
  news: null,
  projects: null,
  gallery: null,
  catalog: null,
  calendar: null,
  directory: null
};

export default (siteData = initialState, action) => {
  switch (action.type) {
    case FIREBASE_DATA:
      console.log(action.payload);
      return Object.assign({}, siteData, action.payload);
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
