import React from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "2"],
    correctAnswer: "4",
  },
];

const Quiz = () => (
  <div className="p-4">
    <h2>Quiz Page</h2>
    {questions.map((q, idx) => (
      <div key={idx} className="mb-3">
        <h5>{q.question}</h5>
        <ul>
          {q.options.map((opt, i) => (
            <li key={i}>{opt}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Quiz;
