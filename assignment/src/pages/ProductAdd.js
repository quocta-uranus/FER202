import React from "react";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import "./ProductAdd.css";

function ProductAdd() {
  const navigate = useNavigate();

  const handleProductAdded = () => {
    navigate("/");
  };

  return (
    <>
      <ProductForm onAdd={handleProductAdded} />
      <button className="back-button" onClick={() => navigate("/")}>
        ← Quay lại danh sách
      </button>
    </>
  );
}

export default ProductAdd;
