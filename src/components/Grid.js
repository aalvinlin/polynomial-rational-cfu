import React from "react";

const Grid = ({xMax, yMax, horizontalSpacing, verticalSpacing, horizontalPadding, verticalPadding, verticalAsymptotes, horizontalOrObliqueAsymptote, curvedFunctionParts}) => {

    const gridLineColor = "#AADDEE";
    const axisColor = "#99CCDD";

    let totalHorizontalGridLines = Math.floor((yMax - verticalPadding) / verticalSpacing) + 1;
    let totalVerticalGridLines = Math.floor((xMax - horizontalPadding) / horizontalSpacing) + 1;

    // center axes on grid; don't allow different numbers of squares to the left and to the right of the y-axis
    if (totalHorizontalGridLines % 2 === 0)
        { totalHorizontalGridLines -= 1; }
    
    if (totalVerticalGridLines % 2 === 0)
        { totalVerticalGridLines -= 1; }

    const horizontalLineEnd = horizontalPadding + (totalHorizontalGridLines - 1) * horizontalSpacing;
    const verticalLineEnd = verticalPadding + (totalVerticalGridLines - 1) * verticalSpacing;

    const originX = horizontalPadding + (totalHorizontalGridLines - 1) / 2 * horizontalSpacing;
    const originY = verticalPadding + (totalVerticalGridLines - 1) / 2 * verticalSpacing;

    console.log(origin);



    const HorizontalGridLine = ({y}) => {
        return <Line xStart={horizontalPadding} yStart={y} xEnd={horizontalLineEnd} yEnd={y} color={gridLineColor} width={2} />;
    }

    const VerticalGridLine = ({x}) => {
        return <Line xStart={x} yStart={verticalPadding} xEnd={x} yEnd={verticalLineEnd} color={gridLineColor} width={2} />;
    }

    const Line = ({xStart, yStart, xEnd, yEnd, color, width=5, strokeDasharray=null}) => {
        return (
            <path d={`M ${xStart},${yStart} L ${xEnd},${yEnd}`} fill="none" stroke={color} strokeWidth={width} strokeDasharray={strokeDasharray} key={"line_" + xStart + "," + yStart + "_" + xEnd + "," + yEnd} />
        );
    }

    const LineWithArrows = ({xStart, yStart, xEnd, yEnd, color, width=5, strokeDasharray=null}) => {

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
                <Line xStart={xStart} yStart={yStart} xEnd={xEnd} yEnd={yEnd} color={color} width={width} strokeDasharray={strokeDasharray} />;
                <polygon points={`${rightArrowTipX},${rightArrowTipY} ${rightArrowBaseAngle1X},${rightArrowBaseAngle1Y} ${rightArrowBaseAngle2X},${rightArrowBaseAngle2Y}`} fill={color} />
            </>
        );
    }

    const XAxis = () => {

        const verticalOffset = horizontalPadding + Math.floor((totalHorizontalGridLines - 1) / 2) * horizontalSpacing;
        
        return <LineWithArrows xStart={horizontalPadding} yStart={verticalOffset} xEnd={horizontalLineEnd} yEnd={verticalOffset} color={axisColor} width={5} />;
    }

    const YAxis = () => {

        const horizontalOffset = verticalPadding + Math.floor((totalVerticalGridLines - 1) / 2) * verticalSpacing;

        return <LineWithArrows xStart={horizontalOffset} yStart={verticalPadding} xEnd={horizontalOffset} yEnd={verticalLineEnd} color={axisColor} width={5} />;
    }

    const VerticalAsymptote = ({x}) => {

        const horizontalOffset = originX + x * horizontalSpacing;

        return <LineWithArrows xStart={horizontalOffset} yStart={verticalPadding} xEnd={horizontalOffset} yEnd={verticalLineEnd} color={"#999999"} strokeDasharray={"20, 10"} width={7} />;
    }
    
    const HorizontalOrObliqueAsymptote = ({equation}) => {

        let [slope, yIntercept] = equation;

        // horizontal asymptote
        if (slope === 0)
            {
                const verticalOffset = originY - yIntercept * verticalSpacing;

                return <LineWithArrows xStart={horizontalPadding} yStart={verticalOffset} xEnd={horizontalLineEnd} yEnd={verticalOffset} color={"#999999"} strokeDasharray={"20, 10"} width={7} />;
            }
        
        // oblique asymptote
        else
            {
                return null;
            }
    }

    return (
        <svg viewBox={`0 0 ${xMax} ${yMax}`}>

            {[...Array(totalHorizontalGridLines)].map((item, i) => <HorizontalGridLine y={horizontalPadding + horizontalSpacing * i} key={"horizontalGridLine_" + i} />)}
            {[...Array(totalVerticalGridLines)].map((item, i) => <VerticalGridLine x={verticalPadding + verticalSpacing * i} key={"verticalGridLine_" + i} />)}

            <XAxis />
            <YAxis />

            {verticalAsymptotes.map(x => <VerticalAsymptote x={x} />)}

            <HorizontalOrObliqueAsymptote equation={horizontalOrObliqueAsymptote} />

            {curvedFunctionParts.map(partData => {
                
                // user-specified coordinates
                let [xStart, yStart, xEnd, yEnd] = partData;

                // translate user coordinates into SVG coordinates by scaling by horizontalSpacing and verticalSpacing
                xStart = originX + xStart * horizontalSpacing;
                xEnd = originX + xEnd * horizontalSpacing;

                yStart = originY + yStart * verticalSpacing;
                yEnd = originY + yEnd * verticalSpacing;

                return <LineWithArrows xStart={xStart} yStart={yStart} xEnd={xEnd} yEnd={yEnd} color="#CC6699" key={"curvedFunctionPart_" + xStart + "_" + yStart + "_" + xEnd + "_" + yEnd} />;
            })}

        </svg>
    )
}

export default Grid;