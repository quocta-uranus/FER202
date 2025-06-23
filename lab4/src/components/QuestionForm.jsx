import React, { useState, useContext } from "react";
import QuizContext from "../QuizContext";

const QuestionForm = () => {
  const { setQuestions, setStep } = useContext(QuizContext);
  const [inputs, setInputs] = useState([]);
  const [current, setCurrent] = useState({
    question: "",
    answers: ["", "", ""],
    correctAnswer: "",
  });

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

  const startQuiz = () => {
    setQuestions(inputs);
    setStep("quiz");
  };

  const handleCorrectAnswerChange = (value) => {
    setCurrent({ ...current, correctAnswer: value });
  };

  return (
    <div className="form-container">
      <h2>Tạo câu hỏi Quiz</h2>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Nhập câu hỏi"
          value={current.question}
          onChange={(e) => setCurrent({ ...current, question: e.target.value })}
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
          disabled={inputs.length === 0}
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
  );
};

export default QuestionForm;
