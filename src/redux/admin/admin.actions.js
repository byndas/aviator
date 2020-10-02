export const SET_ADMIN_MODE = "SET_ADMIN_MODE";

export const logAdmin = adminMode => ({
  type: SET_ADMIN_MODE,
  payload: adminMode
});
