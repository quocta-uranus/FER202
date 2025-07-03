import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostTable = ({ posts, onDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Tiêu đề</th>
        <th>Nội dung</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      {posts.map((post) => (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td>
            <Link to={`/edit/${post.id}`}>
              <Button variant="warning" size="sm" className="me-2">
                Sửa
              </Button>
            </Link>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDelete(post.id)}
            >
              Xóa
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

PostTable.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostTable;
