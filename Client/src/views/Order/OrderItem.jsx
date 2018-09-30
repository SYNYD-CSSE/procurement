import React, { Component } from "react";

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li>
        <p>
          <a className="btn btn-danger">X</a>
        </p>
        <p>
          <b>Name :</b>
          {this.props.name}
        </p>
        <p>
          <b>Quantity :</b>
          {this.props.quantity}
        </p>
      </li>
    );
  }
}

export default OrderItem;
