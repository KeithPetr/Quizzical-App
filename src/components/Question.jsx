import React from "react";

export default function Question(props) {


  const question = props.data.map((question) => {
    return decodeHtml(question.question);
  });

  const answers = props.data.map((obj) => {
    return obj.allAnswers.map((obj) => {
      return <button>{obj.answer}</button>;
    });
  });

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <section className="question-container">
      <p className="question">{question}</p>;
      <div className="answers-container">{answers}</div>
    </section>
  );
}
