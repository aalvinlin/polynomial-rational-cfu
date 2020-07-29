import React from "react";

const Grid = () => {

    const horizontalGridLine = (y) => {
        return <path d={`M 10,${y} L 800,${y}`} fill="none" stroke="#AADDEE" strokeWidth="2" key={"horizontalGridLine" + y} />;
    }

    const verticalGridLine = (x) => {
        return <path d={`M ${x},10 L ${x},800`} fill="none" stroke="#AADDEE" strokeWidth="2" key={"verticalGridLine" + x} />;
    }

    return (
        <svg viewBox="0 0 800 800">
            {[...Array(20)].map((item, i) => horizontalGridLine(10 + 50 * i))}
            {[...Array(20)].map((item, i) => verticalGridLine(10 + 50 * i))}
        </svg>
    )
}

export default Grid;