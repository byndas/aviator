import React from "react";
import Plane from "../images/1209image.jpg";
import backgroundImage from "../backgroundImage";
import "./about.styles.css";
import Footer from "../footer/footer.component";

function About() {
  return (
    <div>
      <div style={backgroundImage(Plane)}>
        <div className="container text-center">
          <h1 className="display-3 heading-secondary mt-5">about us</h1>
          <div className="jumbotron jumbotron-fluid shadow p-9 mb-2 bg-white mt-5  paragraph_background">
            <div className="container">
              <p className="lead font-weight-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                rem culpa voluptatum officiis. Harum autem, quas eum in
                veritatis, culpa ratione deleniti adipisci magnam fugit
                recusandae inventore iusto doloribus aspernatur. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Obcaecati,
                voluptas, minus suscipit eum expedita voluptatum aliquid ipsa
                labore odit consectetur, atque non veniam harum impedit esse.
                Vel illo tempora possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
