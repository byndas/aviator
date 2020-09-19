// index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./state/store";
import { Provider } from "react-redux";
import FirebaseProvider from "./firebase/!firebase";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
