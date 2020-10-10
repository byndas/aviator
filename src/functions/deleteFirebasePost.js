import firebase from "firebase";

export const deleteFirebasePost = (id, path, dispatchAction) => {
  console.log("dispatchAction: ", dispatchAction);
  firebase
    .database()
    .ref(`base/${path}`)
    .child(id)
    .remove()
    .then(() => {
      console.log("Remove succeeded.");
      // DISPATCHES ACTION TO REMOVE POST FROM REDUX
      dispatchAction(id);
    })
    .catch(error => {
      console.log("Remove failed: " + error.message);
    });
};
