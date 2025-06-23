import React, { useReducer } from "react";
import { Form, Container } from "react-bootstrap";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group controlId="nameInput">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", value: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="ageInput" className="mt-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Input age"
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "SET_AGE", value: e.target.value })
            }
          />
        </Form.Group>

        <div className="mt-4">
          <h4>Name: {state.name}</h4>
          <h4>Age: {state.age}</h4>
        </div>
      </Form>
    </Container>
  );
}

export default ChangeNameAge;
