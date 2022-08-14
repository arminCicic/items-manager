import React, { useState, useEffect } from "react";
import "./App.css";
import ItemsForm from "./components/ItemsForm/ItemsForm";
import ItemsList from "./components/ItemsList/ItemsList";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  // I used couple of states here so my other components could have acces to this states trough props.

  // Using a function to set initial state my items to make use of the local storage.
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });
  const [item, setItem] = useState("");
  const [editingItem, setEditingItem] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Using "lifting state up" principle, handleEdit funcntion is triggerd in ItemsList component to start editing certain item.
  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingItem({ ...item });
  };

  // On first render, app refresh and items array dependency change fire useEffect hook and set save my array with items to
  // local storage.

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <h1>Items Manager</h1>
      <div className="container">
        <ItemsForm
          items={items}
          setItems={setItems}
          setItem={setItem}
          item={item}
          editingItem={editingItem}
          setEditingItem={setEditingItem}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <ItemsList
          items={items}
          setItems={setItems}
          isEditing={isEditing}
          handleEdit={handleEdit}
        />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
