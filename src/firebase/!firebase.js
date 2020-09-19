// contains the Firebase context and provider

import React, { createContext, useEffect } from "react";
import firebaseConfig from "./Firebase.config";
import app from "firebase/app";
import "firebase/database";
import { useDispatch } from "react-redux";

import { todoActions } from "../state/todos";

// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null);
export { FirebaseContext };

export default ({ children }) => {
  let firebase = {
    app: null,
    database: null
  };

  const dispatch = useDispatch();

  // check if firebase app has been initialized previously
  // if not, initialize with the config we saved earlier
  if (!app.apps.length) {
    app.initializeApp(firebaseConfig);
    firebase = {
      app: app,
      database: app.database(),

      api: {
        getTodos,
        addTodo
      }
    };
  }
  // **********************
  // function to query Todos from the database and
  // fire a Redux action to update the items in real-time
  function getTodos() {
    firebase.database.ref("todos").on("value", snapshot => {
      const vals = snapshot.val();
      let _records = [];
      for (var key in vals) {
        _records.push({
          ...vals[key],
          id: key
        });
      }
      // setTodos is a Redux action that would update the todo store
      // to the _records payload
      dispatch(setTodos(_records));
    });
  }
  // **********************
  function addTodo(itemTitle) {
    firebase.database
      .ref("todos")
      .push()
      .set({
        title: itemTitle
      })
      .then(doc => {
        // nothing to do here since you already have a
        // connection pulling updates to Todos
      })
      .catch(error => {
        dispatch(todoActions.showError("Error adding Todo to database"));
        console.error(error);
      });
  }
  // **********************

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};
