import React from "react";

const YesNoSlider = ({selectedOption}) => {

    return (
        <div className="yesNoSlider">

           <button className={ selectedOption ? "selected" : "" }>Yes</button>
           <button className={ !selectedOption ? "selected" : "" }>No</button>

        </div>
    )
};

export default YesNoSlider;