import { projectsActionTypes } from "./projects.types";

const INITIAL_STATE = {
  project: null
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case projectsActionTypes.SET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    default:
      return state;
  }
};
