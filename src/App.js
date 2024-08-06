import React, { useState } from 'react';
import ItemList from './component/ItemList';
import AddItemForm from './component/Additems';

function App() {
  const [AddForm, setAddForm] = useState(false);
  const [ItemList, setItemList] = useState(true);

  const handleAddForm = () => {
    setAddForm(true);
    setItemList(false);
  };

  const handleItemList = () => {
    setAddForm(false);
    setItemList(true);
  };

  return (
    <div className="app">
      <header>
        <button onClick={handleAddForm}>Add Item</button>
        <button onClick={handleItemList}>View Items</button>
      </header>
      {AddForm && <AddItemForm />}
      {ItemList && <ItemList />}
    </div>
  );
}

export default App;
