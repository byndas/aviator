import { adminActionTypes } from "./admin.types";

const INITIAL_STATE = {
  adminMode: false
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case adminActionTypes.SET_ADMIN_MODE:
      return {
        ...state,
        adminMode: action.payload
      };
    default:
      return state;
  }
};
