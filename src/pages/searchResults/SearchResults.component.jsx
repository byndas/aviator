import React from "react";
import "./SearchResults.styles.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const reduxSiteData = this.props;

    let postResults;

    if (reduxSiteData !== null) {
      console.log("REDUX", reduxSiteData);
      const siteIds = Object.keys(reduxSiteData);
      const siteArr = Object.values(reduxSiteData);
      // collects all news items in redux store
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
    return <div id="container">{postResults}</div>;
  }
}

export default SearchResults;
