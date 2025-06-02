import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import porsche from "../images/porsche.jpg";

function Exercise7({ color }) {
  return (
    <div className={`card p-3 ${color}`} style={{ width: "18rem" }}>
      <img src={porsche} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Porsche</h5>
        <p className="card-text">
          Porsche is a renowned German automobile manufacturer with an emphasis
          in high-performance luxury sports cars, SUVs and sedans.
        </p>
        <a href="#" className="btn btn-danger">
          Get Ready
        </a>
      </div>
    </div>
  );
}

export default Exercise7;
