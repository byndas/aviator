import { catalogActionTypes } from "./catalog.types";

const INITIAL_STATE = {
  airplane: null
};

export const catalogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case catalogActionTypes.SET_AIRPLANE:
      return {
        ...state,
        airplane: action.payload
      };
    default:
      return state;
  }
};
