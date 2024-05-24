import React, { useState } from "react";


const ShoppingList = () => {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemtoRemove) {
    const newItem = items.filter((item) => {
      return item !== itemtoRemove;
    });
    setItems(newItem);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }
  return (
    <>
      <h1>Project 4: Shopping List</h1>
      <div className="shopping-list">
        <h2>Items To Buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

function Item({ item, onRemoveItem }) {
    return (
      <li>
        {item}
        <button className="delete" onClick={() => onRemoveItem(item)}>
          x
        </button>
      </li>
    );
  }
  
export default ShoppingList;
