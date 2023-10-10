import React, { useState } from "react";

function Form() {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(null);

  let handleForm = (e) => {
    e.preventDefault();

    setDescription("");
    setQuantity(1);

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
  };

  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default Form;
