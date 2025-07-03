import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/posts/${id}`, { method: "DELETE" });
    navigate("/");
  };

  return (
    <DeleteConfirmation
      onConfirm={handleDelete}
      onCancel={() => navigate("/")}
    />
  );
};

export default DeletePost;
