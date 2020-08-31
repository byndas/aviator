import React, { Component } from 'react';
import Poster from '../images/1209poster.jpg';
import GalleryGroup from './GalleryGroup';
import Footer from '../footer/Footer.component';
import './Gallery.style.css';
import { backgroundColor } from "../catalog/Catalog.component";


class Gallery extends Component{
    render(){
        const { gallery } = this.props;
        const galleryGroup = gallery.map(glr => (
                <GalleryGroup 
                  img={glr.img}
                  name={glr.name}
                  text={glr.text}
                  key={glr.id}
                />
        ))
    return(
        <div style={backgroundColor}>
             <div className='container'>
               <div id="carouselExampleCaptions" className="carousel carousel-fade slide gallery_container" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol> 
                          <div className="carousel-inner">
                             <div className="carousel-item active mt-5 mb-5  rounded">
                                    <img src={Poster} className="gallery_img" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                   </div>
                             </div>
                              {galleryGroup}
                           </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
             </div>
             <Footer/>
        </div>
    )
 }
}

export default Gallery;