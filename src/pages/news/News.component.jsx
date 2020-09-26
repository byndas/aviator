import "./News.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../footer/Footer.component";
import NewsGroup from "./NewsGroup.component";
import NewsForm from "./NewsForm";
import "../../firebase/Firebase.config";
import firebase from "firebase";
import { LanguageContext } from "../../context/LanguageContext";
import { backgroundColor } from "../catalog/Catalog.component";

const translate = {
  Geo: {
    News: "სიახლეები"
  },
  Eng: {
    News: "News"
  },
  Rus: {
    News: "Новости"
  }
};

class News extends Component {
  static contextType = LanguageContext;
  // componentDidMount() {
  //   const dbRef = firebase.database().ref("news");

  //   dbRef.on("value", snapshot => {
  //     // save to Redux store ( not this.setState() )
  //     console.log(snapshot.val());
  //   });
  // }
  render() {
    const { auth, createNews, removeNews } = this.props;
    const { language } = this.context;
    const { News } = translate[language];

    let newsList;
    console.log(this.props.siteData.news);
    if (this.props.siteData.news !== null) {
      const newsArr = Object.values(this.props.siteData.news);
      const newsIds = Object.keys(this.props.siteData.news);

      newsList = newsArr.map((nw, i) => (
        <NewsGroup
          name={nw.name}
          title={nw.title}
          text={nw.text}
          src={nw.src}
          key={newsIds[i]}
          id={newsIds[i]}
          auth={auth}
          removeNews={removeNews}
        />
      ));
    } else {
      // add jsx loading html
      newsList = "LOADING...";
    }
    return (
      <div style={backgroundColor}>
        <h1 className="text-center font-italic heading">{News}</h1>
        {auth && <NewsForm createNews={createNews} />}
        <div className="container">
          {newsList}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return { siteData: reduxStore.siteData };
};

export default connect(mapStateToProps, null)(News);
