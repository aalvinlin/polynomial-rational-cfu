import React from "react";
import Equation from "./Equation";
import Grid from "./Grid";

const ProblemInterface = () => {

  return (
    <>
      <Equation />

      <div className="gridAndInputs">
          <Grid />
          <div className="inputs">
              
          </div>
      </div>
    </>
  );
}

export default ProblemInterface;