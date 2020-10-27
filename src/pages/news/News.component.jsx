import "./News.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import PagePosts from "../PagePosts.component";
import AdminForm from "../AdminForm.component";
import Footer from "../../footer/Footer.component";
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
  constructor(props) {
    super(props);
    // state controls form inputs
    this.state = null;

    this.editPostInputs = this.editPostInputs.bind(this);
  }

  editPostInputs(postObj) {
    this.setState(postObj);
    console.log("News.component STATE", this.state);
  }

  static contextType = LanguageContext;

  render() {
    const { auth, reduxNews } = this.props;
    const { language } = this.context;
    const { News } = translate[language];

    let newsList;

    if (reduxNews !== null) {
      const newsIds = Object.keys(reduxNews).reverse();
      const newsArr = Object.values(reduxNews);
      // collects all news items in redux store
      newsList = newsArr.reverse().map((item, index) => (
        // consider instead a PagePosts component
        <PagePosts
          auth={auth}
          editPostInputs={this.editPostInputs}
          name={item.name}
          title={item.title}
          text={item.text}
          src={item.src}
          key={index}
          id={newsIds[index]}
          pageName="news"
        />
      ));
    }
    return (
      <div style={backgroundColor}>
        <h1 className="text-center font-italic heading">{News}</h1>
        {auth && <AdminForm editObj={this.state} pageName="news" />}
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
  reduxNews: reduxStore.siteData.news
});

export default connect(mapStateToProps)(News);
