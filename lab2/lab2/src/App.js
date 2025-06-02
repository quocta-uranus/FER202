import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Thêm Bootstrap Icons
import "./App.css";

function App() {
  return (
    <div>
      {/* Thanh điều hướng */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Pizza House
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Bật/tắt điều hướng"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Phần hero với hình ảnh pizza */}
      <div className="hero-banner position-relative">
        <div className="carousel-item active">
          <img
            src="/pizza1.jpg"
            className="d-block w-100 hero-img"
            alt="Neapolitan Pizza"
          />
          <div className="carousel-caption text-center">
            <h2 className="display-4 fw-bold">Neapolitan Pizza</h2>
            <p className="lead">
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option!
            </p>
          </div>
        </div>
      </div>

      {/* Phần thực đơn */}
      <section id="menu" className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4">Our Menu</h2>
          <div className="row">
            {/* Pizza 1 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
                    SALE
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                    className="card-img-top"
                    alt="Margherita Pizza"
                  />
                </div>
                <div className="card-body text-dark text-center">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">
                    <span className="text-decoration-line-through">$40.00</span>
                    <span className="text-danger ms-2">$34.00</span>
                  </p>
                  <a href="#" className="btn btn-dark w-100">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            {/* Pizza 2 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5"
                  className="card-img-top"
                  alt="Mushroom Pizza"
                />
                <div className="card-body text-dark text-center">
                  <h5 className="card-title">Mushroom Pizza</h5>
                  <p className="card-text">$25.00</p>
                  <a href="#" className="btn btn-dark w-100">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            {/* Pizza 3 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  <span className="badge bg-success text-white position-absolute top-0 start-0 m-2">
                    NEW
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                    className="card-img-top"
                    alt="Hawaiian Pizza"
                  />
                </div>
                <div className="card-body text-dark text-center">
                  <h5 className="card-title">Hawaiian Pizza</h5>
                  <p className="card-text">$30.00</p>
                  <a href="#" className="btn btn-dark w-100">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            {/* Pizza 4 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
                    SALE
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
                    className="card-img-top"
                    alt="Pesto Pizza"
                  />
                </div>
                <div className="card-body text-dark text-center">
                  <h5 className="card-title">Pesto Pizza</h5>
                  <p className="card-text">
                    <span className="text-decoration-line-through">$30.00</span>
                    <span className="text-danger ms-2">$19.00</span>
                  </p>
                  <a href="#" className="btn btn-dark w-100">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần đặt bàn */}
      <section id="contact" className="py-5 bg-dark">
        <div className="container">
          <h2 className="text-center mb-4">Book Your Table</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name *"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email *"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <select className="form-select">
                <option selected>Select a Service</option>
                <option value="dine-in">Dine In</option>
                <option value="takeaway">Takeaway</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Please write your comment"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning px-4 py-2">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
