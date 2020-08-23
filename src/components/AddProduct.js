import React, { Component } from "react";

class AddProduct extends Component {
  render() {
    return (
      <div className="add-prod-div">
        <h2>Add a Product</h2>
        <form className="form-add-prod">
          <label>Name</label>
          <input type="text" id="name"></input>
          <label>Description</label>
          <input type="text" id="description"></input>
          <label>Price</label>
          <input type="text" id="price"></input>
          <label>Rating</label>
          <input type="text" id="rating"></input>
          <label>Image Link</label>
          <input type="text" id="img"></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
