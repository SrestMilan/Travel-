import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const totalItems = items.length; // length of length of items
  const itemPacked = items.filter((item) => item.packed).length; // finding packedItems based on curent packed items length
  const itemPercentage = Math.round((itemPacked / totalItems) * 100); // total percentage

  return (
    <footer className="stats">
      <em>
        {itemPercentage === 100
          ? "You got everything to go ✈️"
          : `  💼You have ${totalItems} items on your list, and already packed
        ${itemPacked} (${itemPercentage}%)`}
      </em>{" "}
    </footer>
  );
}

export default Stats;
