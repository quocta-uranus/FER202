import React from "react";

function Question({ question, onAnswer, questionNumber, totalQuestions }) {
  return (
    <div className="question-container">
      <h2>
        Question {questionNumber} of {totalQuestions}
      </h2>
      <p>{question.question}</p>
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            className="option-button"
            key={index}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
