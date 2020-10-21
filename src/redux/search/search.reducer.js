import { SEARCH_RESULTS } from "./search.actions";

export const searchReducer = (state = null, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
