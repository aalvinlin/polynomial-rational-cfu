import React, {useState} from "react";
import Equation from "./Equation";
import Grid from "./Grid";

const ProblemInterface = ({equationData, problemSettings, setEquationData, setProblemSettings}) => {
 
  let verticalAsymptotes = [-5, 0, 4];
  let horizontalOrObliqueAsymptote = [-2, 2];
  let zeroes = [-2, 1];
  let holes = [];
  
  let curvedFunctionParts = [[0, 0, 2, 5], [-3, 2, 4, -5]];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const formatVerticalAsymptote = (verticalAsymptote) => {
    return <span>x = {verticalAsymptote}</span>;
  }

  const formatHorizontalAsymptote = (horizontalAsymptote) => {
    return <span>y = {horizontalAsymptote}</span>;    
  }

  const formatObliqueAsymptote = (obliqueAsymptote) => {
    return <span>y = {obliqueAsymptote}x</span>;
  }

  if (!equationData)
    {
      return (
        <>Loading...</>
      )
    }

  return (
    <>
      <Equation equationData={equationData} />

      <div className="gridAndInputs">
        <Grid xMax={800} yMax={800} horizontalSpacing={40} verticalSpacing={40} horizontalPadding={25} verticalPadding={25} equationData={equationData} />
        <div className="inputs">
            <h2>Properties Displayed on Graph</h2>
            
            <h3 className={selectedCategory === "zeroes" ? "selected" : ""}>Zeroes</h3>
              <div>
                {Object.entries(equationData.zeroes).map((zero, multiplicity) => zero)}
              </div>

            <h3 className={selectedCategory === "verticalAsymptote" ? "selected" : ""}>Vertical Asymptotes</h3>
              <div>
                {equationData.verticalAsymptotes.map(verticalAsymptote => formatVerticalAsymptote(verticalAsymptote))}
              </div>

            <h3 className={selectedCategory === "horizontalAsymptote" ? "selected" : ""}>Horizontal Asymptotes</h3>
              <div>
                {formatHorizontalAsymptote(equationData.horizontalAsymptote)}
              </div>
              
            <h3 className={selectedCategory === "obliqueAsymptote" ? "selected" : ""}>Oblique Asymptotes</h3>
              <div>
                {formatObliqueAsymptote(equationData.obliqueAsymptote)}
              </div>
              
            <h3 className={selectedCategory === "holes" ? "selected" : ""}>Holes</h3>
              <div>
                {equationData.holes.map(hole => hole)}
              </div>
              
        </div>
      </div>
    </>
  );
}

export default ProblemInterface;