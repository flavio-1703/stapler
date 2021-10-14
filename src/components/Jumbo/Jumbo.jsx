import React from "react";

import "./Styles/Jumbo.css";

import Button from "../Button/Button";

const Jumbo = () => {

    return (
        <div className="Jumbo">
            <div className="jumbo-container">
                <div className="jumbo-info">
                    <h1 className="jumbo-info-title">
                        Ratchet and Clank: A Rift Apart
                    </h1>
                    <p className="jumbo-info-undertext">
                    Ratchet & Clank is a series of action platformer and third-person shooter video games. 
                    The franchise was created and developed by Insomniac Games and published by Sony Interactive Entertainment for PlayStation consoles.
                    </p>
                    <Button className="button" button_size="button__large">Learn More</Button>
                </div>
                <div className="jumbo-display">
                    <img className="box-image" src="https://zapagaming.co.za/wp-content/uploads/2021/02/RACRA_ST_PACKSHOT_PS5_RT_FPB.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Jumbo;