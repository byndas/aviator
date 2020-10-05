import "./News.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../footer/Footer.component";
import NewsGroup from "./NewsGroup.component";
import NewsForm from "./NewsForm";
import { LanguageContext } from "../../context/LanguageContext";
import { backgroundColor } from "../catalog/Catalog.component";
import { deleteNews } from "../../redux/news/news.actions";

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
  render() {
    const { auth } = this.props;
    const { language } = this.context;
    const { News } = translate[language];

    let newsList;
    console.log(this.props.siteData.news);
    if (this.props.siteData.news !== null) {
      const newsArr = Object.values(this.props.siteData.news);
      const newsIds = Object.keys(this.props.siteData.news);

      newsList = newsArr
        .reverse()
        .map((nw, index) => (
          <NewsGroup
            name={nw.name}
            title={nw.title}
            text={nw.text}
            src={nw.src}
            id={newsIds[index]}
            auth={auth}
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

const mapStateToProps = reduxStore => {
  return { siteData: reduxStore.siteData };
};

const mapDispatchToProps = dispatch => ({
  // propName: actionObjPayload => dispatch(actionCreator(actionObjPayload))
  deleteNews: newsId => dispatch(deleteNews(newsId))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
