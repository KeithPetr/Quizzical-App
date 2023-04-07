import React from "react";
import blueBlob from "../images/blue-blob.png";
import yellowBlob from "../images/yellow-blob.png";
import Layout from "./Layout.jsx";

export default function StartPage(props) {
  return (
    <Layout>
      <div className="landing-container">
        <h1 className="landing-title">Quizzical</h1>
        <p className="landing-description">
          Generate random questions to complete a quiz.
        </p>
        <button className="start-btn" onClick={props.handleClick}>
          Start Quiz
        </button>
      </div>
    </Layout>
  );
}
