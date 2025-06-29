import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      navigate("/posts");
    } else {
      setError("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="username" className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="password" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Login
      </Button>
    </Form>
  );
}

export default Login;
