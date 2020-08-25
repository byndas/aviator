import React, { Component} from 'react';
import Plane01 from '../images/plane01.jpg'
import Plane02 from '../images/plane02.jpg';
import Plane03 from '../images/plane03.jpg';
import Plane04 from '../images/plane04.jpg';
import './Catalog.styles.css';



class  AirPlane extends Component {
    render(){
    return (
        <div className='container border-bottom'>
             <h1 className='text-center font-italic heading'>AIRPLANES</h1>
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                    <div className="col mb-4">
                        <div className="card shadow p-3 mb-5 rounded border-0">
                            <img src={Plane01} className="card-img-top rounded" alt="mustang"/>
                            <div className="card-body">
                                <h5 className="card-title">P-51 Mustang</h5>
                                <p className='card-text'>
                                       This is a longer card with supporting text 
                                       below as a natural lead-in to additional content.
                                       This content is a little bit longer 
                                 </p> 
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card shadow p-3 mb-5 rounded border-0">
                        <img src={Plane02} className="card-img-top rounded" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> Carenado Aircraft to 10.30.</h5>
                            <p className='card-text'>
                                This is a longer card with supporting text below as a natural lead-in to 
                                additional content. This content is a little bit longer.
                             </p>
                        </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card shadow p-3 mb-5 rounded border-0">
                        <img src={Plane03} className="card-img-top rounded" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Private Jet</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card shadow p-3 mb-5 rounded border-0">
                        <img src={Plane04} className="card-img-top rounded" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Beechcraft Bonanza Model 35</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
             </div>
        </div>
    )
  }  
};

export default AirPlane;