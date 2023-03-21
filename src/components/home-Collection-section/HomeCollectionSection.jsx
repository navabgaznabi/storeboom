import React from "react";
import ButtonComp from "../button/Button.comp";
import { useNavigate } from "react-router-dom";
import "./HomeCollectionSection.scss";

const HomeCollectionSection = () => {
    const navigate = useNavigate();
    const allCollectionhandler = () => {
        return navigate("/shop/womens");
    };
    return (
        <>
            <div className="collection-section-wrapper with-margin">
                <div className="collection-bg"></div>
                <div className="coll-bg-img">
                    <img
                        src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-03.jpg"
                        alt=""
                    />
                </div>
                <div className="collection-content">
                    <p className="jshe">WOMEN</p>
                    <h1>Spring Summer Collection</h1>
                    <p className="jshe">
                        With the new collection, the focus has been on curating
                        versatile creations that are high on both comfort and
                        style and echoes the current mind space of fashion
                        shoppers. Whether it's working from home or working on
                        fitness, or just chilling out with friends and family,
                        the new collection has got you covered.
                    </p>
                    <ButtonComp
                    classes="wdt-btn"
                        onClick={allCollectionhandler}
                        children="See Whole Collection"
                    />
                </div>
            </div>
        </>
    );
};

export default HomeCollectionSection;