import React from 'react';
import './Food.css';
import food from '../../../assets/icon/restaurant.svg'
import add from '../../../assets/icon/add_black.svg'
import right from "../../../assets/icon/right_arrow.svg";
import left from "../../../assets/icon/left_arrow.svg"

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
                <div className="card-food-card">
                    <div className="food-card-header-left">
                        <button className="arrow-button">
                            <img src={left} alt="Left" className="arrow-icon"/>
                        </button>
                        학생 식당
                    </div>
                    <div className="meal-box">
                        <p className="meal-time">중식</p>
                        <p className="meal-details">백미밥, 조개탕, 닭볶음탕, 백순대볶음*초장, 생크림단호박샐러드, 배추김치, 셀프계란후라이, 식빵&딸기잼,
                            구운파래김/숭늉</p>
                    </div>
                </div>
                <div className="card-food-card">
                    <div className="food-card-header-right">
                        학생생활관
                        <button className="arrow-button">
                            <img src={right} alt="Right" className="arrow-icon"/>
                        </button>
                    </div>
                    <div className="meal-box">
                        <p className="meal-time">중식</p>
                        <p className="meal-details">
                            잔치국수, 추가밥<br/>
                            왕만두&초간장<br/>
                            단무지부추무침<br/>
                            배추김치<br/>
                            &lt;냉미숫가루&gt;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;
