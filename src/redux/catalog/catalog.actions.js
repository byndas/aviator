import { catalogActionTypes } from "./catalog.types";

export const createAirPlane = data => ({
  type: catalogActionTypes.CREATE_AIRPLANE,
  payload: data
});

export const editAirPlane = data => ({
  type: catalogActionTypes.EDIT_AIRPLANE,
  payload: data
});

export const deleteAirPlane = data => ({
  type: catalogActionTypes.DELETE_AIRPLANE,
  payload: data
});
