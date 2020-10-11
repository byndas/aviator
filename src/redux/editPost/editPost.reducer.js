import { EDIT_POST } from "./editPost.actions";

const INITIAL_STATE = { name: "", title: "", text: "", src: null, id: null };

export const editPostReducer = (state = INITIAL_STATE, action) => {
  console.log("editPostData", action.payload);
  switch (action.type) {
    case EDIT_POST:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
