import React from "react";
import "./dishOption.scss";
export default function DishOption() {
  return (
    <div className="dish-option">
      <button className="dish-option-description">Description</button>
      <button className="dish-option-proccessing">
        processing instructions
      </button>
      <button className="dish-option-storage">Storage instructions</button>
    </div>
  );
}
