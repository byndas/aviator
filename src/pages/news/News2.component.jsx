import "./News.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../footer/Footer.component";
import NewsGroup from "./NewsGroup.component";
import NewsForm from "./NewsForm";
import { LanguageContext } from "../../context/LanguageContext";
import { backgroundColor } from "../catalog/Catalog.component";
import { deleteNews } from "../../redux/news/news.actions";
import { selectNews } from "../../redux/news/news.selectors";

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
  render() {
    const { auth, reduxNews } = this.props;
    const { language } = this.context;
    const { News } = translate[language];

    console.log(this.props.siteData.news);

    let newsList;

    // if Redux news is not empty
    if (reduxNews.length) {
      // if (this.props.siteData.news !== null) {
      const newsIds = Object.keys(this.props.reduxNews);
      const newsArr = Object.values(this.props.reduxNews);

      newsList = newsArr
        .reverse()
        .map((item, index) => (
          <NewsGroup
            name={item.name}
            title={item.title}
            text={item.text}
            src={item.src}
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

// const mapStateToProps = reduxStore => {
//   return { siteData: reduxStore.siteData };
// };

const mapStateToProps = reduxStore => {
  return { reduxNews: selectNews(reduxStore) };
};

const mapDispatchToProps = dispatch => ({
  // propName: actionObjPayload => dispatch(actionCreator(actionObjPayload))
  deleteNews: newsId => dispatch(deleteNews(newsId))
});

export default connect(mapStateToProps, mapDispatchToProps)(News2);
