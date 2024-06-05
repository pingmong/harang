import React from 'react';
import './Login.css';
import account from '../../../assets/icon/account_circle.svg';

const Login = () => {
    return (
        <div className="login-section">
            <div className="login-header">
                <div className="login-text">
                    <p className="login-prompt">맞춤정보 제공을 위해 로그인 해 주세요</p>
                    <div className="login-options">
                        <button className="login-option">아이디 찾기</button>
                        <p className="divider">ㅣ</p>
                        <button className="login-option">비밀번호 찾기</button>
                        <p className="divider">ㅣ</p>
                        <button className="login-option">회원가입</button>
                    </div>
                </div>
                <div className="account">
                    <button className="account-button">
                    <img src={account} alt="Account" className="account-circle" />
                </button>
                </div>
            </div>
            <p className="explore-title">국립한밭대학교 둘러보기</p>
            <div className="explore-section">
                <button className="explore-action">Game Start!</button>
            </div>
        </div>
    );
};

export default Login;
