import React, { Component } from 'react';
import Footer from '../footer/Footer.component';
import AirPlane from './AirPlane.component';
import Pilots from './Pilots.component';


export const backgroundColor = {
    backgroundImage: 'linear-gradient(to right, #d8e2f9, #83abed)', 
}


class Catalog extends Component {
    render(){
    return( 
        <div style={backgroundColor}>
          <AirPlane/>
          <Pilots/>
        <Footer/>
     </div>
    )
}
}

export default Catalog;