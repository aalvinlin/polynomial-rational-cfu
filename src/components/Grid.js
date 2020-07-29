import React from "react";

const Grid = () => {

    const horizontalGridLine = (y) => {
        return <path d={`M 10,${y} L 800,${y}`} fill="none" stroke="#AADDEE" strokeWidth="2" key={"horizontalGridLine" + y} />;
    }

    const verticalGridLine = (x) => {
        return <path d={`M ${x},10 L ${x},800`} fill="none" stroke="#AADDEE" strokeWidth="2" key={"verticalGridLine" + x} />;
    }

    const xAxis = (y) => {
        return (
            <>
                <polygon points={`0,${y} 10,${y + 10} 10,${y - 10}`} fill="#99CCDD" />
                <path d={`M 10,${y} L 800,${y}`} fill="none" stroke="#99CCDD" strokeWidth="5" key="xAxis" />
                <polygon points={`800,${y} 790,${y + 10} 790,${y - 10}`} fill="#99CCDD" />
            </>
        );
    }

    const yAxis = (x) => {
        return (
            <>
                <polygon points={`${x},0 ${x + 10},10 ${x - 10},10`} fill="#99CCDD" />
                <path d={`M ${x},10 L ${x},800`} fill="none" stroke="#99CCDD" strokeWidth="5" key="yAxis" />
                <polygon points={`${x},800 ${x + 10},790 ${x - 10},790`} fill="#99CCDD" />
            </>
        );
    }

    return (
        <svg viewBox="0 0 800 800">
            {[...Array(20)].map((item, i) => horizontalGridLine(10 + 50 * i))}
            {[...Array(20)].map((item, i) => verticalGridLine(10 + 50 * i))}
            {xAxis(410)}
            {yAxis(410)}
        </svg>
    )
}

export default Grid;