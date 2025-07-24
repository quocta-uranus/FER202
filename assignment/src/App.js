import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import ProductEdit from "./pages/ProductEdit";
import ProductAdd from "./pages/ProductAdd";
import ProductManager from "./pages/ProductManager";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route
                path="/products/add"
                element={
                  <PrivateRoute>
                    <ProductAdd />
                  </PrivateRoute>
                }
              />
              <Route
                path="/products/:id/edit"
                element={
                  <PrivateRoute>
                    <ProductEdit />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager"
                element={
                  <PrivateRoute requiredRole="admin">
                    <ProductManager />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
