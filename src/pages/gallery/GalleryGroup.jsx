import React, { Component } from "react";

class GalleryGroup extends Component {
  render() {
    const { src, text } = this.props;
    return (
      <div className="carousel-item mt-5 mb-5 rounded">
        <img src={src} className="gallery_img" alt="..." />
        <div className="carousel-caption ">
          <p className="gallery_text font-italic">{text}</p>
        </div>
      </div>
    );
  }
}

export default GalleryGroup;
