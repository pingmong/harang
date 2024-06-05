import React from 'react';
import logo from '../../../assets/images/logo.svg';
import menu from '../../../assets/icon/menu.svg';

import './Bar.css';

const Bar = () => {
    return (
        <div className="top-bar">
            <img src={logo} alt="Logo" className="logo" />
            <button className="login-button">로그인</button>
            <button className="menu-button">
                <img src={menu} alt="Menu" className="menu-icon" />
            </button>
        </div>
    );
};

export default Bar;
