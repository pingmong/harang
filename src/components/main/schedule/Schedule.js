import React from 'react';
import './Schedule.css';
import calendar from '../../../assets/icon/calendar_month.svg';
import line from '../../../assets/icon/line.svg';
import whiteAdd from '../../../assets/icon/add_white.svg';


const Schedule = () => {
    return (
        <div className="content-section">
            <div className="schedule-header">
                <img src={calendar} alt="Calendar Month" className="calendar-icon" />
                <p>학사 일정</p>
            </div>
            <div className="card-schedule-card">
                <div className="card-header">
                    <button className="header-button schedule">학부</button>
                    <img src={line} alt="Line" className="line-images" />
                    <button className="header-button">대학원</button>
                    <button className="schedule-add-button">
                        <img src={whiteAdd} alt="White Add" className="white-add-icon" />
                    </button>
                </div>
                <p className="event-title">05.05 어린이날</p>
                <p className="event-details">05.06 어린이날 대체공휴일</p>
                <p className="event-details">05.14 제1학기 수업일수 2/3선</p>
            </div>
        </div>
    );
};

export default Schedule;
