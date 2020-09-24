import "./Contact.styles.css";
import React from "react";
import Footer from "../../footer/Footer.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { backgroundColor } from "../catalog/Catalog.component";
import { getImage } from "../../firebase/firebase.config";

function Contact() {
  return (
    <div style={backgroundColor}>
      <div className="contact_container">
        <div className="container text-center mt-5 position-relative">
          <div className="row border rounded-pill shadow p-1 mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <img
                  alt="facebookIcon"
                  className="facebook_icon mt-3"
                  id="facebookContact"
                  src={getImage("svg/facebookIcon.svg", "facebookContact")}
                />
                <div className="media-body">
                  <p className="mt-3"> dkodkfo@dm.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border rounded-pill shadow p-1 mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <img
                  alt="instagramIcon"
                  className="instagram_icon mt-3"
                  id="instagramContact"
                  src={getImage("svg/instagramIcon.svg", "instagramContact")}
                />
                <div className="media-body">
                  <p className="mt-3"> dkodkfo@instagram.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border rounded-pill shadow p-1 mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <FontAwesomeIcon icon={faPhone} className="mt-3" />
                <div className="media-body">
                  <p className="mt-3">+995 595 595</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border rounded-pill shadow p-1 mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <FontAwesomeIcon icon={faEnvelope} className="mt-3" />
                <div className="media-body">
                  <p className="mt-3">georgiaAviation@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="google_map">
            <iframe
              src="https://maps.google.com/maps?q=tbilisi&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
