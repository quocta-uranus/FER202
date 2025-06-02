import React from "react";
import MenuCard from "./MenuCard";

function Menu() {
  const pizzas = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "34.00",
      oldPrice: "40.00",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      badge: {
        text: "SALE",
        bgColor: "bg-warning text-dark",
      },
    },
    {
      id: 2,
      name: "Mushroom Pizza",
      price: "25.00",
      image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5",
    },
    {
      id: 3,
      name: "Hawaiian Pizza",
      price: "30.00",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      badge: {
        text: "NEW",
        bgColor: "bg-success text-white",
      },
    },
    {
      id: 4,
      name: "Pesto Pizza",
      price: "19.00",
      oldPrice: "30.00",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
      badge: {
        text: "SALE",
        bgColor: "bg-warning text-dark",
      },
    },
  ];

  return (
    <section id="menu" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row">
          {pizzas.map((pizza) => (
            <MenuCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
