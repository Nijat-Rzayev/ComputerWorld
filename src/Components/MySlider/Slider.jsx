import React from 'react';
import "./Slider.css"
function Slider(props) {
    return (
        <div className="slide">
            {props.children}
        </div>
    );
}


export default Slider;
