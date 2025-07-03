import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostForm from "./PostForm";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Vui lòng nhập tiêu đề và nội dung");
      return;
    }
    await axios.post("http://localhost:3000/posts", { title, content });
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

export default CreatePost;
