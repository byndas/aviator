import { FIREBASE_DATA } from "./site.actions";

// const initialState = {
//   news: null,
//   projects: null,
//   gallery: null,
//   catalog: null,
//   calendar: null
// };

export default (state = null, action) => {
  switch (action.type) {
    case FIREBASE_DATA:
      console.log(action.payload);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
