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

const storageRef = imageId => firebase.storage().ref(`images/${imageId}`);

const fireDbRef = firebase.database().ref("base");

export const deleteImageFireStorage = srcOrFile => {
  let imgId;

  if (typeof srcOrFile === "string") {
    const afterTwoF = srcOrFile.split("%2F")[1];
    imgId = afterTwoF.split("?")[0];
  } else {
    imgId = this.state.imgFile;
  }

  const deleteImage = storageRef(imgId).delete();

  deleteImage
    .then(() => {
      console.log("IMAGE IS DELETED FROM FIRE STORAGE", imgId);
    })
    .catch(error => {
      console.log("FAILED TO DELETE IMAGE FROM FIRE STORAGE", error.message);
    });
};

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

export const pushOrSetPostFireDB = (pageName, postObj, methodName) => {
  console.log("UPDATING POST IN FIRE DB");

  let pushOrSet;
  const postFireDbRef = fireDbRef.child(pageName + "/" + postObj.id);

  methodName === "push"
    ? (pushOrSet = postFireDbRef.push(postObj))
    : (pushOrSet = postFireDbRef.set(postObj));

  pushOrSet
    .then(() => {
      console.log("POST UPDATED IN FIRE DB");

      this.props.editNews(postObj);
      console.log("POST UPDATED IN REDUX");

      document.getElementById("clearBtn").click();
      console.log("ADMIN INPUT FORM CLEARED");
    })
    .catch(err => {
      // Firebase DB fails to save post
      console.log("FAILED TO UPDATE POST IN FIRE DB", err.message);
      console.log("IMAGE SRC", postObj.src);
      if (postObj.src) {
        // removes post's image from Fire Storage
        deleteImageFireStorage(postObj.src);
      }
    });
};

export const putImageFireStorage = postObj => {
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

  console.log("33333 postObj.SRC", postObj.src);
  // BUG: postObj.src IS UNDEFINED

  const putImage = storageRef(imageId).put(postObj.src);

  putImage.on("state_changed", snapshot => {
    // logs image's upload % status
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("IMAGE UPLOAD %", progress);
  });

  putImage
    .then(snapshot => {
      console.log("IMAGE SNAPSHOT IN FIRE STORAGE", snapshot);
      const imagePath = snapshot.metadata.fullPath.split("/")[1];
      console.log("IMAGE PATH:", imagePath);

      const storageUrl =
        "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/images%2F" +
        imagePath +
        "?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816";
      // assigns image's Firebase Storage link to postObj.src
      postObj.src = storageUrl;
    })
    .catch(error => {
      console.log("IMAGE STORAGE FAILED", error.message);
    });
};

export const getFireDbPage = (pageName, dispatchAction) => {
  // LISTENER: UPDATES REDUX when Firebase NEWS changes

  fireDbRef(pageName).on("value", snapshot => {
    console.log("FIREBASE NEWS SNAPSHOT:", snapshot.val());
    dispatchAction(snapshot.val());
  });
};

export const fireAuth = firebase.auth();
