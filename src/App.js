import React from 'react';
import Header from './components/header/Header';
import Bar from './components/main/bar/Bar';
import Login from './components/main/login/Login';
import Food from './components/main/food/Food';
import Notice from './components/main/notice/Notice';
import Schedule from './components/main/schedule/Schedule';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
    return (
        <div className="frame">
            <Header />
            <Bar />
            <Login />
            <Food />
            {/*<Schedule />*/}
            {/*<Notice />*/}
            {/*<Footer />*/}
        </div>
    );
};

export default App;
