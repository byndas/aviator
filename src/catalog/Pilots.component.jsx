import React from 'react';
import Pilot01 from '../images/Pilot01.jpg';
import Pilot02 from '../images/Pilot02.jpg';
import Pilot03 from '../images/Pilot03.jpg';
import './Catalog.styles.css';


const Pilots = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center font-italic heading'>PILOTS</h1>
            <div class="media">
                <img src={Pilot01} className="align-self-center mr-3 rounded-circle pilot_images" alt="..."/>
              <div class="media-body">
                    <h5 class="mt-5 font-italic">Media heading</h5>
                  <p style={{fontSize: '1.2rem'}} className='font-italic mt-3 pilot_paragraph'> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta 
                        rem corporis sint dolore culpa amet reiciendis consequatur cumque atque quam.
                        Sequi est enim, magni fugit id voluptas sit ad iure.
                  </p>
              </div>
          </div>
          <div class="media mt-4">
                <img src={Pilot02} className="align-self-center mr-3 rounded-circle pilot_images" alt="..."/>
              <div class="media-body">
                    <h5 class="mt-5 font-italic">Media heading</h5>
                  <p style={{fontSize: '1.2rem'}} className='font-italic mt-3 pilot_paragraph'> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta 
                        rem corporis sint dolore culpa amet reiciendis consequatur cumque atque quam.
                        Sequi est enim, magni fugit id voluptas sit ad iure.
                  </p>
              </div>
          </div>
          <div class="media mt-4">
                <img src={Pilot03} className="align-self-center mr-3 rounded-circle pilot_images" alt="..."/>
              <div class="media-body">
                    <h5 class="mt-5 font-italic">Media heading</h5>
                  <p style={{fontSize: '1.2rem'}} className='font-italic mt-3 pilot_paragraph'> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta 
                        rem corporis sint dolore culpa amet reiciendis consequatur cumque atque quam.
                        Sequi est enim, magni fugit id voluptas sit ad iure.
                  </p>
              </div>
          </div>
        </div>
    )
}

export default Pilots;