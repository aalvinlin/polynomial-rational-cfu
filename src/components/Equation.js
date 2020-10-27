import React from "react";

const Equation = ({equationData}) => {

  function formatEquation(equation) {

    return equation.map((coefficient, id) => {

      let power = 0;

      return (coefficient + "x")

    });
  }

  return (
    <div className="equation">
      <h1>{formatEquation(equationData.equation)}</h1>
    </div>
  );
}

export default Equation;