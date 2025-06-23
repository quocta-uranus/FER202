import React, { useReducer, useState } from "react";
import { Container, Form, Button, Row, Col, ListGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-2" onClick={handleAddItem}>
              Add Item
            </Button>
          </Form>

          <h4 className="mt-4">Item List:</h4>
          <ListGroup>
            {state.items.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {item.name}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
