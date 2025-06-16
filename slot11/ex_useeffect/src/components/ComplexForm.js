import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ComplexForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(name && gender && country && agree);
  }, [name, gender, country, agree]);

  return (
    <Form className="my-4">
      <Form.Group>
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={!name && name !== ""}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Nam"
            name="gender"
            onChange={() => setGender("nam")}
          />
          <Form.Check
            inline
            type="radio"
            label="Nữ"
            name="gender"
            onChange={() => setGender("nữ")}
          />
        </div>
      </Form.Group>

      <Form.Group>
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Chọn quốc gia --</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Hoa Kỳ</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
      </Form.Group>

      <Button type="submit" disabled={!isFormValid}>
        Gửi
      </Button>
    </Form>
  );
};

export default ComplexForm;