import React from "react";

const ReviewSliderComp = ({ index, current, slide }) => {
    return (
        <div className={index === current ? "slide active" : "slide"}>
            {index === current && (
                <div className="abs-centre">
                    <img src={slide.image} alt="travmage" className="image" />
                    <div className="review-wrapper">
                        <div className="review">{slide.review}</div>
                        <div className="name">- {slide.name}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewSliderComp;
