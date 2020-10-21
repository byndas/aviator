import React from "react";
import "./SearchResults.styles.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { reduxStore, searchInput } = this.props;

    console.log("SEARCH RESULTS", searchInput);

    let postResults;

    if (reduxStore !== null) {
      if (typeof reduxStore !== "undefined") {
        console.log("REDUX STORE", reduxStore);
        const siteIds = Object.keys(reduxStore);
        const siteArr = Object.values(reduxStore);
        // collects all items in redux store
        postResults = siteArr
          // reverse mis-aligns firebase & redux objects
          // .reverse()
          .map((item, index) => (
            <div
              id={siteIds[index]}
              name={item.name}
              title={item.title}
              text={item.text}
              src={item.src}
              key={index}
            ></div>
          ));
      }
    }
    // return <div id="container">{postResults}</div>;
    return <div id="container">{searchInput}</div>;
  }
}

export default SearchResults;
