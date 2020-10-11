import React from "react";

const Equation = ({equationData}) => {

  return (
    <div className="equation">
      <h1>{equationData.equation}</h1>
    </div>
  );
}

export default Equation;