import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onHandleToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onHandleToggleItem={onHandleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
