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
        const angle = Math.atan(slope);

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
        
        const arrowWidth = 10;
        const arrowLength = arrowWidth * 2;
        
        const rightArrowTipX = xEnd + arrowLength * Math.cos(angle);
        const rightArrowTipY = yEnd + arrowLength * Math.sin(angle);

        const rightArrowBaseAngle1X = xEnd + arrowWidth * Math.cos(angle + Math.PI / 2);
        const rightArrowBaseAngle1Y = yEnd + arrowWidth * Math.sin(angle + Math.PI / 2);

        const rightArrowBaseAngle2X = xEnd - arrowWidth * Math.cos(angle + Math.PI / 2);
        const rightArrowBaseAngle2Y = yEnd - arrowWidth * Math.sin(angle + Math.PI / 2);

        const leftArrowTipX = xStart - arrowLength * Math.cos(angle);
        const leftArrowTipY = yStart - arrowLength * Math.sin(angle);

        const leftArrowBaseAngle1X = xStart + arrowWidth * Math.cos(angle + Math.PI / 2);
        const leftArrowBaseAngle1Y = yStart + arrowWidth * Math.sin(angle + Math.PI / 2);

        const leftArrowBaseAngle2X = xStart - arrowWidth * Math.cos(angle + Math.PI / 2);
        const leftArrowBaseAngle2Y = yStart - arrowWidth * Math.sin(angle + Math.PI / 2);

        return (
            <>
                <polygon points={`${leftArrowTipX},${leftArrowTipY} ${leftArrowBaseAngle1X},${leftArrowBaseAngle1Y} ${leftArrowBaseAngle2X},${leftArrowBaseAngle2Y}`} fill={color} />
                <Line xStart={xStart} yStart={yStart} xEnd={xEnd} yEnd={yEnd} color={color} />;
                <polygon points={`${rightArrowTipX},${rightArrowTipY} ${rightArrowBaseAngle1X},${rightArrowBaseAngle1Y} ${rightArrowBaseAngle2X},${rightArrowBaseAngle2Y}`} fill={color} />
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