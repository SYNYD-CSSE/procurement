import React, { Component } from "react";
import Dropdown from "./Dropdown";

class AddOrder extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Place Your Order Here</h3>
        <Dropdown />
        <br />
        <button className="btn btn-success">Add Items </button>
      </div>
    );
  }
}

export default AddOrder;
