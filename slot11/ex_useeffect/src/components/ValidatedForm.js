import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ValidatedForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  useEffect(() => {
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setPasswordValid(password.length >= 8);
  }, [email, password]);

  const isFormValid = emailValid && passwordValid;

  return (
    <Form className="my-4">
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!emailValid && email !== ""}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!passwordValid && password !== ""}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải ít nhất 8 ký tự.
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
};

export default ValidatedForm;