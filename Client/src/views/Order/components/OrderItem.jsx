import React, { Component } from "react";


class OrderItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
 
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.quantity}</td>
      </tr>

    );
  }
}

export default OrderItem;
