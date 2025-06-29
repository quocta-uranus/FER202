import React from "react";
import UserProfile from "./components/UserProfile"; // Ví dụ 1
import UserProfile2 from "./components/UserProfile2"; // Ví dụ 2
import MyForm from "./components/MyForm"; // Ví dụ 3
import UserForm from "./components/UserForm"; // Ví dụ 4
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const handleSubmitExample2 = (data) => {
    console.log("Submit từ Ví dụ 2:", data);
  };

  const handleSubmitExample3 = (data) => {
    console.log("Submit từ Ví dụ 3:", data);
  };

  const handleSubmitExample4 = (data) => {
    console.log("Submit từ Ví dụ 4:", data);
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">
        Ứng dụng React - PropTypes & Form Validation
      </h1>

      {/* Ví dụ 1 */}
      <Row className="mb-5">
        <Col>
          <h4>🔹 Ví dụ 1: Kiểm tra props thủ công</h4>
          <UserProfile name="Nguyễn Văn A" age={25} />
          <UserProfile name="" age={25} />
          <UserProfile name="Nguyễn Văn B" age="twenty five" />
          <UserProfile name="Nguyễn Văn C" age={null} />
        </Col>
      </Row>

      {/* Ví dụ 2 */}
      <Row className="mb-5">
        <Col>
          <h4>🔹 Ví dụ 2: Form với useState và kiểm tra tuổi</h4>
          <UserProfile2
            name="Nguyễn Văn A"
            age={25}
            onSubmit={handleSubmitExample2}
          />
        </Col>
      </Row>

      {/* Ví dụ 3 */}
      <Row className="mb-5">
        <Col>
          <h4>🔹 Ví dụ 3: useReducer quản lý form</h4>
          <MyForm
            title="Form Đăng Ký - Ví dụ 3"
            onSubmit={handleSubmitExample3}
          />
        </Col>
      </Row>

      {/* Ví dụ 4 */}
      <Row className="mb-5">
        <Col>
          <h4>
            🔹 Ví dụ 4: Form đầy đủ (Tên, tuổi, email, điện thoại, checkbox)
          </h4>
          <UserForm onSubmit={handleSubmitExample4} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
