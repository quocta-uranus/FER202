import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import Modal from "./Modal";

function PrivateRoute({ children, requiredRole }) {
  const { currentUser } = useAuth();
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Nếu yêu cầu vai trò cụ thể và người dùng không có vai trò đó
  if (requiredRole && currentUser.role !== requiredRole) {
    return (
      <>
        <Modal
          isOpen={true}
          onClose={() => (window.location.href = "/")}
          title={t.accessDenied}
          message={t.accessDeniedMessage}
          buttonText={t.close}
        />
        <div style={{ display: "none" }}>{children}</div>
      </>
    );
  }

  // Nếu đã đăng nhập và có đủ quyền, hiển thị component con
  return children;
}

export default PrivateRoute;
