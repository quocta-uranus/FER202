import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import PostTable from "./PostTable";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    setPosts(posts.filter((p) => p.id !== id));
  };

  if (loading) return <Spinner animation="border" variant="primary" />;

  return (
    <>
      <Link to="/create">
        <Button className="mb-3">Tạo bài viết mới</Button>
      </Link>
      <PostTable posts={posts} onDelete={handleDelete} />
    </>
  );
};

export default PostList;
