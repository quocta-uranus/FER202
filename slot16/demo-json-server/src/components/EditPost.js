import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PostForm from "./PostForm";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Vui lòng nhập tiêu đề và nội dung");
      return;
    }
    await axios.put(`http://localhost:3000/posts/${id}`, { title, content });
    navigate("/");
  };

  return (
    <PostForm
      title={title}
      content={content}
      onTitleChange={(e) => setTitle(e.target.value)}
      onContentChange={(e) => setContent(e.target.value)}
      onSubmit={handleSubmit}
      error={error}
    />
  );
};

export default EditPost;
