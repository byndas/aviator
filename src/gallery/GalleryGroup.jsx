import React, { Component } from "react";

class GalleryGroup extends Component {
  render() {
    const { img, text, name } = this.props;
    return (
      <div className="carousel-item mt-5 mb-5 rounded">
        <img src={img} className="gallery_img" alt="..." />
        <div className="carousel-caption ">
          <h5 className="gallery_text font-italic">{name}</h5>
          <p className="gallery_text font-italic">{text}</p>
        </div>
      </div>
    );
  }
}

export default GalleryGroup;
