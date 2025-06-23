import React from "react";

function Result({ score, totalQuestions }) {
  const handleRetry = () => window.location.reload();

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>
        Your score: {score} / {totalQuestions}
      </p>
      <button className="play-again-button" onClick={handleRetry}>
        Play Again
      </button>
    </div>
  );
}

export default Result;
