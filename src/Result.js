import React from "react"
import "./style.css"

const Result = ({ percent, sentence, prediction, name1, name2 }) => {
  const judgePrediction = () => {
    console.log(typeof prediction, typeof percent)
    let strPrediction = parseInt(prediction)
    let strPercent = parseInt(percent)
    if (!sentence) {
      return
    } else if (strPrediction > strPercent && strPrediction - strPercent < 25) {
      return "Close! But not as compatable as you had hoped."
    } else if (strPrediction > strPercent && strPrediction - strPercent > 25) {
      return "You had high hopes, but reality can be cruel sometimes."
    } else if (strPrediction < strPercent && strPercent - prediction > 25) {
      return "You are in for a plesant suprise!"
    } else if (strPrediction < strPercent && strPercent - prediction < 25) {
      return "Close! You both are more compatable than you thought!"
    } else if (strPrediction === strPercent) {
      return "Nice Guess, right on the target!"
    }
  }

  const aiScore = () => {
    return (
      <>
        {name1} and {name2}'s Match Score is: <strong>{percent}%</strong>
      </>
    )
  }

  return (
    <div className="right-side">
      <div className="result" id="first-result">
        {name1 && name2
          ? `You Predicted: ${prediction}%`
          : "Please enter names"}
      </div>
      <div className="result" id="second-result">
        {judgePrediction()}
      </div>
      <div className="result" id="third-result">
        {name1 && name2 ? aiScore() : ""}
      </div>
      <div className="result" id="fourth-result">
        {name1 && name2 ? `The Love AI says: "${sentence}."` : ""}
      </div>
    </div>
  )
}

export default Result
