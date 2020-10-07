import "./News.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import NewsGroup from "./NewsGroup.component";
import NewsForm from "./NewsForm";
import Footer from "../../footer/Footer.component";
import firebase from "firebase";
import { LanguageContext } from "../../context/LanguageContext";
import { backgroundColor } from "../catalog/Catalog.component";
import { createNews } from "../../redux/news/news.actions";

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

class News2 extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    const newsFireRef = firebase
      .database()
      .ref("base")
      .child("news");

    newsFireRef.on("value", snapshot => {
      createNews(snapshot.val());
      console.log("snapshot val(): ", snapshot.val());
    });
  }
  render() {
    const { auth, reduxNews } = this.props;
    const { language } = this.context;
    const { News } = translate[language];

    let newsList;

    // if Redux news is not empty
    if (reduxNews !== null) {
      const newsIds = Object.keys(reduxNews);
      const newsArr = Object.values(reduxNews);

      newsList = newsArr
        .reverse()
        .map((item, index) => (
          <NewsGroup
            auth={auth}
            name={item.name}
            title={item.title}
            text={item.text}
            src={item.src}
            id={newsIds[index]}
            key={index}
          />
        ));
    } else {
      // add jsx loading html
      // newsList = "LOADING...";
    }
    return (
      <div style={backgroundColor}>
        <h1 className="text-center font-italic heading">{News}</h1>
        {auth && <NewsForm />}
        <div className="container">
          {newsList}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({ reduxNews: reduxStore.news });

export default connect(mapStateToProps, { createNews })(News2);
