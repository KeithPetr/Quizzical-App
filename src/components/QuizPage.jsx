import React, { useState } from "react";
import Question from "./Question.jsx";
import Layout from "./Layout.jsx";

export default function QuizPage(props) {
  console.log(props.data[0].allAnswers.length);

  const [showAnswers, setShowAnswers] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [answersDisabled, setAnswersDisabled] = useState(false);

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
      answersDisabled={answersDisabled}
    />
  ));

  function checkAnswers() {
    if (Object.keys(selectedAnswers).length === props.data.length) {
      setShowAnswers(true);
      setShowResults(true);
      setQuizComplete(true);
      setAnswersDisabled(true);
    }
  }

  function resetQuiz() {
    setSelectedAnswers({});
    setShowAnswers(false);
    setShowResults(false);
    setQuizComplete(false);
    props.resetQuiz();
    props.setQuizComplete(false);
  }

  function getTotalCorrect() {
    const totalCorrect = props.data
      .map((obj) =>
        obj.allAnswers.filter(
          (answer) => answer.isCorrect && answer.id === selectedAnswers[obj.id]
        )
      )
      .flat().length;

    const total = props.data.length;
    return { totalCorrect, total };
  }

  return (
    <Layout>
      <div className="quiz-container">
        {questionElements}
        {showResults && (
          <div className="results">
            You scored {getTotalCorrect().totalCorrect} correct out of{" "}
            {getTotalCorrect().total} questions
          </div>
        )}
        {quizComplete ? (
          <button className="play-again-btn" onClick={resetQuiz}>
            Play Again
          </button>
        ) : (
          <button className="check-answers-btn" onClick={checkAnswers}>
            Check Answers
          </button>
        )}
      </div>
    </Layout>
  );
}
