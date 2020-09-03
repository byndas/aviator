import React, { Component } from "react";
import Footer from "../footer/Footer.component";
import { backgroundColor } from "../catalog/Catalog.component";
import CalendarGroup from "./CalendarGroup.component";
import "./Calendar.style.css";

class Calendar extends Component {
  render() {
    const { calendar } = this.props;
    const calendarGroup = calendar.map(cl => (
      <div className="col mt-5 px-md-4 ml-5">
        <CalendarGroup
          name={cl.name}
          month={cl.month}
          day={cl.day}
          year={cl.year}
          text={cl.text}
          key={cl.id}
          id={cl.id}
        />
      </div>
    ));
    return (
      <div style={backgroundColor}>
        <div className="calendar_container">
          <div className="row mx-md-n4">{calendarGroup}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Calendar;
