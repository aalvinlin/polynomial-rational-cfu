import React, { useState }  from "react";

import ProblemInterface from "./components/ProblemInterface";
import ProblemSelector from "./components/ProblemSelector";

const App = () => {

  const equationData = useState({
    type: null,
    equation: null,

    zeroes: {},
    verticalAsymptotes: [],
    holes: [],
    horizontalAsymptote: null,
    obliqueAsymptote: null,
    
  });

  const problemSettings = useState({
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
      return <ProblemInterface equationData={equationData} problemSettings={problemSettings} />;
    }
  else
    {
      return <ProblemSelector equationData={equationData} problemSettings={problemSettings} />;
    }

}

export default App;