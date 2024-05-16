import React from 'react';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className="content-section">
            <div className="content-header">
                <p>학사 일정</p>
                <button className="expand-icon">+</button>
            </div>
            <div className="card schedule-card">
                <div className="card-header">학부</div>
                <p className="event-title">05.05 어린이날</p>
                <p className="event-details">05.06 어린이날 대체공휴일</p>
                <p className="event-details">05.14 제1학기 수업일수 2/3선</p>
            </div>
            <div className="card schedule-card">
                <div className="card-header">대학원</div>
            </div>
        </div>
    );
};

export default Schedule;
