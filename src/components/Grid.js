import React from "react";

const Grid = () => {

    const horizontalGridLine = (y) => {
        return <path d={`M 10,${y} L 800,${y}`} fill="none" stroke="#AADDEE" strokeWidth="2" key={"horizontalGridLine" + y} />;
    }

    const verticalGridLine = (x) => {
        return <path d={`M ${x},10 L ${x},800`} fill="none" stroke="#AADDEE" strokeWidth="2" key={"verticalGridLine" + x} />;
    }

    const Line = ({xStart, yStart, xEnd, yEnd, color}) => {
        return (
            <path d={`M ${xStart},${yStart} L ${xEnd},${yEnd}`} fill="none" stroke={color} strokeWidth="5" key={"line_" + xStart + "," + yStart + "_" + xEnd + "," + yEnd} />
        );
    }

    const LineWithArrows = ({xStart, yStart, xEnd, yEnd, color}) => {

        const slope = (yEnd - yStart) / (xEnd - xStart);

        // swap left and right points if needed so that (xEnd, yEnd) is on the right
        if (xEnd < xStart)
            {
                let xTemp = xStart;
                let yTemp = yStart;

                xStart = xEnd;
                yStart = yEnd;

                xEnd = xTemp;
                yEnd = yTemp;
            }

        return (
            <>
                <polygon points={`${xStart},${yStart} ${xStart + 10},${yStart + 10} ${xStart + 10},${yStart - 10}`} fill={color} />
                <Line xStart={xStart} yStart={yStart} xEnd={xEnd} yEnd={yEnd} color={color} />;
                <polygon points={`${xEnd},${yEnd} ${xEnd - 10},${yEnd + 10} ${xEnd - 10},${yEnd - 10}`} fill={color} />
            </>
        );
    }

    const xAxis = (y) => {
        return <LineWithArrows xStart="0" yStart={y} xEnd="800" yEnd={y} color="#99CCDD" />;
    }

    const yAxis = (x) => {
        return <LineWithArrows xStart={x} yStart="0" xEnd={x} yEnd="800" color="#99CCDD" />;
    }

    // convert from grid coordinates to actual SVG coordinates!

    return (
        <svg viewBox="0 0 800 800">
            {[...Array(20)].map((item, i) => horizontalGridLine(10 + 50 * i))}
            {[...Array(20)].map((item, i) => verticalGridLine(10 + 50 * i))}
            {xAxis(410)}
            {yAxis(410)}

            <LineWithArrows xStart={50} yStart={20} xEnd={300} yEnd={350} color="#CC6699" />;
            <LineWithArrows xStart={650} yStart={200} xEnd={40} yEnd={100} color="#CC6699" />;
            <LineWithArrows xStart={700} yStart={400} xEnd={700} yEnd={60} color="#CC6699" />;
            <LineWithArrows xStart={500} yStart={150} xEnd={40} yEnd={150} color="#CC6699" />;
        </svg>
    )
}

export default Grid;