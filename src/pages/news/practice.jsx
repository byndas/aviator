handleSubmit(e) {
    e.preventDefault();

    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    const guid = () => {
      return (
        s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4()
      );
    };
    const imgGuid = guid();

    const imagesRef = firebase
      .storage()
      .ref()
      .child("images/" + imgGuid);

    const uploadTask = imagesRef.put(this.state.imgFile);

    uploadTask.on("state_changed", snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    });

    uploadTask
      .then(snapshot => {
        const imgPath = snapshot.metadata.fullPath.split("/")[1];
        const storageUrl =
          "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/images%2F" +
          imgPath +
          "?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816";
        const postObj = {
          name: this.state.name,
          title: this.state.title,
          text: this.state.text,
          src: storageUrl
        };

        firebase
          .database()
          .ref("base/news")
          .push(postObj)
          .then(res => {
            console.log("RESPONSE: ", res);
            // const fbResp = JSON.parse(JSON.stringify(res)).split("/");
            // const postObjId = fbResp[fbResp.length - 1];
            // postObj.id = postObjId;
            // console.log("redux obj", postObj);
            // this.props.addNewsObjectToRedux(postObj);

            document.getElementById("clearBtn").click();
          })
          .catch(err => {
            // in the case of failure saving to db
            console.log("img was uploaded but post failed", err);
            // logic delete uploaded img, clear img from storage.
            firebase
              .storage()
              .ref()
              .child("images/" + imgGuid)
              .delete()
              .then(() => {
                // img deleted successfully
                console.log("successfully deleted img");
              })
              .catch()(error => {
              // Uh-oh, an error occurred!
              console.log("failed to delete img", error.message);
            });
          });
      })
      .catch(error => {
        console.log("image was not uploaded to storage", error.message);
      });
  }