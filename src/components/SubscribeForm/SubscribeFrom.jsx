import React from "react";
import ButtonComp from "../button/Button.comp";
import "./subsribe-form.scss";
import {
    AiOutlineInstagram,
    AiFillTwitterCircle,
} from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
const SubscribeFrom = () => {
    return (
        <div className="sub-form-footer abs-centre">
            <div className="ft-container">
                <h1 className="adfe abs-centre">
                    Subscribe To Get Offers In Your Inbox
                </h1>
                <div className="abs-centre ft-inp-wrp">
                    <input
                        className="wessa"
                        type="text"
                        placeholder="Your Email Address..."
                    />
                    <ButtonComp classes="gsde" children="Subscribe" />
                </div>
                <div className="social-handler">
                    <a href="https://www.instagram.com" className="paoew abs-centre">
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://www.twitter.com"  className="paoew abs-centre">
                        <AiFillTwitterCircle />
                    </a>
                    <a href="https://www.facebook.com"  className="paoew abs-centre">
                        <FaFacebookF />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SubscribeFrom;
