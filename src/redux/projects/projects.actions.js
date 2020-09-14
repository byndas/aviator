import { projectActionTypes } from "./projects.types";

export const setProject = projectObj => ({
  type: projectActionTypes.SET_PROJECT,
  payload: projectObj
});

// export const createProject = projectObj => ({
//   type: CREATE_PROJECT,
//   payload: projectObj
// });

// export const editProject = projectObj => ({
//   type: EDIT_PROJECT,
//   payload: projectObj
// });

// export const deleteProject = projectObj => ({
//   type: DELETE_PROJECT,
//   payload: projectObj
// });
