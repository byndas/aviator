import { projectsActionTypes } from "./projects.types";

export const projectsReducer = (state = {}, action) => {
  switch (action.type) {
    case projectsActionTypes.SET_PROJECT:
      return {
        ...state,
        id: action.payload
      };
    case projectsActionTypes.SET_PROJECT:
      return {
        ...state,
        id: action.payload
      };
    case projectsActionTypes.SET_PROJECT:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
