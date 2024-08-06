import React, { useState } from 'react';
import axios from 'axios';

function ItemList() {
  // Here we have used a items use state for storing the list of items object that we would be recieving from the get request so that we cabn show 
  // The items stored to the users 

  // The form data is nothing but the item name that the user would be typing in the search bar whihc is placed above



  const [items, setItems] = useState([]);
  const [formdata, setFormdata] = useState('');

  // fetch_item funxtion will be called when we click the button if nbo input provided the fetch item would display the whole list of items

  const fetch_item = async () => {
      const response = await axios.get('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12');
      setItems(response.data);
  };

  const queryoutput = formdata
    ? items.filter(item =>
        item.item.toLowerCase().includes(formdata.toLowerCase())
      )
    : items;

 

  return (
    <div className="item-list">
      <h2>Explore</h2>
      <button onClick={fetch_item}>Search</button>
      <input
        type="text"
        placeholder="Search"
        value={formdata}
        onChange={(e) => setFormdata(e.target.value)}
        className="search-input"
      />
      {queryoutput.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.item}</h3>
          <img src={item.image_url} alt={item.item} />
          <p>Price: ${item.price}</p>
          <p>Shipping: {item.shipping_method}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
