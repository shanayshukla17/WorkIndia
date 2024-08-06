import React, { useState } from 'react';
import axios from 'axios';

function Additems() {
  const [item, setItem] = useState({
    item: '',
    image_url: '',
    price: '',
    shipping_method: ''
  });

  const updateitems = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    try {
      await axios.post('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12', item);
      alert('Item added successfully!');
      setItem({ item: '', image_url: '', price: '', shipping_method: '' });
    } catch (error) {
      alert('Error');
    }
  };

  return (
    <form onSubmit={submit} className="add-item-form">
      <input
        name="item"
        value={item.item}
        onChange={updateitems}
        placeholder="Item name"
        required
      />
      <input
        name="image_url"
        value={item.image_url}
        onChange={updateitems}
        placeholder="Image URL"
        required
      />
      <input
        name="price"
        type="number"
        value={item.price}
        onChange={updateitems}
        placeholder="Price"
        required
      />
      <input
        name="shipping_method"
        value={item.shipping_method}
        onChange={updateitems}
        placeholder="Shipping method"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default Additems;