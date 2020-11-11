import React from "react";

const Equation = ({equationData}) => {

  function formatEquation(equation) {

    let equationString = "";

    for (let i = 0; i < equationData.length; i += 1)
      {
        let currentRoot = equationData[i];

        if (currentRoot === 0)
          { equationString += "x"; }
        if (currentRoot < 0)
          { equationString += "(x + " + Math.abs(currentRoot) + ")"; }
        else
        { equationString += "(x - " + currentRoot + ")"; }
        
      }

    return equationString;
  }

  if (!equationData)
    {
      return (
        <>Loading...</>
      )
    }

  return (
    <div className="equation">
      <h1>{formatEquation(equationData.equation)}</h1>
    </div>
  );
}

export default Equation;