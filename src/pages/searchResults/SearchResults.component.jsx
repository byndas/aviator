import React from "react";
import "./SearchResults.styles.css";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.pageSearch = this.pageSearch.bind(this);
  }
  pageSearch(reduxState, searchInput, finalResultArr) {
    if (searchInput !== "") {
      if (finalResultArr.length < 20) {
        console.log("REDUX STORE", reduxState);
        const pageMatches = [];
        const pageIds = Object.keys(reduxState);
        const pageValues = Object.values(reduxState);
        // collects redux page items that include the search input value
        for (let i = 0; i < pageValues.length; i++) {
          if (pageValues[i].name.includes(searchInput)) {
            pageMatches.push(pageValues[i]);
            continue;
          }
          if (pageValues[i].title.includes(searchInput)) {
            pageMatches.push(pageValues[i]);
            continue;
          }
          if (pageValues[i].text.includes(searchInput)) {
            pageMatches.push(pageValues[i]);
            continue;
          }
        }
        let pageMatchDivArray = pageMatches.map((item, index) => (
          <div id={pageIds[index]} key={pageIds[index]}>
            {item.name}
            {item.title}
            {item.text}
            <img src={item.src} />
          </div>
        ));
        console.log("pageMatchDivArray", pageMatchDivArray);
        finalResultArr.push(...pageMatchDivArray);
      }
    }
  }
  render() {
    const { entireRedux, searchInput } = this.props;
    const finalSearchResults = [];

    if (entireRedux !== null) {
      this.pageSearch(entireRedux.news, searchInput, finalSearchResults);
      this.pageSearch(entireRedux.gallery, searchInput, finalSearchResults);
      this.pageSearch(entireRedux.projects, searchInput, finalSearchResults);
      console.log("FINAL SEARCH RESULT", finalSearchResults);
    }
    return <div id="container">{finalSearchResults}</div>;
  }
}
const mapStateToProps = reduxState => ({
  entireRedux: reduxState.siteData
});

export default connect(mapStateToProps, null)(SearchResults);
