import React, { Component } from 'react';
import Logo from './images/logo.png';

import { Link } from 'react-router-dom';
import './Navbar.css'


class Navbar extends Component{
    render(){
        return(
            <div>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to='/'>
                        <img className='logo'  src={Logo}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">News <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">projects <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gallery <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                calendar
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                contact
                            </a>
                        </li>
                        </ul>
                        <div>
                        <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link" href="https://www.youtube.com/">
                                        youtube
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" href="#">
                                     insta
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" href="#">
                                      fb
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Navbar;