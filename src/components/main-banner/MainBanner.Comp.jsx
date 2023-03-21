import React from "react";

import ButtonComp from "../button/Button.comp";
import { useNavigate } from "react-router-dom";

import "./main-banner.scss";

const MainBannerComp = () => {
    const navigate = useNavigate();
    const shopNowHandler = () => {
        navigate("/shop");
    };
    return (
        <div className="background-img-banner abs-centre">
            <div className="main-banner-text">
                Look no further than our clothing store!
            </div>
            <div className="main-banner-button abs-centre">
                <ButtonComp buttonType="inverted" onClick={shopNowHandler}>
                    Shop Now
                </ButtonComp>
            </div>
        </div>
    );
};

export default MainBannerComp;
