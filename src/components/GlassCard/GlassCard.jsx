import React from "react";

import "./Styles/GlassCard.css";

import Button from "../Button/Button";

const GlassCard = ({card_title, desc, button}) => {
    return (
        <div className="GlassCard">
            <div className="card-info-container">
                <h1 className="card-title">
                    { card_title }
                </h1>
                <p className="desc">
                    { desc }
                </p>
            </div>
        </div>
    );
}

export default GlassCard;