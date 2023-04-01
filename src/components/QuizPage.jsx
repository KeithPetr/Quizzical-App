import React from "react";
import Question from "./Question.jsx";
import blueBlob from "../images/blue-blob.png";
import yellowBlob from "../images/yellow-blob.png";

export default function QuizPage(props) {
  console.log(props.data);
  const questionElements = props.data.map((obj) => (
    <Question
      key={obj.id}
      question={obj.question}
      allAnswers={obj.allAnswers}
    />
  ));
  return (
    <div className="quiz-container">
      {questionElements}
      <img
        src={yellowBlob}
        alt="yellow blob image"
        className="yellow-blob small"
      />
      <img 
        src={blueBlob} 
        alt="blue blob image" 
        className="blue-blob small" />
    </div>
  );
}
