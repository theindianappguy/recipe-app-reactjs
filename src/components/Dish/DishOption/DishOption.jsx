import React from "react";
import "./dishOption.scss";
export default function DishOption({ setOption }) {
  const handleDescription = () => {};
  return (
    <div className="dish-option">
      <button onClick={() => setOption(0)} className="dish-option-description">
        Description
      </button>
      <button onClick={() => setOption(1)} className="dish-option-proccessing">
        processing instructions
      </button>
      <button onClick={() => setOption(2)} className="dish-option-storage">
        Storage instructions
      </button>
    </div>
  );
}
