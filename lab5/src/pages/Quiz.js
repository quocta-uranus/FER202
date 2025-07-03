import React, { useState, useContext, useEffect } from "react";
import "../App.css";

const quizData = [
  {
    question: "What is ReactJS?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What is JSX?",
    answers: [
      "A programming language",
      "A file format",
      "A syntax extension for JavaScript",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "2"],
    correctAnswer: "4",
  },
];

const Quiz = () => {
  const [questions, setQuestions] = useState(quizData);
  const [step, setStep] = useState("quiz"); // quiz, form, result
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [current, setCurrent] = useState({
    question: "",
    answers: ["", "", ""],
    correctAnswer: "",
  });

  // Lấy câu hỏi hiện tại
  const currentQ = questions[index];

  // Xử lý khi nhấn nút Next trong quiz
  const handleNext = () => {
    if (submitted) {
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelected("");
        setSubmitted(false);
      } else {
        setStep("result");
      }
    } else {
      if (selected === currentQ.correctAnswer) {
        setScore(score + 1);
      }
      setSubmitted(true);
    }
  };

  // Xử lý thêm câu hỏi mới
  const addQuestion = () => {
    if (
      current.question &&
      current.correctAnswer &&
      current.answers.every((a) => a !== "")
    ) {
      setInputs([...inputs, current]);
      setCurrent({
        question: "",
        answers: ["", "", ""],
        correctAnswer: "",
      });
    }
  };

  // Bắt đầu quiz với các câu hỏi đã tạo
  const startQuiz = () => {
    if (inputs.length > 0) {
      setQuestions(inputs);
    } else {
      setQuestions(quizData);
    }
    setIndex(0);
    setScore(0);
    setSelected("");
    setSubmitted(false);
    setStep("quiz");
  };

  // Làm lại quiz
  const restartQuiz = () => {
    setScore(0);
    setIndex(0);
    setSelected("");
    setSubmitted(false);
    setStep("quiz");
  };

  // Xử lý thay đổi đáp án đúng
  const handleCorrectAnswerChange = (value) => {
    setCurrent({ ...current, correctAnswer: value });
  };

  // Xử lý điều hướng giữa các màn hình
  const handleNavigation = (newStep) => {
    setStep(newStep);
    if (newStep === "quiz") {
      setScore(0);
      setIndex(0);
      setSelected("");
      setSubmitted(false);
    }
  };

  // Tính phần trăm điểm
  const percentage = Math.round((score / questions.length) * 100) || 0;

  return (
    <div className="app-container">
      {/* Thanh điều hướng */}
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

      {/* Phần tạo câu hỏi */}
      {step === "form" && (
        <div className="form-container">
          <h2>Tạo câu hỏi Quiz</h2>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Nhập câu hỏi"
              value={current.question}
              onChange={(e) =>
                setCurrent({ ...current, question: e.target.value })
              }
            />
          </div>

          {current.answers.map((ans, i) => (
            <div className="form-group" key={i}>
              <input
                className="form-control"
                placeholder={`Câu trả lời ${i + 1}`}
                value={ans}
                onChange={(e) => {
                  const newAns = [...current.answers];
                  newAns[i] = e.target.value;
                  setCurrent({ ...current, answers: newAns });
                }}
              />
              <label>
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={current.correctAnswer === ans}
                  onChange={() => handleCorrectAnswerChange(ans)}
                  disabled={!ans}
                />
                Đáp án đúng
              </label>
            </div>
          ))}

          <div className="form-actions">
            <button
              className="submit-btn"
              onClick={addQuestion}
              disabled={
                !current.question ||
                !current.correctAnswer ||
                current.answers.some((a) => !a)
              }
            >
              Thêm câu hỏi
            </button>
            <button
              className="submit-btn"
              onClick={startQuiz}
              disabled={inputs.length === 0 && quizData.length === 0}
            >
              Bắt đầu Quiz
            </button>
          </div>

          {inputs.length > 0 && (
            <div className="question-list">
              <h3>Danh sách câu hỏi ({inputs.length})</h3>
              {inputs.map((q, i) => (
                <div className="question-item" key={i}>
                  <p>
                    <strong>Câu hỏi {i + 1}:</strong> {q.question}
                  </p>
                  <p>
                    <strong>Đáp án đúng:</strong> {q.correctAnswer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Phần làm quiz */}
      {step === "quiz" && questions.length > 0 && (
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
                className={`answer-option ${
                  selected === ans ? "selected" : ""
                } ${
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

          <button
            className="submit-btn"
            onClick={handleNext}
            disabled={!selected}
          >
            {submitted
              ? index === questions.length - 1
                ? "Xem kết quả"
                : "Câu tiếp theo"
              : "Kiểm tra"}
          </button>
        </div>
      )}

      {/* Phần xem kết quả */}
      {step === "result" && (
        <div className="quiz-container result-container">
          <h2>Kết quả Quiz</h2>
          <div className="score-circle">
            <div className="score-number">{percentage}%</div>
          </div>
          <h3>
            Bạn đã trả lời đúng {score}/{questions.length} câu hỏi
          </h3>

          <div className="result-message">
            {percentage >= 80 ? (
              <p>Tuyệt vời! Bạn đã làm rất tốt!</p>
            ) : percentage >= 50 ? (
              <p>Khá tốt! Bạn có thể cải thiện thêm.</p>
            ) : (
              <p>Hãy cố gắng hơn nữa nhé!</p>
            )}
          </div>

          <button className="submit-btn" onClick={restartQuiz}>
            Làm lại Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
