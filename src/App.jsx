import React, { useState, useEffect } from "react";
import StartPage from "./components/StartPage.jsx";
import QuizPage from "./components/QuizPage.jsx";
import { nanoid } from "nanoid";

export default function App() {
  const [start, setStart] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState();
  const [quizComplete, setQuizComplete] = useState(false);

  function startQuiz() {
    setStart(true);
    setQuizComplete(false);
  }

  function randomArray(array) {
    const newArray = [];
    const randArr = [];
    for (let i = 0; i < array.length; i++) {
      const num = Math.floor(Math.random() * array.length);
      !randArr.includes(num) ? randArr.push(num) : i--;
    }
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[randArr[i]]);
    }
    return newArray;
  }

  function resetQuiz() {
    setQuizComplete(false);
    setStart(false)
    fetch(`https://opentdb.com/api.php?amount=5`)
      .then((res) => res.json())
      .then((data) => {
        setQuizQuestions(
          data.results.map((res) => {
            return {
              id: nanoid(),
              question: res.question,
              correctAnswer: res.correct_answer,
              incorrectAnswers: res.incorrect_answers,
              allAnswers: randomArray([
                res.correct_answer,
                ...res.incorrect_answers,
              ]).map((answer) => {
                return {
                  id: nanoid(),
                  answer: answer,
                  isCorrect: answer === res.correct_answer,
                  isSelected: false,
                  parent: res.question,
                };
              }),
            };
          })
        );
      });
  }

  useEffect(() => {
    resetQuiz();
  }, []);

  return (
    <section className="app-container">
      {!start ? (
        <StartPage handleClick={startQuiz} />
      ) : (
        <QuizPage
          data={quizQuestions}
          resetQuiz={resetQuiz}
          quizComplete={quizComplete}
          setQuizComplete={setQuizComplete}
          setStart={setStart}
        />
      )}
    </section>
  );
}
