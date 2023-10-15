import React, { useState } from "react";

function Form({ onAddItems }) {
  // working on state
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(null);

  let handleForm = (e) => {
    e.preventDefault();

    if (!description) return;

    setDescription("");
    setQuantity(1);

    // storing data input from form
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    // passing data into props
    onAddItems(newItem);

    console.log(newItem);
  };

  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
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
