import React, { useState } from "react";
import Image from "./supplement.png";
import "./Card.css";

function Card({ product }) {
  return (
    <div className="products-card">
      <img src={Image} alt="" />
      <h4>{product}</h4>
    </div>
  );
}

export default Card;
