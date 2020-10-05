import firebase from "firebase";

export function deleteFirebasePost(id, path, action) {
  firebase
    .database()
    .ref(`base/${path}`)
    .child(id)
    .remove()
    .then(() => {
      console.log("Remove succeeded.");
      action(id);
    })
    .catch(error => {
      console.log("Remove failed: " + error.message);
    });
}
