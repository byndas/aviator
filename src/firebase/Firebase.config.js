import firebase from "firebase";
// import { updateCollections } from "../redux/site/site.actions";

const config = {
  apiKey: "AIzaSyCEu3WsvqugTOqBDfNmVR8sVp524ylAkhs",
  authDomain: "aviator-db.firebaseapp.com",
  databaseURL: "https://aviator-db.firebaseio.com",
  projectId: "aviator-db",
  storageBucket: "aviator-db.appspot.com",
  messagingSenderId: "904722295928",
  appId: "1:904722295928:web:1bf9154b54557c9f59d18d",
  measurementId: "G-2060N4EPY6"
};

firebase.initializeApp(config);

// Gets reference to storage and creates in it a storageBucket reference
// const storage = firebase.storage();
// export const storageRef = storage.ref();

export const fireAuth = firebase.auth();
// export const fireStore = firebase.firestore();
