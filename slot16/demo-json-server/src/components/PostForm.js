import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Alert } from "react-bootstrap";

const PostForm = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
  error,
}) => (
  <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>Tiêu đề</Form.Label>
      <Form.Control type="text" value={title} onChange={onTitleChange} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Nội dung</Form.Label>
      <Form.Control as="textarea" value={content} onChange={onContentChange} />
    </Form.Group>
    <Button type="submit">Lưu</Button>
    {error && (
      <Alert variant="danger" className="mt-3">
        {error}
      </Alert>
    )}
  </Form>
);

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default PostForm;
