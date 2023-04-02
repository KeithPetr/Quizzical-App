import React, { useState } from "react";

export default function Question(props) {
  console.log();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = props.allAnswers.map((obj) => {
    const isSelected = obj.id === selectedAnswer;
    const isCorrect = obj.isCorrect;
    const isIncorrect = props.showAnswers && isSelected && !isCorrect;
    const className = `answer-btn 
      ${obj.id === selectedAnswer ? "selected" : ""} 
      ${props.showAnswers && isCorrect ? "correct" : ""} 
      ${props.showAnswers && isIncorrect ? "incorrect" : ""}`;

    return (
      <button
        key={obj.id}
        className={className}
        onClick={() => {
          setSelectedAnswer(obj.id);
        }}
      >
        {decodeHtml(obj.answer)}
      </button>
    );
  });

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <section className="question-container">
      <p className="question">{decodeHtml(props.question)}</p>
      <div className="answers-container">{answers}</div>
    </section>
  );
}
