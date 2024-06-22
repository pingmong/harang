import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-links">
                <p className="footer-link">개인정보처리방침</p>
                <p className="footer-divider">ㅣ</p>
                <p className="footer-link">찾아오시는 길</p>
                <p className="footer-divider">ㅣ</p>
                <p className="footer-link">입학안내</p>
                <p className="footer-divider">ㅣ</p>
                <p className="footer-link">발전기금</p>
            </div>
            <div className="campus-info">
                {/*<p className="campus">유성덕명캠퍼스</p>*/}
                {/*<p className="address">34518 대전광역시 유성구 동서대로 125(덕명동)</p>*/}
                {/*<p className="contact">Tel. 042-821-1114</p>*/}
                {/*<p className="contact">Fax. 042-825-5395</p>*/}
                {/*<p className="campus">대덕산학융합캠퍼스</p>*/}
                {/*<p className="address">34014 대전광역시 유성구 테크노1로 75(관평동)</p>*/}
                {/*<p className="contact">Tel. 042-939-4701</p>*/}
                {/*<p className="contact">Fax. 042-939-4705</p>*/}

            </div>
        </div>
    );
};

export default Footer;
