import React, {useState} from "react";
import Question from "./Question.jsx";
import blueBlob from "../images/blue-blob.png";
import yellowBlob from "../images/yellow-blob.png";

export default function QuizPage(props) {
  const [showAnswers, setShowAnswers,] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const questionElements = props.data.map((obj) => (
    <Question
      key={obj.id}
      question={obj.question}
      allAnswers={obj.allAnswers}
      showAnswers={showAnswers}
    />
  ));

  function checkAnswers() {
    setShowAnswers(true)
    setShowResults(true)
  }

  function restarQuiz() {
    setShowAnswers(false)
    setShowResults(false)
    props.handleRestart()
  }

  return (
    <div className="quiz-container">
      {questionElements}
      <button className="check-answers-btn" onClick={restarQuiz}>
        {showResults ? "Play Again" : "Check Answers"}</button>
      <img
        src={yellowBlob}
        alt="yellow blob image"
        className="yellow-blob small"
      />
      <img src={blueBlob} alt="blue blob image" className="blue-blob small" />
    </div>
  );
}
