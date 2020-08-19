import React from 'react';
import Poster from '../images/1209poster.jpg';
import logo from '../images/1209image.jpg';
import Footer from '../footer/Footer.component';



function Gallery(){
    return(
        <div>
             <div className='container  mt-5 mb-5 shadow p-3 mb-5 bg-white rounded'>
             <div id="carouselExampleCaptions" className="carousel carousel-fade slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Poster} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-dark'>First slide label</h5>
                                    <p className='text-dark'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-dark'>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Poster} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-dark'>Third slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
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

export default Gallery;