import React, { Component } from "react";

class NewsGroup extends Component {
  render() {
    const { img, title, name, text, id } = this.props;
    return (
      <div className="card mb-5 project_content">
        <h5 className="card-header  text-center">{name}</h5>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text text-truncate">{text}</p>
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More...
          </button>
        </div>
        <div className="collapse" id={id}>
          <img src={img} className="ml-4" alt="..." />
          <div className="card-body">{text}</div>
        </div>
      </div>
    );
  }
}

export default NewsGroup;
