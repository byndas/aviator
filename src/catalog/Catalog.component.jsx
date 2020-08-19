import React from 'react';
import Plane01 from '../images/plane01.jpg'
import Plane02 from '../images/plane02.jpg';
import Plane03 from '../images/plane03.jpg';
import Plane04 from '../images/plane04.jpg';
import Footer from '../footer/Footer.component';


function Catalog() {
    return(
        <div>
        <div className='container mt-5'>
            <div class="row row-cols-1 row-cols-md-2">
                    <div class="col mb-4">
                        <div class="card">
                            <img src={Plane01} class="card-img-top" alt="mustang"/>
                            <div class="card-body">
                                <h5 class="card-title">P-51 Mustang</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <img src={Plane02} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"> Carenado Aircraft to 10.30.</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <img src={Plane03} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Private Jet</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <img src={Plane04} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Beechcraft Bonanza Model 35</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
             </div>
        </div>
        <Footer/>
     </div>
    )
}

export default Catalog;