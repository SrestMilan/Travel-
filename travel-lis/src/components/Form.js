import React, { useState } from "react";

function Form() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
    </div>
  );
}

export default Form;
