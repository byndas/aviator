import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


class CalendarGropup extends Component {
  render() {
    const { name, month, text, day, year, auth } = this.props;
    return (
      <div className="calendar_card mt-5 mb-5">
        <div className="card__side card__side--front card__side--front-1">
          <h4 className="calendar__month">
            <span>{month}</span>
          </h4>
          <div className="calendar_day">
            <span>{day}</span>
          </div>
          <div className="calendar_year">
            <span>{year}</span>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="container mt-5">
            <h3 className="font-italic">{name}</h3>
            <p className="font-italic">{text}</p>
          </div>
          { auth && <div className='float-right'> 
                      <FontAwesomeIcon className='icons' icon={faEdit}/>
                      <FontAwesomeIcon className='icons' icon={faTrash}/>
                    </div> }
        </div>
      </div>
    );
  }
}

export default CalendarGropup;
