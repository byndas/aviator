import { projectsActionTypes } from "./projects.types";

export const firebaseProjects = data => ({
  type: projectsActionTypes.FIREBASE_PROJECTS,
  payload: data
});

export const deleteProject = id => ({
  type: projectsActionTypes.DELETE_PROJECT,
  payload: id
});
