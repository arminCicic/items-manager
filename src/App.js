import React, { useState } from "react";
import "./App.css";
import ItemsForm from "./components/ItemsForm/ItemsForm";
import ItemsList from "./components/ItemsList/ItemsList";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  // I used couple of states here so my other components could have acces to this states trough props.

  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [editingItem, setEditingItem] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState("");

  // Using "lifting state up" handleEdit funcntion is triggerd in ItemsList component to start editing certain task.
  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingItem({ ...item });
  };

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
          updatedItem={updatedItem}
          setUpdatedItem={setUpdatedItem}
        />
        <ItemsList
          item={item}
          setItem={setItem}
          items={items}
          setItems={setItems}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleEdit={handleEdit}
        />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
