import React from 'react';
import Footer from '../footer/Footer.component'
import facebook from '../images/facebookIcon.svg';
import InstagramIcon from '../images/instagramIcon.svg';
import './contact.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <div>
         <div className='contact_container'>
            <div className='container text-center mt-5'>
              <div class="row border rounded-pill shadow p-1 mb-5 bg-white w-50 p-1 contact_hover">
                 <div class="col">
                           <div class="media">
                                <img className='facebook_icon mt-3' src={facebook} alt='facebookIcon'/>
                                <div class="media-body">
                                   <p className='mt-3'> dkodkfo@dm.com</p>
                                </div>
                            </div>
                    </div>
                </div>
            <div class="row border rounded-pill shadow p-1 mb-5 bg-white w-50 p-1 contact_hover">
                    <div class="col">
                        <div class="media">
                                <img src={InstagramIcon} className='instagram_icon mt-3' alt="instagramIcon"/>
                                <div class="media-body">
                                <p className='mt-3'> dkodkfo@instagram.com</p>
                                </div>
                        </div>
                   </div>
             </div>
             <div class="row border rounded-pill shadow p-1 mb-5 bg-white w-50 p-1 contact_hover">
                    <div class="col">
                        <div class="media">
                             <FontAwesomeIcon icon={faPhone} className='mt-3'/>
                                <div class="media-body">
                                <p className='mt-3'>+995 595 595</p>
                                </div>
                        </div>
                   </div>
             </div>
             <div class="row border rounded-pill shadow p-1 mb-5 bg-white w-50 p-1 contact_hover">
                    <div class="col">
                        <div class="media">
                             <FontAwesomeIcon icon={faEnvelope} className='mt-3'/>
                                <div class="media-body">
                                <p className='mt-3'>georgiaAviation@gmail.com</p>
                                </div>
                        </div>
                   </div>
             </div>
            </div>
        </div>
          <Footer/>
    </div>
    )
}


export default Contact;