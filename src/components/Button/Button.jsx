import React from "react";

import './Style/Button.css'

const STYLES = [
    "button__primary__solid",
    "button__warning__solid",
    "button__danger__solid",
    "button__success__solid",

    "button__primary__outline",
    "button__warning__outline",
    "button__danger__outline",
    "button__success__outline"
]

const SIZES = [
    "button__small",
    "button__medium",
    "button__large"
]

const Button = ( { children, button_type ,button_style, button_size } ) => {

    const checkButtonStyle = STYLES.includes(button_style) ? button_style : STYLES[0];
    const checkButtonSize  = SIZES.includes(button_size) ? button_size : SIZES[0];

    return (
        <button 
        className = { `button ${checkButtonStyle} ${checkButtonSize}` }
        type = { button_type }
        >
            { children }
        </button>
    );
}

export default Button;