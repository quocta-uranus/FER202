import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const DeleteConfirmation = ({ onConfirm, onCancel }) => (
  <div>
    <h3>Bạn có chắc chắn muốn xóa bài viết này?</h3>
    <Button variant="danger" onClick={onConfirm}>
      Xóa
    </Button>{" "}
    <Button variant="secondary" onClick={onCancel}>
      Hủy
    </Button>
  </div>
);

DeleteConfirmation.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteConfirmation;
