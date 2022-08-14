import React from "react";
import "./ItemsForm.css";

const ItemsForm = ({
  items,
  setItems,
  item,
  setItem,
  editingItem,
  setEditingItem,
  isEditing,
  setIsEditing,
}) => {
  // Handle text user enters in the main input field and set state of current item.
  const inputTextHandler = (e) => {
    setItem(e.target.value);
  };

  // Handle text user enters in the edit input field and set state of current item being edited.
  const editingTextHandler = (e) => {
    setEditingItem({ ...editingItem, text: e.target.value });
  };

  // Check if user tried to submit empty field, set the state of the items array which contains all the tasks, submit and clear input field.
  const submitHandler = (e) => {
    e.preventDefault();

    if (!item == "") {
      setItems((prevState) => {
        return [
          ...prevState,
          {
            id: items.length + 1,
            text: item,
          },
        ];
      });

      setItem("");
    }
  };

  // Submit the currently edited task.
  const editSubmitHandler = (e) => {
    e.preventDefault();

    handleUpdateEditItem(editingItem.id, editingItem);
  };

  // Map through items to check which item was updated and then update the state of the items array with new updated item.
  const handleUpdateEditItem = (id, updatedItem) => {
    const updatedItems = items.map((item) => {
      return item.id === id ? updatedItem : item;
    });

    setIsEditing(false);
    setItems(updatedItems);
  };

  // In JSX conditionally display the main input field or editing input field.

  return (
    <div className="formContainer">
      {!isEditing ? (
        <form onSubmit={submitHandler}>
          <label htmlFor="item"></label>
          <input
            onChange={inputTextHandler}
            value={item}
            id="item"
            type="text"
            placeholder="Start typing..."
            maxlength="47"
          ></input>
          <button>Add new Item</button>
        </form>
      ) : (
        <form onSubmit={editSubmitHandler}>
          <label htmlFor="editingItem"></label>
          <input
            onChange={editingTextHandler}
            value={editingItem.text}
            id="editingItem"
            type="text"
            placeholder="Start editing..."
            maxlength="47"
          ></input>
          <button>Update</button>
        </form>
      )}
    </div>
  );
};

export default ItemsForm;
