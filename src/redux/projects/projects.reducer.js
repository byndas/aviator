import { projectsActionTypes } from "./projects.types";

export const projectsReducer = (state = null, action) => {
  switch (action.type) {
    case projectsActionTypes.FIREBASE_PROJECTS:
      return Object.assign({}, state, action.payload);

    case projectsActionTypes.DELETE_PROJECT:
      const deleteID = action.id;
      delete state[deleteID];
      return Object.assign({}, state);
    default:
      return state;
  }
};
