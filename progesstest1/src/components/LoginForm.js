import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal, Button, Form, Container } from "react-bootstrap";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3001/UserAccounts?username=${username}&password=${password}`
      );
      if (res.data.length > 0) {
        setUser(res.data[0]);
        setShowModal(true);
      } else {
        alert("Invalid username or password!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome, {username} login Successful!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => (window.location.href = "/laptops")}
          >
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
