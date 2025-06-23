import React, { useState, useContext } from "react";
import QuizContext from "../QuizContext";
import "../App.css";
const Quiz = () => {
  const { questions, setStep, setScore } = useContext(QuizContext);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const currentQ = questions[index];

  const handleNext = () => {
    if (submitted) {
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelected("");
        setSubmitted(false);
      } else {
        setScore(correctCount);
        setStep("result");
      }
    } else {
      if (selected === currentQ.correctAnswer) {
        setCorrectCount(correctCount + 1);
      }
      setSubmitted(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz App</h2>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(index / questions.length) * 100}%` }}
        ></div>
      </div>
      <p className="question-count">
        Câu hỏi {index + 1}/{questions.length}
      </p>

      <div className="question-box">
        <h3>{currentQ.question}</h3>
        {currentQ.answers.map((ans, i) => (
          <div
            key={i}
            className={`answer-option ${selected === ans ? "selected" : ""} ${
              submitted
                ? ans === currentQ.correctAnswer
                  ? "correct"
                  : selected === ans && selected !== currentQ.correctAnswer
                  ? "incorrect"
                  : ""
                : ""
            }`}
            onClick={() => !submitted && setSelected(ans)}
          >
            {ans}
          </div>
        ))}
      </div>

      <button className="submit-btn" onClick={handleNext} disabled={!selected}>
        {submitted
          ? index === questions.length - 1
            ? "Xem kết quả"
            : "Câu tiếp theo"
          : "Kiểm tra"}
      </button>
    </div>
  );
};

export default Quiz;
