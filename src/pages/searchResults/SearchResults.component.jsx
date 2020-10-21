import React from "react";
import "./SearchResults.styles.css";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentWillReceiveProps(nextProps) {}
  render() {
    const { entireRedux, searchInput } = this.props;

    console.log("SEARCH RESULTS", searchInput);
    console.log("REDUX STORE", entireRedux);

    let postResults;

    if (entireRedux !== null) {
      const resultArr = [];

      const newsIds = Object.keys(entireRedux.news);
      const newsArr = Object.values(entireRedux.news);
      // collects all items in redux store
      for (let i = 0; i < newsArr.length; i++) {
        if (newsArr[i].title.includes(searchInput)) {
          resultArr.push(newsArr[i]);
          continue;
        }
        if (newsArr[i].name.includes(searchInput)) {
          resultArr.push(newsArr[i]);
          continue;
        }
        if (newsArr[i].text.includes(searchInput)) {
          resultArr.push(newsArr[i]);
          continue;
        }
      }

      postResults = resultArr
        // reverse mis-aligns firebase & redux objects
        // .reverse()
        .map((item, index) => (
          <div id={newsIds[index]} key={index}>
            {item.name}
            {item.title}
            {item.text}
            <img src={item.src} />
          </div>
        ));
      console.log("POST RESULTS", postResults);
    }
    return <div id="container">{postResults}</div>;
  }
}

const mapStateToProps = reduxState => ({
  entireRedux: reduxState.siteData
});

export default connect(mapStateToProps, null)(SearchResults);

// if one match, push it and move on to the next post

// combine all other pages into one giant array
// then concat that arrary
// then map over that array for final results
