import React, { Component} from 'react';
import './Catalog.styles.css';
import AirPlaneGroup from './AirPlanegroup';


class  AirPlane extends Component {
    render(){
        const { airPlane } = this.props;
        const airPlaneGroup = airPlane.map(air => (
            <AirPlaneGroup 
              name={air.name}
              text={air.text}
              img={air.img}
              key={air.id}
              id={air.id}
            />
        ))
    return (
        <div className='container border-bottom'>
             <h1 className='text-center font-italic heading'>AIRPLANES</h1>
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                 {airPlaneGroup}
             </div>
        </div>
    )
  }  
};

export default AirPlane;