import { FIREBASE_DATA, DELETE_REDUX_ITEM } from "./site.actions";

const INITAL_STATE = {
  calendar: null,
  catalog: null,
  gallery: null,
  news: null,
  projects: null
};

export const siteReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case FIREBASE_DATA:
      return Object.assign({}, state, action.payload);

    case DELETE_REDUX_ITEM:
      const deleteID = action.id;
      const page = action.page;
      delete state[page][deleteID];
      return Object.assign({}, state);

    default:
      return state;
  }
};
