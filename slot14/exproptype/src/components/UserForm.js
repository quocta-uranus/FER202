import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const { name, age, email, phone, agree } = formData;

    if (!name) newErrors.name = "Tên không được để trống!";
    else if (name.length < 3 || name.length > 50)
      newErrors.name = "Tên phải từ 3 đến 50 ký tự!";

    const ageNum = parseInt(age, 10);
    if (!age) newErrors.age = "Tuổi không được để trống!";
    else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100)
      newErrors.age = "Tuổi phải từ 18 đến 100!";

    if (!email) newErrors.email = "Email không được để trống!";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = "Email không hợp lệ!";

    if (!phone) newErrors.phone = "Số điện thoại không được để trống!";
    else if (!/^\d{10,15}$/.test(phone))
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";

    if (!agree) newErrors.agree = "Bạn phải đồng ý với điều khoản!";

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowAlert(false);
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>Đăng Ký Người Dùng</h3>
      {showAlert && (
        <Alert variant="danger">Vui lòng sửa các lỗi bên dưới.</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý với điều khoản"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
