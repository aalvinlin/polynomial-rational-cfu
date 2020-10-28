import React, { useState } from "react";
import YesNoSlider from "./YesNoSlider";

const ProblemSelector = ({equationData, problemSettings, setEquationData, setProblemSettings}) => {

  const [userSettings, setUserSettings] = useState({...problemSettings});

  const handleSubmit = () => {
    setEquationData({...equationData, type: "polynomial"});
    setProblemSettings({...problemSettings, ...userSettings});
  }

  const generateProblem = () => {

    const totalZeroes = Math.floor(Math.random() * 5);

    const rangeOfPossibleZeroes = [-10, 10];
    let possibleZeroes = [];

    for (let i = rangeOfPossibleZeroes[0]; i < rangeOfPossibleZeroes[1]; i += 1)
      { possibleZeroes.push(i); }

    let zeroes = [];

    for (i = 0; i < totalZeroes; i += 1)
      { zeroes.push(possibleZeroes[Math.floor(Math.random() * possibleZeroes.length)]); }

  }

  return (
    <div className="problemSelector">
      <h1>Choose an equation type</h1>

      <div className="equationTypeButton">
        <button className={ userSettings.type === "polynomial" ? "selected" : ""}>Polynomial</button>
        <button className={ userSettings.type === "rational" ? "selected" : ""}>Rational Expression</button>
      </div>

      <h2>Options</h2>

      <div className="polynomialOptionsContainer">

        <div className="choiceRow">
           <h3>Factored?</h3>

           <YesNoSlider selectedOption={userSettings.polynomialOptions.factored} />

        </div>

      </div>

      <div className="rationalOptionsContainer">

        <div className="choiceRow">
          <h3>Vertical Asymptotes?</h3>

          <YesNoSlider selectedOption={userSettings.rationalOptions.verticalAsymptotes} />

        </div>

        <div className="choiceRow">
          <h3>End Behavior Asymptotes</h3>

          <button className={ userSettings.rationalOptions.EndBehaviorAsymptoteType === "none" ? "selected" : "" }>None</button>
          <button className={ userSettings.rationalOptions.EndBehaviorAsymptoteType === "horizontal" ? "selected" : "" }>Horizontal</button>
          <button className={ userSettings.rationalOptions.EndBehaviorAsymptoteType === "oblique" ? "selected" : "" }>Oblique</button>
        </div>

        <div className="choiceRow">
          <h3>Holes?</h3>

          <YesNoSlider selectedOption={userSettings.rationalOptions.holes} />

        </div>

      </div>

      <button onClick={handleSubmit}>Create Problem</button>

    </div>
  );
}

export default ProblemSelector;