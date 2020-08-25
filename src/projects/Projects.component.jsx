import React from 'react';
import Project01 from '../images/Project01.jpg';
import Project02 from '../images/Project02.jpg';
import Project03 from '../images/Project03.jpg';
import Project04 from '../images/Project04.jpg';
import Footer from '../footer/Footer.component';
import { backgroundColor } from '../catalog/Catalog.component';
import './Projects.style.css';

const Projects = () => {
    return (
        <div style={backgroundColor}>
            <h1 className='text-center font-italic heading'>PROJECTS</h1>
            <div className='container'>
            <div className="card project_content">
                <h5 className="card-header text-center">Project: name</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Read More...
                     </button>
                </div>
                <div className="collapse" id="collapseExample">
                    <img src={Project01} className='ml-4' alt='...'/>
                       <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </div>
                </div>
           </div>
           <div className="card mt-5 mb-5 project_content">
                <h5 className="card-header text-center">Project: name</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample_2" aria-expanded="false" aria-controls="collapseExample_2">
                        Read More...
                     </button>
                </div>
                <div className="collapse" id="collapseExample_2">
                 <img src={Project02} className='ml-4' alt='...'/>
                       <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </div>
                </div>
           </div>
           <div className="card mt-5 mb-5 project_content">
                <h5 className="card-header text-center">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample_3" aria-expanded="false" aria-controls="collapseExample_3">
                        Read More...
                     </button>
                </div>
                <div className="collapse" id="collapseExample_3">
                 <img src={Project03} className='ml-4' alt='...'/>
                       <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </div>
                </div>
           </div>
           <div className="card mt-5 mb-5 project_content">
                <h5 className="card-header text-center">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample_4" aria-expanded="false" aria-controls="collapseExample_4">
                        Read More...
                     </button>
                </div>
                <div className="collapse" id="collapseExample_4">
                <img src={Project04} className='ml-4' alt='...'/>
                       <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, 
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </div>
                </div>
           </div>
        </div>
            <Footer/>
    </div>
    )
}

export default Projects;