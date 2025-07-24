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
    productManager: "Quản lý sản phẩm",
    image: "Hình ảnh",
    search: "Tìm kiếm",
    searchPlaceholder: "Nhập tên sản phẩm...",
    noProducts: "Không có sản phẩm nào",
    confirmDelete: "Bạn có chắc chắn muốn xóa sản phẩm này?",
    previous: "Trước",
    next: "Sau",
    itemsPerPage: "Số mục trên mỗi trang",
    showingItems: "Hiển thị {start} đến {end} của {total} mục",
    login: "Đăng nhập",
    logout: "Đăng xuất",
    username: "Tên đăng nhập",
    password: "Mật khẩu",
    loginButton: "Đăng nhập",
    loginTitle: "Đăng nhập vào hệ thống",
    loginError: "Tên đăng nhập hoặc mật khẩu không đúng",
    welcomeUser: "Xin chào, {name}",
    requiredField: "Trường này là bắt buộc",
    accessDenied: "Từ chối truy cập",
    accessDeniedMessage: "Bạn không có quyền truy cập vào trang này.",
    close: "Đóng",
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
    productManager: "Product Manager",
    image: "Image",
    search: "Search",
    searchPlaceholder: "Enter product name...",
    noProducts: "No products found",
    confirmDelete: "Are you sure you want to delete this product?",
    previous: "Previous",
    next: "Next",
    itemsPerPage: "Items per page",
    showingItems: "Showing {start} to {end} of {total} items",
    login: "Login",
    logout: "Logout",
    username: "Username",
    password: "Password",
    loginButton: "Login",
    loginTitle: "Login to the system",
    loginError: "Invalid username or password",
    welcomeUser: "Welcome, {name}",
    requiredField: "This field is required",
    accessDenied: "Access Denied",
    accessDeniedMessage: "You don't have permission to access this page.",
    close: "Close",
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

export const useLanguage = () => useContext(LanguageContext);
