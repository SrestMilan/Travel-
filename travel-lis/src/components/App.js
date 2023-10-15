import React from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

export default function App() {
  // utilizing state for child to parent communication
  const [items, setItems] = useState([]);

  // adding items in array
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // deleting items using id

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // functionality of handling pack items
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    // passing props into component
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandleToggleItem={handleToggleItems}
      />
      <Stats items={items} />
    </div>
  );
}
