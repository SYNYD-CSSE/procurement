import React, { Component } from "react";
import OrderItem from "./OrderItem";
import OrderService from "./OrderService";
import NotificationService from "./NotificationService";
class OrderItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [
        {
          name: "dfgfgfg",
          quantity: 3
        },
        {
          name: "fgfdg",
          quantity: 33
        }
      ]
    };
  }
  render() {
    return this.state.orderList.map((order, i) => {
      //console.log(item);

      return (
        <ul>
          <OrderItem name={order.name} quantity={order.quantity} />
        </ul>
      );
    });
  }
}

export default OrderItemList;
