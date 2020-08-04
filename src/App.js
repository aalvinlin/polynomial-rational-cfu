import React from "react";

import Grid from "./components/Grid";

const App = () => {

  let verticalAsymptotes = [];
  let horizontalAsymptotes = [];
  let obliqueAsymptotes = [];
  
  let curvedFunctionParts = [];

  return (
    <>
      <Grid xMax={800} yMax={800} horizontalSpacing={40} verticalSpacing={40} horizontalPadding={25} verticalPadding={25} verticalAsymptotes={verticalAsymptotes} horizontalAsymptotes={horizontalAsymptotes} obliqueAsymptotes={obliqueAsymptotes} curvedFunctionParts={curvedFunctionParts} />
    </>
  );
}

export default App;