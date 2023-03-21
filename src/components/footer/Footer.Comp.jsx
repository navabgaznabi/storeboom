import React from 'react';
import SubscribeFrom from '../SubscribeForm/SubscribeFrom';
import "./footer.scss"

const FooterComp = () => {
    return (
        <div className='footer-wrapper'>
            <SubscribeFrom/>
            <p className='copy-write-section abs-centre'>
            Copyright © 2023 T-Shirts StoreBoom | Created by Navab Gaznabi
            </p>
        </div>
    );
}

export default FooterComp;
