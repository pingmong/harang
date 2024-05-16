import React from 'react';
import './Notice.css';

const Notice = () => {
    return (
        <div className="content-section">
            <div className="content-header">
                <p>학사 공지</p>
                <button className="expand-icon">+</button>
            </div>
            <div className="card notice-card">
                <div className="card-header">학사공지</div>
                <p className="notice-title">2024년 제 2차 국립대학육성사업 기간제근로자</p>
                <p className="notice-date">2024-04-26</p>
                <p className="notice-details">2024 졸업생 자기소개서 작성 특강(서류통과!)</p>
                <p className="notice-date">04.25</p>
                <p className="notice-details">국립한밭대학교 국가공무원(일반임기제)</p>
                <p className="notice-date">04.24</p>
            </div>
            <div className="card notice-card">
                <div className="card-header">공지사항</div>
            </div>
        </div>
    );
};

export default Notice;
