import { catalogActionTypes } from "./catalog.types";

export const catalogReducer = (state = {}, action) => {
  switch (action.type) {
    case catalogActionTypes.CREATE_AIRPLANE:
      return {
        ...state,
        id: action.payload
      };
    case catalogActionTypes.EDIT_AIRPLANE:
      return {
        ...state,
        id: action.payload
      };
    case catalogActionTypes.DELETE_AIRPLANE:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
