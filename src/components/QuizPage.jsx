import React from "react";
import Question from "./Question";

export default function QuizPage(props) {
    console.log(props.data)
    const questionElements = props.data.map(obj =>
     <Question 
        key={obj.id}
        question={obj.question}
        allAnswers={obj.allAnswers}
     />
    )
    return (
        {questionElements}
    )
}