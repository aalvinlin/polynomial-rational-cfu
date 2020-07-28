import React from "react";

const Grid = () => {

    const horizontalGridLine = <path d="M 0,0 L 800,0" fill="none" stroke="#666666" strokeWidth="5" />;

    return (
        <svg viewBox="0 0 800 800">
            {horizontalGridLine}
        </svg>
    )
}

export default Grid;