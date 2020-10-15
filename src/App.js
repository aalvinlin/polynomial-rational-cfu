import React, { useState }  from "react";

import ProblemInterface from "./components/ProblemInterface";
import ProblemSelector from "./components/ProblemSelector";

import "./App.css";

const App = () => {

  const [equationData, setEquationData] = useState({
    type: null,
    equation: null,

    zeroes: {},
    verticalAsymptotes: [],
    holes: [],
    horizontalAsymptote: null,
    obliqueAsymptote: null,
    
  });

  const [problemSettings, setProblemSettings] = useState({
    type: null,
    polynomialOptions: {
      factored: true
    },
    rationalOptions: {
      verticalAsymptotes: true,
      EndBehaviorAsymptoteType: "horizontal",
      holes: false,
    },
  })

  if (equationData.type)
    {
      return <ProblemInterface equationData={equationData} problemSettings={problemSettings} setEquationData={setEquationData} setProblemSettings={setProblemSettings} />;
    }
  else
    {
      return <ProblemSelector equationData={equationData} problemSettings={problemSettings} setEquationData={setEquationData} setProblemSettings={setProblemSettings} />;
    }

}

export default App;