import React from 'react';
import './Food.css';
import food from '../../../assets/icon/restaurant.svg'
import add from '../../../assets/icon/add.svg'

const Food = () => {
    return (
        <div className="content-section">
            <div className="content-header">
                <div className="food-container">
                    <img src={food} alt="Food" className="food-icon"/>
                    <p>오늘의 학식</p>
                </div>
                <button className="expand-icon">
                    <img src={add} alt="Add" className="add-icon"/>
                </button>
            </div>
            <div className="food-cards">
                <div className="card food-card">
                    <div className="card-header">오늘의 학식</div>
                    <p className="meal-time">중식</p>
                    <p className="meal-details">백미밥, 조개탕, 닭볶음탕, 백순대볶음*초장, 생크림단호박샐러드, 배추김치, 셀프계란후라이, 식빵&딸기잼, 구운파래김/숭늉</p>
                </div>
                <div className="card food-card">
                    <div className="card-header">학생생활관</div>
                    <p className="meal-time">중식</p>
                    <p className="meal-details">잔치국수, 추가밥, 왕만두&초간장, 단무지부추무침, 배추김치, 냉미숫가루</p>
                </div>
            </div>
        </div>
    );
};

export default Food;
