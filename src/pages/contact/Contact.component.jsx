import "./Contact.styles.css";
import React from "react";
import Footer from "../../footer/Footer.component";
<<<<<<< Updated upstream
=======
import facebook from "../../images/svg/facebookIcon.svg";
import InstagramIcon from "../../images/svg/instagramIcon.svg";
import "./Contact.styles.css";
>>>>>>> Stashed changes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { backgroundColor } from "../catalog/Catalog.component";

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
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/svg%2FfacebookIcon.svg?alt=media&token=d4d52789-ab47-4b60-8e16-21a9140b6955"
                  }
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
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/svg%2FinstagramIcon.svg?alt=media&token=e0e1f356-e662-46b1-9f27-388d6d9e3dc6"
                  }
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
