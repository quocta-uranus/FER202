import React, { useState } from "react";
import QuizContext from "./QuizContext";
import QuestionForm from "./components/QuestionForm";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { quizData } from "./data/quizData";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState(quizData);
  const [step, setStep] = useState("quiz");
  const [score, setScore] = useState(0);

  const handleNavigation = (newStep) => {
    setStep(newStep);
    if (newStep === "quiz") {
      setScore(0);
    }
  };

  return (
    <QuizContext.Provider
      value={{ questions, setQuestions, setStep, setScore }}
    >
      <div className="app-container">
        <div className="nav-container">
          <button
            className={`nav-btn ${step === "form" ? "active" : ""}`}
            onClick={() => handleNavigation("form")}
          >
            Tạo câu hỏi
          </button>
          <button
            className={`nav-btn ${step === "quiz" ? "active" : ""}`}
            onClick={() => handleNavigation("quiz")}
          >
            Làm quiz
          </button>
          <button
            className={`nav-btn ${step === "result" ? "active" : ""}`}
            onClick={() => handleNavigation("result")}
          >
            Xem kết quả
          </button>
        </div>

        {step === "form" && <QuestionForm />}
        {step === "quiz" && <Quiz />}
        {step === "result" && (
          <Result score={score} totalQuestions={questions.length} />
        )}
      </div>
    </QuizContext.Provider>
  );
};

export default App;
