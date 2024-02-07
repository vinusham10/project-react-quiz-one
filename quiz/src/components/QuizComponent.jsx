import React from "react";
import "../css/QuizComponent.css";

export default function QuizComponent(){

  return(
    <div className="question">
      <h2>Question</h2>

      <div>
        <span>1 of 15</span>
        <h5>Which is the only mammal that can jump?</h5>
      </div>

      <div className="option-container">
        <p className="option">Dog</p>
        <p className="option">Goat</p>
      </div>

      <div className="option-container">
        <p className="option">Elephant</p>
        <p className="option">Lion</p>
      </div>

      <div className="button-container">
        <button className="button previous">Previous</button>
        <button className="button next">Next</button>
        <button className="button quit">Quit</button>
      </div>


      
    </div>
  )
}