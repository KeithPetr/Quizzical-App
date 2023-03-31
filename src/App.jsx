import React, { useState, useEffect } from "react";
import StartPage from "./components/StartPage.jsx";
import QuizPage from "./components/QuizPage.jsx";

export default function App() {
  const [start, setStart] = useState(false);

  function startQuiz() {
    setStart(true);
  }

  return (
    <section className="app-container">
      {!start ? <StartPage handleClick={startQuiz} /> : <QuizPage />}
    </section>
  );
}
