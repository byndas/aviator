import { catalogActionTypes } from "./catalog.types";

export const setAirplane = airplaneObj => ({
  type: catalogActionTypes.SET_AIRPLANE,
  payload: airplaneObj
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
