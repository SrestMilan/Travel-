import React, { useState } from "react";
import Item from "./Item";

function PackingList({
  items,
  onDeleteItem,
  onHandleToggleItem,
  onHandleListItem,
}) {
  const [sortByItem, setSortItem] = useState("input");

  // derived state functionality
  let sortedListItems;

  // comparing state variable to sort items

  if (sortByItem === "input") sortedListItems = items;

  if (sortByItem === "description")
    sortedListItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortByItem === "packed")
    sortedListItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedListItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onHandleToggleItem={onHandleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortByItem}
          onChange={(e) => setSortItem(e.target.value)}
        >
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onHandleListItem}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
