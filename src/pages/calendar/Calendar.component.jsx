import React, { Component } from "react";
import Footer from "../../footer/Footer.component";
import { backgroundColor } from "../catalog/Catalog.component";
import CalendarGroup from "./CalendarGroup";
import "./Calendar.styles.css";
import firebase from "firebase";
import "../../firebase/Firebase.config";

class Calendar extends Component {
  componentDidMount() {
    // firebase GET method
    const dbRef = firebase.database().ref("calendar");

    dbRef.on("value", snapshot => {
      console.log(snapshot.val());
    });
    // save to Redux store ( not this.setState() )
    // console.log() every step
    // take the payload (snapshot value) and save to component and then redux store
  }
  render() {
    const { calendar, auth } = this.props;
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
          auth={auth}
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