import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import { createProduct } from "../api";

function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currentPrice: "",
    image: "default.png",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData({ ...formData, image: file.name });
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      console.log("File sẽ được upload:", selectedFile.name);
    }

    await createProduct(formData);
    onAdd();

    // Reset form
    setFormData({
      name: "",
      description: "",
      price: "",
      currentPrice: "",
      image: "default.png",
    });
    setSelectedFile(null);
    setPreviewUrl("");
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Header>
          <h3 className="mb-0">Thêm sản phẩm</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Tên sản phẩm"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Mô tả sản phẩm"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Giá gốc</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Giá gốc"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Giá bán</Form.Label>
                  <Form.Control
                    type="number"
                    name="currentPrice"
                    placeholder="Giá bán"
                    value={formData.currentPrice}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Ảnh sản phẩm</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {previewUrl && (
                <div className="mt-3">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    thumbnail
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              )}
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
                Thêm sản phẩm
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductForm;
