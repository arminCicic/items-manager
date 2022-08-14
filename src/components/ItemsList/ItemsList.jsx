import React from "react";
import "./ItemsList.css";

const ItemsList = ({ items, setItems, handleEdit, isEditing }) => {
  // Delete certain task from the tasks array and set new items state.
  const handleDelete = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  // In JSX map trough items array and return cards which represent single tasks, with unique keys.

  return (
    <div className="itemsContainer">
      {items.map((item) => (
        <div key={Math.floor(Math.random() * 100000000)} className="singleItem">
          <span>{item.text}</span>
          <div className="buttonsContainer">
            <button
              onClick={() => handleEdit(item)}
              className="editButton"
              disabled={isEditing}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="deleteButton"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
