import React, { Component } from "react";
import { connect } from "react-redux";
import CatalogForm from "./CatalogForm";
import AirPlane from "./AirPlane.component";
import Pilots from "./Pilots.component";
import Footer from "../../footer/Footer.component";
import { getFireDbPage } from "../../firebase/Firebase.config";
import {
  firebaseCatalog,
  deleteCatalogItem
} from "../../redux/catalog/catalog.actions";

export const backgroundColor = {
  backgroundImage: "linear-gradient(to right, #d8e2f9, #83abed)"
};

class Catalog extends Component {
  componentDidMount() {
    getFireDbPage("catalog", this.props.firebaseCatalog);
  }
  render() {
    const { auth, reduxCatalog, deleteCatalogItem } = this.props;

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

const mapStateToProps = reduxStore => ({
  reduxCatalog: reduxStore.catalog
});

export default connect(mapStateToProps, {
  firebaseCatalog,
  deleteCatalogItem
})(Catalog);
