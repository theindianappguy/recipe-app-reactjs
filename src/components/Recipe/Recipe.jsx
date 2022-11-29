import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
  return (
      <div>
          {recipe}
      </div>
  );
}
