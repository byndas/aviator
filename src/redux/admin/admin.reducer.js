const INITIAL_STATE = {
  adminMode: false
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ADMIN_MODE":
      return {
        ...state,
        adminMode: action.payload
      };
    default:
      return state;
  }
};
  