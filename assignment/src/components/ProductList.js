import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api";
import { Link } from "react-router-dom";
import "./ProductList.css";

import { useLanguage } from "../contexts/LanguageContext";

function ProductList() {
  const { t } = useLanguage();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      setError("Không thể tải sản phẩm");
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>{t.productList}</h2>
      <div className="product-list-header"></div>
      {error && <p className="error-message">{error}</p>}
      <ul className="products-grid">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">
                <span className="original-price">{product.price}</span>
                <span className="current-price">{product.currentPrice}</span>
              </div>
              <div className="product-actions">
                <button
                  className="delete"
                  onClick={() => handleDelete(product.id)}
                >
                  {t.delete}
                </button>
                <Link to={`/products/${product.id}`}>{t.detail}</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
