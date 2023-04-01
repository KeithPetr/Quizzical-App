import React from "react";


export default function Question(props) {
  console.log(props);

  const answers = props.allAnswers.map((obj) => {
    return <button className="answer-btn">{obj.answer}</button>;
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
