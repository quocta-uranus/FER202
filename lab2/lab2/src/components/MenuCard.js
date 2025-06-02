import React from "react";

function MenuCard({ pizza }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <div className="position-relative">
          {pizza.badge && (
            <span
              className={`badge ${pizza.badge.bgColor} position-absolute top-0 start-0 m-2`}
            >
              {pizza.badge.text}
            </span>
          )}
          <img src={pizza.image} className="card-img-top" alt={pizza.name} />
        </div>
        <div className="card-body text-dark text-center">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">
            {pizza.oldPrice && (
              <span className="text-decoration-line-through">
                ${pizza.oldPrice}
              </span>
            )}
            {pizza.oldPrice && (
              <span className="text-danger ms-2">${pizza.price}</span>
            )}
            {!pizza.oldPrice && <span>${pizza.price}</span>}
          </p>
          <a href="#" className="btn btn-dark w-100">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
