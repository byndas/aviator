import { projectActionTypes } from "./projects.types";

export const createProject = data => ({
  type: projectActionTypes.CREATE_PROJECT,
  payload: data
});

export const editProject = data => ({
  type: projectActionTypes.EDIT_PROJECT,
  payload: data
});

export const deleteProject = data => ({
  type: projectActionTypes.DELETE_PROJECT,
  payload: data
});
