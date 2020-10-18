import React, { useState } from "react";

const ProblemSelector = ({equationData, problemSettings, setEquationData, setProblemSettings}) => {

  const [userSettings, setUserSettings] = useState({...problemSettings});

  const handleSubmit = () => {
    setEquationData({...equationData, type: "polynomial"});
    setProblemSettings({...problemSettings, ...userSettings});
  }

  return (
    <div className="problemSelector">
      <h1>Choose an equation type</h1>

      <div className="equationTypeButton">
        <button>Polynomial</button>
        <button>Rational Expression</button>
      </div>

      <h2>Options</h2>

      <div className="polynomialOptionsContainer">

        <div className="choiceRow">
           <h3>Factored?</h3>

           <button>Yes</button>
           <button>No</button>
        </div>

      </div>

      <div className="rationalOptionsContainer">

        <div className="choiceRow">
          <h3>Vertical Asymptotes?</h3>

          <button>Yes</button>
          <button>No</button>
        </div>

        <div className="choiceRow">
          <h3>End Behavior Asymptotes</h3>

          <button>None</button>
          <button>Horizontal</button>
          <button>Oblique</button>
        </div>

        <div className="choiceRow">
          <h3>Holes?</h3>

          <button>Yes</button>
          <button>No</button>
        </div>

      </div>

      <button onClick={handleSubmit}>Create Problem</button>

    </div>
  );
}

export default ProblemSelector;