import React, { Component } from "react";
import Footer from "../footer/Footer.component";
import { backgroundColor } from "../catalog/Catalog.component";
import NewsGroup from "./NewsGroup.component";
import "./News.styles.css";
import firebase from "firebase";
import "../firebase/Firebase.config";

class News extends Component {
  componentDidMount() {
    const dbRef = firebase.database().ref("news");

    dbRef.on("value", snapshot => {
      // save to Redux store ( not this.setState() )
      console.log(snapshot.val());
    });
  }
  render() {
    const { news } = this.props;
    const newsList = news.map(nw => (
      <NewsGroup
        name={nw.name}
        title={nw.title}
        text={nw.text}
        img={nw.img}
        key={nw.id}
        id={nw.id}
      />
    ));
    return (
      <div style={backgroundColor}>
        <h1 className="text-center font-italic heading">News</h1>
        <div className="container">
          {newsList}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
