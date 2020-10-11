import "./News.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import NewsGroup from "./NewsGroup.component";
import NewsForm from "./NewsForm";
import Footer from "../../footer/Footer.component";
import firebase from "firebase";
import { LanguageContext } from "../../context/LanguageContext";
import { backgroundColor } from "../catalog/Catalog.component";
import { editPost } from "../../redux/editPost/editPost.actions";
import {
  displayNews,
  deleteNews,
  editNews
} from "../../redux/news/news.actions";

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
  constructor(props) {
    super(props);
  }
  static contextType = LanguageContext;

  componentDidMount() {
    firebase
      .database()
      .ref("base")
      .child("news")
      .on("value", snapshot => {
        // news page render dispatches snapshot of firebase.news to redux
        // listens to firebase news for changes, then updates redux store
        this.props.displayNews(snapshot.val());

        console.log("snapshot val(): ", snapshot.val());
      });
  }
  render() {
    const { auth, reduxNews, deleteNews, editNews, reduxEditPost } = this.props;
    const { language } = this.context;
    const { News } = translate[language];

    let newsList;

    console.log("reduxNews:", reduxNews);
    console.log("reduxEditPost:", reduxEditPost);

    if (reduxNews !== null) {
      const newsIds = Object.keys(reduxNews);
      const newsArr = Object.values(reduxNews);
      // console.log("newsIds & newsARr:", newsIds, newsArr);
      // collects all news items in redux store
      newsList = newsArr
        // reverse mis-aligns firebase & redux objects
        // .reverse()
        .map((item, index) => (
          <NewsGroup
            id={newsIds[index]}
            key={index}
            name={item.name}
            title={item.title}
            text={item.text}
            src={item.src}
            deleteNews={deleteNews}
            editPost={editPost}
            auth={auth}
          />
        ));
    } else {
      // add jsx loading html
      // newsList = "LOADING...";
    }
    // console.log("4444reduxEditPost", this.props.reduxEditPost);
    return (
      <div style={backgroundColor}>
        <h1 className="text-center font-italic heading">{News}</h1>
        {auth && (
          <NewsForm
            editPost={editPost}
            editNews={editNews}
            reduxEditPost={reduxEditPost}
          />
        )}
        <div className="container">
          {newsList}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxNews: reduxStore.news,
  reduxEditPost: reduxStore.editPost
});

export default connect(mapStateToProps, {
  displayNews,
  deleteNews,
  editNews,
  editPost
})(News);
