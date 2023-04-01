import React, { useState } from "react";

export default function Question(props) {
  console.log(props);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const answers = props.allAnswers.map((obj) => {
    return (
      <button
      key={obj.id}
        className={`answer-btn ${obj.id === selectedAnswer ? "selected" : ""}`}
        onClick={() => {
          setSelectedAnswer(obj.id);
          setIsAnswerCorrect(obj.isCorrect)
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
