import { SET_ADMIN_MODE } from "./admin.types";

export const adminReducer = (state = false, action) => {
  switch (action.type) {
    case SET_ADMIN_MODE:
      return {
        adminMode: action.payload
      };
    default:
      return state;
  }
};
