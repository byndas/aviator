import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "../../footer/Footer.component";
import AirPlane from "./AirPlane.component";
import Pilots from "./Pilots.component";
import airPlane from "./AirPlaneList";
import firebase from "firebase";
import "../../firebase/Firebase.config";

export const backgroundColor = {
  backgroundImage: "linear-gradient(to right, #d8e2f9, #83abed)"
};

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { airPlane: airPlane };
  }
  componentDidMount() {
    const dbRef = firebase.database().ref("catalog");

    dbRef.on("value", snapshot => {
      // save to Redux store ( not this.setState() )
      console.log(snapshot.val());
    });
  }
  render() {
    const { auth } = this.props;
    return (
      <div style={backgroundColor}>
        <AirPlane airPlane={airPlane} auth={auth} />
        <Pilots />
        <Footer />
      </div>
    );
  }
}

// const mapDispatchToProps = state => ({})

// export default connect()(Catalog);

export default Catalog;
