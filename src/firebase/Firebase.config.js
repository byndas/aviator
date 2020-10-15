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

const storageRef = imageId => firebase.storage().ref(`images/${imageId}`);
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// WORKS!
// adding a new image only populates imageFile
export const putImageFireStorage = post => {
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

  console.log("imgFile", post.imgFile);

  // WORKS!
  const putImage = storageRef(imageId).put(post.imgFile);

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

      const storageUrl =
        "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/images%2F" +
        imagePath +
        "?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816";

      // assigns image's Firebase Storage link to post.src
      post.src = storageUrl; // WORKS!
      post.imgFile = null;
      console.log("post", post);
    })
    .catch(error => {
      console.log("IMAGE STORAGE FAILED", error.message);
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
export const deleteImageFireStorage = src => {
  // NO FILE IS SENT HERE
  console.log("src", src);

  const afterTwoF = src.split("%2F")[1];
  const imageId = afterTwoF.split("?")[0];
  // }

  const deleteImage = storageRef(imageId).delete();

  deleteImage
    .then(() => {
      console.log("IMAGE IS DELETED FROM FIRE STORAGE", imageId);
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
// BUG!
export const pushOrSetPostFireDB = (
  pageName,
  postObj,
  methodName,
  dispatchAction
) => {
  console.log("POST OBJ", postObj);
  // DOES POST OBJ HAVE AN ID?
  // IF YES, THEN EDITNEWS
  // ELSE, SKIP THAT IN THEN STATEMENT
  let postId = null;
  let pushOrSet = null;

  const postFireDbRef = fireDbRef.child(pageName);

  if (postObj.id !== null) {
    postId = postObj.id;
    postObj.id = null;
  }

  console.log("POST OBJ", postObj);

  if (methodName === "push") {
    pushOrSet = postFireDbRef.push(postObj);
    console.log("POST CREATED IN FIRE DB");
  } else {
    pushOrSet = postFireDbRef.child(postId).set(postObj);
    console.log("POST UPDATED IN FIRE DB");
  }

  pushOrSet
    .then(() => {
      // only update REDUX if
      if (postId !== null) {
        dispatchAction(postObj, postId);
        console.log("EDIT NEWS ACTION UPDATED REDUX");
      }

      document.getElementById("clearBtn").click();
      console.log("STATE & FORM CLEARED");
    })
    .catch(err => {
      // Firebase DB fails to save post
      console.log("FAILED TO UPDATE POST IN FIRE DB", err.message);
      console.log("IMAGE SRC", postObj.src);

      if (postObj.src !== null) {
        // removes post image from Fire Storage
        deleteImageFireStorage(postObj.src);
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
