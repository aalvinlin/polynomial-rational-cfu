import React from "react";

import Grid from "./components/Grid";

const App = () => {
  return (
    <>
      <Grid xMax={800} yMax={800} horizontalSpacing={40} verticalSpacing={40} horizontalPadding={25} verticalPadding={25} />
    </>
  );
}

export default App;