import React from "react";

import Grid from "./components/Grid";

const App = () => {

  let verticalAsymptotes = [-5, 0, 1, 4];
  let horizontalAsymptotes = [];
  let obliqueAsymptotes = [];
  
  let curvedFunctionParts = [[0, 0, 2, 5], [-3, 2, 4, -5]];

  return (
    <>
      <Grid xMax={800} yMax={800} horizontalSpacing={40} verticalSpacing={40} horizontalPadding={25} verticalPadding={25} verticalAsymptotes={verticalAsymptotes} horizontalAsymptotes={horizontalAsymptotes} obliqueAsymptotes={obliqueAsymptotes} curvedFunctionParts={curvedFunctionParts} />
    </>
  );
}

export default App;