import { persistStore } from "redux-persist";
import { createStore } from "redux";
// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

// import rootReducer from "./root-reducer";

// const middlewares = [];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

const defaultState = { authenticated: false };

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const loginUser = password => ({ type: LOGIN, password: password });

export const logoutUser = () => ({ type: LOGOUT });

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.password === state.password) {
        return { authenticated: true };
      } else {
        return state;
      }
    case LOGOUT:
      return { authenticated: false };
    default:
      return state;
  }
};

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(authReducer);

// export const persistor = persistStore(store);

// export default { store, persistor };
