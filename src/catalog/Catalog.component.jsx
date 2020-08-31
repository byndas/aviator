import React, { Component } from 'react';
import Footer from '../footer/Footer.component';
import AirPlane from './AirPlane.component';
import Pilots from './Pilots.component';
import airPlane from './AirPlaneList';

export const backgroundColor = {
    backgroundImage: 'linear-gradient(to right, #d8e2f9, #83abed)', 
}


class Catalog extends Component {
    constructor(props){
        super(props);
        this.state = ({ airPlane: airPlane })
    }
    render(){
    return( 
        <div style={backgroundColor}>
          <AirPlane airPlane={airPlane}/>
          <Pilots/>
        <Footer/>
     </div>
    )
}
}

export default Catalog;