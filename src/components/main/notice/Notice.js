import React from 'react';
import './Notice.css';
import notice from '../../../assets/icon/notice.svg';
import line from "../../../assets/icon/line.svg";
import whiteAdd from "../../../assets/icon/add_white.svg";

const Notice = () => {
    return (
        <div className="content-section">
            <div className="notice-header">
                <img src={notice} alt="Notice" className="notice-icon" />
                <p>학사 공지</p>
            </div>
            <div className="card-notice-card">
                <div className="card-header">
                    <button className="header-button notice">학사공지</button>
                    <img src={line} alt="Line" className="line-images"/>
                    <button className="header-button">공지사항</button>
                    <button className="notice-add-button">
                        <img src={whiteAdd} alt="White Add" className="white-add-icon"/>
                    </button>
                </div>
            </div>
            {/*<div className="card notice-card">*/}
            {/*<div className="card-header">공지사항</div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Notice;
