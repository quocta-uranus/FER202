import React from "react";
import { Carousel } from "react-bootstrap";

const foodImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsxY1RwYrwu0e7fYKjQyj4TSHcANi2GTO8Q&s",
  "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuaLkwjSkm-42KjZovsnZjpEYTymT93FNOVw&s",
  "https://www.eatingwell.com/thmb/SgJu29l-PDb9YarmY5BnGAbwP0w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/eat-the-rainbow-chopped-salad-with-basil-mozzarella-beauty-184-278133-4000x4000-ef8f3f0ad7134d2b860c51f5e7b38ce5.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlGdSeYCmAf5dCDYW4cZC5qGD5tAxxnkpKw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmomF1DksRYo9MLTC6zi2qx1XjX7R5PSqPYQ&s",
];

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thegoodmeat.ph/wp-content/uploads/2023/12/Masyadong-Good-Header-Supermarkets.png"
            alt="Banner Slide"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>

      <div className="d-flex justify-content-center gap-3 p-4 flex-wrap">
        {foodImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Food ${i}`}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #ccc",
            }}
          />
        ))}
      </div>

      <h3 className="text-danger text-center">This is Home Page</h3>
    </div>
  );
};

export default Home;
