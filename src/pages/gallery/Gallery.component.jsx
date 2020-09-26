import "./Gallery.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../../firebase/Firebase.config";
import firebase from "firebase";
import Poster from "../../images/jpg/starPoster.jpg";
import GalleryGroup from "./GalleryGroup";
import GalleryForm from "./GalleryForm";
import Footer from "../../footer/Footer.component";
import { backgroundColor } from "../catalog/Catalog.component";

class Gallery extends Component {
  // componentDidMount() {
  //   const dbRef = firebase.database().ref("gallery");

  //   dbRef.on("value", snapshot => {
  //     // save to Redux store ( not this.setState() )
  //     console.log(snapshot.val());
  //   });
  // }
  render() {
    const { auth } = this.props;

    let galleryList;
    console.log(this.props.siteData.gallery);
    if (this.props.siteData.gallery !== null) {
      const galleryArr = Object.values(this.props.siteData.gallery);
      const galleryIds = Object.keys(this.props.siteData.gallery);

      galleryList = galleryArr.map(glr => (
        <GalleryGroup img={glr.img} text={glr.text} key={glr.id} />
      ));
    } else {
      // add jsx loading html
      galleryList = "LOADING...";
    }
    return (
      <div style={backgroundColor}>
        <div className="container">
          <div
            id="carouselExampleCaptions"
            className="carousel carousel-fade slide gallery_container"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active mt-5 mb-5  rounded">
                <img src={Poster} className="gallery_img" alt="..." />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              {/* GALLERY DISPLAY HERE */}
              {galleryList}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {auth && <GalleryForm />}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
// CHANGE siteData.gallery --> selectors!
const mapStateToProps = reduxStore => {
  return { siteData: reduxStore.siteData };
};

export default connect(mapStateToProps, null)(Gallery);
