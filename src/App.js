import React, { useState }  from "react";

import Grid from "./components/Grid";

const App = () => {

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

  let verticalAsymptotes = [-5, 0, 4];
  let horizontalOrObliqueAsymptote = [-2, 2];
  let zeroes = [-2, 1];
  let holes = [];
  
  let curvedFunctionParts = [[0, 0, 2, 5], [-3, 2, 4, -5]];

  return (
    <>
      <Grid xMax={800} yMax={800} horizontalSpacing={40} verticalSpacing={40} horizontalPadding={25} verticalPadding={25} verticalAsymptotes={verticalAsymptotes} horizontalOrObliqueAsymptote={horizontalOrObliqueAsymptote} zeroes={zeroes} holes={holes} curvedFunctionParts={curvedFunctionParts} />
    </>
  );
}

export default App;