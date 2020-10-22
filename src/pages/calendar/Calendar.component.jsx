import "./Calendar.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import CalendarGroup from "./CalendarGroup";
import Footer from "../../footer/Footer.component";
import { backgroundColor } from "../catalog/Catalog.component";

class Calendar extends Component {
  render() {
    const { auth } = this.props;

    let calendarList;
    console.log(this.props.reduxCalendar.calendar);
    if (this.props.reduxCalendar.calendar !== null) {
      const calendarArr = Object.values(this.props.reduxCalendar.calendar);
      const calendarIds = Object.keys(this.props.reduxCalendar.calendar);
      calendarList = calendarArr.map((item, index) => (
        <div className="col mt-5 px-md-4 ml-5">
          <CalendarGroup
            name={item.name}
            month={item.month}
            day={item.day}
            year={item.year}
            text={item.text}
            key={index}
            id={calendarIds[index]}
            auth={auth}
          />
        </div>
      ));
    }

    return (
      <div style={backgroundColor}>
        <div className="calendar_container">
          <div className="row mx-md-n4">{calendarList}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return { reduxCalendar: reduxStore.siteData.calendar };
};

export default connect(mapStateToProps)(Calendar);
