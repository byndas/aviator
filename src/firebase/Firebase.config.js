import firebase from "firebase";

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

export const fireAuth = firebase.auth();

const fireDbRef = firebase.database().ref("base");

const storageRef = imageId =>
  firebase
    .storage()
    .ref()
    .child("images")
    .child(imageId);
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// WORKS!
export const deleteImageFireStorage = (
  postObj,
  updatingPrevImage,
  actionDispatch
) => {
  let afterTwoF;

  if (updatingPrevImage) {
    // BUG: postObj.prevSrc IS UNDEFINED
    afterTwoF = postObj.prevSrc.split("%2F")[1];
  } else {
    afterTwoF = postObj.src.split("%2F")[1];
  }

  const imageId = afterTwoF.split("?")[0];

  const deleteImage = storageRef(imageId).delete();

  deleteImage
    .then(() => {
      console.log("IMAGE DELETED FROM FIRE STORAGE", imageId);

      if (updatingPrevImage) {
        console.log("PUTTING NEW IMAGE INTO FIRE STORAGE:", postObj.src);
        putImageFireStorage(postObj, actionDispatch);
      }
    })
    .catch(error => {
      console.log("FAILED TO DELETE IMAGE FROM FIRE STORAGE", error.message);
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// WORKS!
export const removePostFireDB = (pageName, id, dispatchAction) => {
  const removePost = fireDbRef.child(pageName + "/" + id).remove();

  removePost
    .then(() => {
      console.log("REMOVED POST FROM FIRE DB");

      // DISPATCHES ACTION TO REMOVE POST FROM REDUX
      // WHICH REFRESHES PAGE COMPONENT
      dispatchAction(id);

      console.log("REMOVED POST FROM REDUX");
    })
    .catch(error => {
      console.log("FAILED TO REMOVE POST FROM FIRE DB:" + error.message);
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// WORKS!
export const putImageFireStorage = (postObj, dispatchAction) => {
  const randomNumber = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const randomImageId = () => {
    return (
      randomNumber() +
      randomNumber() +
      "-" +
      randomNumber() +
      "-" +
      randomNumber() +
      "-" +
      randomNumber() +
      "-" +
      randomNumber() +
      randomNumber() +
      randomNumber()
    );
  };

  const imageId = randomImageId();

  console.log("imageId", imageId);

  console.log("imgFile", postObj.imgFile);

  // WORKS!
  const putImage = storageRef(imageId).put(postObj.imgFile);

  putImage.on("state_changed", snapshot => {
    // logs image upload % status
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("IMAGE UPLOAD %", progress);
  }); // WORKS!

  putImage
    .then(snapshot => {
      console.log("IMAGE SNAPSHOT IN FIRE STORAGE", snapshot);

      const imagePath = snapshot.metadata.fullPath.split("/")[1];
      console.log("IMAGE PATH:", imagePath);

      const fireStorageUrl =
        "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/images%2F" +
        imagePath +
        "?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816";

      postObj.src = fireStorageUrl; // WORKS!

      // if (postObj.hasOwnProperty("prevSrc")) {
      //   delete postObj.prevSrc;
      // }

      console.log("PUSHING NEW POST OBJ INTO FIRE DB", postObj);
      pushOrSetPostFireDB("news", postObj, dispatchAction);
    })
    .catch(error => {
      console.log("IMAGE STORAGE FAILED", error.message);
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// ASYNCH BUG! -- delete postObj.imgFile & id before pushing
export const pushOrSetPostFireDB = (pageName, postObj, dispatchAction) => {
  console.log("POST OBJ", postObj);

  const pageFireDbRef = fireDbRef.child(pageName);

  let pushOrSet,
    postId = null;

  // delete postObj.imgFile;

  // IF EDITING A POST
  if (postObj.id !== null) {
    postId = postObj.id;
    delete postObj.id;
    pushOrSet = pageFireDbRef.child(postId).set(postObj);
    console.log("UPDATED POST IN FIRE DB", postObj);
  } else {
    // SINCE CREATING A POST
    pushOrSet = pageFireDbRef.push(postObj);
    console.log("CREATED POST IN FIRE DB", postObj);
  }

  pushOrSet
    .then(() => {
      console.log("777 POST OBJ", postObj);
      // only updates REDUX if updating a post
      if (postId !== null) {
        // BUG! sends "undefined" to REDUX instead of updated postObj
        // postId is correct, postObj is not
        dispatchAction(postObj, postId);
        console.log("REDUX MATCHES FIREBASE", postObj);
      }

      document.getElementById("clearBtn").click();
      console.log("STATE & FORM CLEARED");
    })
    .catch(err => {
      // Firebase DB fails to save post
      console.log("FAILED TO UPDATE POST IN FIRE DB", err.message);
      console.log("IMAGE SRC", postObj.src);

      if (postObj.src !== null) {
        console.log(
          "DELETING IMAGE FROM FIRE STORAGE DUE TO FAILED DB POST",
          postObj.src
        );
        deleteImageFireStorage(postObj, false);
      }
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// WORKS!
export const getFireDbPage = (pageName, dispatchAction) => {
  // LISTENER: UPDATES REDUX when Firebase NEWS changes

  fireDbRef.child(pageName).on("value", snapshot => {
    console.log("FIREBASE NEWS SNAPSHOT:", snapshot.val());
    dispatchAction(snapshot.val());
  });
};
