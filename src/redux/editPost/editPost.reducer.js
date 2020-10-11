import { EDIT_POST } from "./editPost.actions";

const INITIAL_STATE = { name: "", title: "", text: "", src: null };

export const editPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_POST:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
