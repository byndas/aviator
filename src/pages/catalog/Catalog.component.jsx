import React, { Component } from "react";
import { connect } from "react-redux";

import CatalogForm from "./CatalogForm";
import AirPlane from "./AirPlane.component";
import Pilots from "./Pilots.component";
import Footer from "../../footer/Footer.component";
import firebase from "firebase";

export const backgroundColor = {
  backgroundImage: "linear-gradient(to right, #d8e2f9, #83abed)"
};

class Catalog extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   const dbRef = firebase.database().ref("catalog");

  //   dbRef.on("value", snapshot => {
  //     // save to Redux store ( not this.setState() )
  //     console.log(snapshot.val());
  //   });
  // }
  render() {
    const { auth } = this.props;

    return (
      <div style={backgroundColor}>
        <CatalogForm />
        <AirPlane auth={auth} />
        <Pilots />
        <Footer />
      </div>
    );
  }
}

// const mapDispatchToProps = state => ({})

const mapStateToProps = reduxStore => {
  return { siteData: reduxStore.siteData };
};

export default connect(mapStateToProps, null)(Catalog);
