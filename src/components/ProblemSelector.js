import React from "react";

const ProblemSelector = () => {

  return (
    <div className="problemSelector">
      <p>Choose an equation type to practice:</p>

      <p>Polynomial</p>

      <p>Rational Expression</p>

      <p>Asymptote Type:</p>

      <ul>
          <li>none</li>
          <li>Horizontal</li>
          <li>Vertical</li>
          <li>Oblique</li>
      </ul>

      <p>Holes</p>

    </div>
  );
}

export default ProblemSelector;