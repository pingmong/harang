import React from 'react';
import './Bar.css';

const Bar = () => {
    return (
        <div className="top-bar">
            <img src="../../image/logo.jpg" alt="Logo" className="logo" />
            <p className="login-text">로그인</p>
            <div className="menu-icon"></div>
        </div>
    );
};

export default Bar;
