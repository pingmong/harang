import React from 'react';
import logo from '../../../assets/images/logo.jpg';

import './Bar.css';

const Bar = () => {
    return (
        <div className="top-bar">
            <img src={logo} alt="Logo" className="logo" />
            <button className="login-button">로그인</button>
            <div className="menu-icon"></div>
        </div>
    );
};

export default Bar;
