import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../api";
import "./ProductEdit.css";
import { useLanguage } from "../contexts/LanguageContext";

function ProductEdit() {
  const { t } = useLanguage();

  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setFormData(res.data));
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, formData);
    navigate(`/products/${id}`);
  };

  if (!formData) return <div className="loading">{t.loading}...</div>;

  return (
    <>
      <h2>{t.editProduct}</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="name">{t.productName}</label>
          <input
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">{t.description}</label>
          <input
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">{t.price}</label>
            <input
              id="price"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentPrice">{t.currentPrice}</label>
            <input
              id="currentPrice"
              name="currentPrice"
              className="form-control"
              value={formData.currentPrice}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">{t.image}</label>
          <input
            id="image"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate(`/products/${id}`)}
          >
            {t.cancel}
          </button>
          <button type="submit" className="save-button">
            {t.save}
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductEdit;
