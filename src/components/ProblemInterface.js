import React from "react";
import Equation from "./Equation";
import Grid from "./Grid";

const ProblemInterface = ({equationData, problemSettings, setEquationData, setProblemSettings}) => {
 
  let verticalAsymptotes = [-5, 0, 4];
  let horizontalOrObliqueAsymptote = [-2, 2];
  let zeroes = [-2, 1];
  let holes = [];
  
  let curvedFunctionParts = [[0, 0, 2, 5], [-3, 2, 4, -5]];

  return (
    <>
      <Equation equationData={equationData} />

      <div className="gridAndInputs">
        <Grid xMax={800} yMax={800} horizontalSpacing={40} verticalSpacing={40} horizontalPadding={25} verticalPadding={25} verticalAsymptotes={verticalAsymptotes} horizontalOrObliqueAsymptote={horizontalOrObliqueAsymptote} zeroes={zeroes} holes={holes} curvedFunctionParts={curvedFunctionParts} />
        <div className="inputs">
            
        </div>
      </div>
    </>
  );
}

export default ProblemInterface;