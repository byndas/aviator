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

const storage = firebase.storage();
const storageRef = storage.ref();

export const fireAuth = firebase.auth();
export const fireDB = firebase.firestore();

// const addPageData = (collectionKey, objectsToAdd) => {
//   const collectionRef = fireDB.collection(collectionKey);
//   console.log(collectionRef);
// };

// export const addCollectionsAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = fireDB.collection(collectionKey);
//   console.log(collectionRef);

//   const batch = fireDB.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     console.log(newDocRef);
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };
