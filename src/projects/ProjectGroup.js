import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProjectGroup extends Component{
    render(){
        const { name, text, img, subTitle, id } = this.props;
        return(
            <div>
                <div class="card project_content_title">
                <div class="card-header">{name}<span className='ml-5'>31.08.2020</span></div>
                    <h5 class="card-title text-center">{subTitle}</h5>
                <div class="card-body d-flex">
                    <div class="col-md-4">
                      <img src={img} alt="..." class="img-thumbnail"/>
                    </div>
                    <div class="col-md-8">
                     <p class="card-text text-truncate">
                       {text}
                     </p>
                     <Link className="btn btn-primary" type="button" to={`/projects/${id}`}>
                        Read More...
                     </Link>
                  </div>
                </div>
           </div>
            </div>
        )
    }
};

export default ProjectGroup;