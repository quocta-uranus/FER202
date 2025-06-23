import React, { useContext } from "react";
import QuizContext from "../QuizContext";
import "../App.css";

const Result = ({ score, totalQuestions }) => {
  const { setStep, setScore } = useContext(QuizContext);

  const percentage = Math.round((score / totalQuestions) * 100);

  const restartQuiz = () => {
    setScore(0);
    setStep("quiz");
  };

  return (
    <div className="quiz-container result-container">
      <h2>Kết quả Quiz</h2>
      <div className="score-circle">
        <div className="score-number">{percentage}%</div>
      </div>
      <h3>
        Bạn đã trả lời đúng {score}/{totalQuestions} câu hỏi
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
  );
};

export default Result;
