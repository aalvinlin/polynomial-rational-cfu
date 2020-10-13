import React from "react";

const Grid = ({xMax, yMax, horizontalSpacing, verticalSpacing, horizontalPadding, verticalPadding, equationData }) => {

    let {verticalAsymptotes, horizontalOrObliqueAsymptote, zeroes, holes, curvedFunctionParts} = equationData;

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

    // smallest and largest x- and y-values that the user can see on the graph
    const xMaxValue = Math.floor((totalVerticalGridLines - 1) / 2);
    const xMinValue = -xMaxValue;

    const yMaxValue = Math.floor((totalHorizontalGridLines - 1) / 2);
    const yMinValue = -yMaxValue;
    
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

    const AsymptoteLine = ({xStart, yStart, xEnd, yEnd, color="#999999", width=7, strokeDasharray="20, 10"}) => {

        return <LineWithArrows xStart={xStart} yStart={yStart} xEnd={xEnd} yEnd={yEnd} color={color} strokeDasharray={strokeDasharray} width={width} />;
    }

    const VerticalAsymptote = ({x}) => {

        const horizontalOffset = originX + x * horizontalSpacing;

        return <AsymptoteLine xStart={horizontalOffset} yStart={verticalPadding} xEnd={horizontalOffset} yEnd={verticalLineEnd} />;
    }
    
    const HorizontalOrObliqueAsymptote = ({equation}) => {

        let [slope, yIntercept] = equation;

        // horizontal asymptote
        if (slope === 0)
            {
                const verticalOffset = originY - yIntercept * verticalSpacing;

                return <AsymptoteLine xStart={horizontalPadding} yStart={verticalOffset} xEnd={horizontalLineEnd} yEnd={verticalOffset} />;
            }
        
        // oblique asymptote
        else
            {
                let xStart, xEnd, yStart, yEnd;

                // use y=mx for now, ignoring the y-intercept

                // line will reach edges of graph on the left and right sides
                if (Math.abs(slope) < 1)
                    {
                        xStart = horizontalPadding;
                        xEnd = horizontalLineEnd;

                        yStart = originY - xMinValue * slope * verticalSpacing;
                        yEnd = originY - xMaxValue * slope * verticalSpacing;
                    }
                // line will reach edges of graph on the top and bottom sides
                else
                    {
                        yStart = verticalPadding;
                        yEnd = verticalLineEnd;

                        xStart = originX + (yMaxValue / slope) * horizontalSpacing;
                        xEnd = originX + (yMinValue / slope) * horizontalSpacing;
                    }
                
                return <AsymptoteLine xStart={xStart} yStart={yStart} xEnd={xEnd} yEnd={yEnd} />;
            }
    }

    const XIntercept = ({x}) => {

        const horizontalOffset = originX + x * horizontalSpacing;

        return <ellipse cx={horizontalOffset} cy={originY} rx="10" ry="10" fill={"#CC6699"} />
    }

    return (
        <svg viewBox={`0 0 ${xMax} ${yMax}`}>

            {[...Array(totalHorizontalGridLines)].map((item, i) => <HorizontalGridLine y={horizontalPadding + horizontalSpacing * i} key={"horizontalGridLine_" + i} />)}
            {[...Array(totalVerticalGridLines)].map((item, i) => <VerticalGridLine x={verticalPadding + verticalSpacing * i} key={"verticalGridLine_" + i} />)}

            <XAxis />
            <YAxis />

            {verticalAsymptotes.map(x => <VerticalAsymptote x={x} key={"verticalAsymptote_" + x} />)}

            <HorizontalOrObliqueAsymptote equation={horizontalOrObliqueAsymptote} />

            {zeroes.map(x => <XIntercept x={x} key={"xIntercept_" + x} />)}

            {curvedFunctionParts.map(partData => {
                
                // user-specified coordinates
                let [xStart, yStart, xEnd, yEnd] = partData;

                // translate user coordinates into SVG coordinates by scaling by horizontalSpacing and verticalSpacing
                xStart = originX + xStart * horizontalSpacing;
                xEnd = originX + xEnd * horizontalSpacing;

                // subtract because y-coordinates grow downwards in SVG
                yStart = originY - yStart * verticalSpacing;
                yEnd = originY - yEnd * verticalSpacing;

                return <LineWithArrows xStart={xStart} yStart={yStart} xEnd={xEnd} yEnd={yEnd} color="#CC6699" key={"curvedFunctionPart_" + xStart + "_" + yStart + "_" + xEnd + "_" + yEnd} />;
            })}

        </svg>
    )
}

export default Grid;