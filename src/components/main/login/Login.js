import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-section">
            <p className="login-prompt">맞춤정보 제공을 위해 로그인 해 주세요</p>
            <div className="login-options">
                <p className="login-option">아이디 찾기</p>
                <p className="divider">ㅣ</p>
                <p className="login-option">비밀번호 찾기</p>
                <p className="divider">ㅣ</p>
                <p className="login-option">회원가입</p>
            </div>
            <p className="explore-title">국립한밭대학교 둘러보기</p>
            <div className="explore-section">
                <button className="explore-action">Game Start!</button>
            </div>
        </div>
    );
};

export default Login;
