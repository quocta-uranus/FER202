import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  vi: {
    home: "Trang chủ",
    addCar: "Thêm xe mới",
    darkMode: "Chế độ tối",
    lightMode: "Chế độ sáng",
    language: "Ngôn ngữ",
    subtitle: "Khám phá niềm đam mê xe hơi của bạn",
    productList: "Danh sách xe",
    price: "Giá",
    actions: "Thao tác",
    view: "Xem",
    edit: "Sửa",
    delete: "Xóa",
    back: "Quay lại",
    save: "Lưu",
    productName: "Tên sản phẩm",
    description: "Mô tả",
    originalPrice: "Giá gốc",
    currentPrice: "Giá hiện tại",
    uploadImage: "Tải ảnh lên",
    dragAndDrop: "Kéo và thả ảnh hoặc nhấp để chọn",
    productDetails: "Chi tiết sản phẩm",
    editProduct: "Chỉnh sửa sản phẩm",
    addProduct: "Thêm sản phẩm mới",
    detail: "Chi tiết",
    cancel: "Hủy",
  },
  en: {
    home: "Home",
    addCar: "Add New Car",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "Language",
    subtitle: "Discover your car passion",
    productList: "Car List",
    price: "Price",
    actions: "Actions",
    view: "View",
    edit: "Edit",
    delete: "Delete",
    back: "Back",
    save: "Save",
    productName: "Product Name",
    description: "Description",
    originalPrice: "Original Price",
    currentPrice: "Current Price",
    uploadImage: "Upload Image",
    dragAndDrop: "Drag and drop image or click to select",
    productDetails: "Product Details",
    editProduct: "Edit Product",
    addProduct: "Add New Product",
    detail: "Detail",
    cancel: "Cancel",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "vi"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook để sử dụng ngôn ngữ
export const useLanguage = () => useContext(LanguageContext);
