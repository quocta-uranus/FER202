import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById } from "../api";
import "./ProductDetail.css";
import { useLanguage } from "../contexts/LanguageContext";

function ProductDetail() {
  const { t } = useLanguage();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="loader">Đang tải...</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <h2>{product.name}</h2>
      </div>
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={`/images/${product.image}`} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-price">
            <span className="product-detail-original-price">
              {product.price}
            </span>
            <span className="product-detail-current-price">
              {product.currentPrice}
            </span>
          </div>
          <div className="product-detail-actions">
            <button onClick={() => navigate(`/products/${product.id}/edit`)}>
              {t.editProduct}
            </button>
          </div>
          <Link to="/" className="back-link">
            ← {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
