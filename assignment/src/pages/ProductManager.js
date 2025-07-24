import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../api";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProductManager.css";

function ProductManager() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      setProducts(res.data);
      setFilteredProducts(res.data);
      setLoading(false);
    } catch (err) {
      setError("Không thể tải sản phẩm");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm(t.confirmDelete)) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (err) {
        setError("Không thể xóa sản phẩm");
      }
    }
  };

  // Tìm kiếm sản phẩm
  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    setCurrentPage(1);
  };

  // Xử lý khi nhấn Enter trong ô tìm kiếm
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Tính toán phân trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Tạo các nút phân trang
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Thay đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Trang trước
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Trang sau
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="product-manager">
      <div className="product-manager-header">
        <h2>{t.productManager}</h2>
        <div className="product-manager-actions">
          <Link to="/products/add" className="add-product-button">
            {t.addCar}
          </Link>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>{t.search}</button>
      </div>

      {loading ? (
        <div className="loader">Đang tải...</div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : currentItems.length === 0 ? (
        <p>{t.noProducts}</p>
      ) : (
        <>
          <table className="product-table">
            <thead>
              <tr>
                <th>{t.image}</th>
                <th>{t.productName}</th>
                <th>{t.description}</th>
                <th>{t.price}</th>
                <th>{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((product) => (
                <tr key={product.id}>
                  <td className="image-cell">
                    <img src={`/images/${product.image}`} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td className="description-cell">{product.description}</td>
                  <td className="price-cell">{product.currentPrice}</td>
                  <td className="actions-cell">
                    <Link to={`/products/${product.id}`}>{t.view}</Link>
                    <Link to={`/products/${product.id}/edit`}>{t.edit}</Link>
                    <button
                      className="delete"
                      onClick={() => handleDelete(product.id)}
                    >
                      {t.delete}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              {t.previous}
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </button>
            ))}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              {t.next}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductManager;
