import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Post from "../components/Post";
import PostDetail from "../components/PostDetail";
import Login from "../components/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
