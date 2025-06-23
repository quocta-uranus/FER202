import React, { useState } from "react";
import questions from "./data/questions";
import Question from "./components/Question";
import Result from "./components/Result";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      selectedOption === questions[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {!showResult ? (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default QuizApp;
