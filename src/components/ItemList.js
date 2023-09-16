// src/components/ItemList.js
import React, { Component } from "react";

class ItemList extends Component {
  // Define state to store data from the API
  state = {
    items: [],
  };

  componentDidMount() {
    // Call the API when the component mounts
    this.getItems();
  }

  getItems() {
    // Make a GET request to fetch the list of items from the API
    fetch("YOUR_API_URL/items")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h2>Item List</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
