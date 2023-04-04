import React, { useState } from "react";
import Question from "./Question.jsx";
import blueBlob from "../images/blue-blob.png";
import yellowBlob from "../images/yellow-blob.png";

export default function QuizPage(props) {
  console.log(props.data[0].allAnswers.length);

  const [showAnswers, setShowAnswers] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const questionElements = props.data.map((obj) => (
    <Question
      key={obj.id}
      question={obj.question}
      allAnswers={obj.allAnswers}
      showAnswers={showAnswers}
      onAnswerSelect={(answerId) =>
        setSelectedAnswers({
          ...selectedAnswers,
          [obj.id]: answerId,
        })
      }
    />
  ));

  function checkAnswers() {
    if (Object.keys(selectedAnswers).length === props.data.length) {
      setShowAnswers(true);
      setShowResults(true);
      setQuizComplete(true);
    }
  }
  console.log("quizComplete:", quizComplete)
  function getTotalCorrect() {
    const totalCorrect = props.data
      .map((obj) =>
        obj.allAnswers.filter(
          (answer) => answer.isCorrect && answer.id === selectedAnswers[obj.id]
        )
      )
      .flat().length;

    const total = props.data.length;
    console.log(totalCorrect);
    return { totalCorrect, total };
  }

  return (
    <div className="quiz-container">
      {questionElements}
      {showResults && (
        <div className="results">
          You scored {getTotalCorrect().totalCorrect} correct answers out of{" "}
          {getTotalCorrect().total} questions
        </div>
      )}
      {quizComplete ? (
        <button className="play-again-btn">Play Again</button>
      ) : (
        <button className="check-answers-btn" onClick={checkAnswers}>
          Check Answers
        </button>
      )}

      
      <img
        src={yellowBlob}
        alt="yellow blob image"
        className="yellow-blob small"
      />
      <img src={blueBlob} alt="blue blob image" className="blue-blob small" />
    </div>
  );
}
