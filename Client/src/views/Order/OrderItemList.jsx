import React, { Component } from "react";
import OrderItem from "./OrderItem";
import OrderService from "./OrderService";
import NotificationService, {
  NOTIF_ORDERLIST_CHANGED
} from "./NotificationService";

let ns = new NotificationService();
class OrderItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: []
    };
    this.onOrderListChanged = this.onOrderListChanged.bind(this);
  }
  componentDidMount() {
    ns.addObserver(NOTIF_ORDERLIST_CHANGED, this, this.onOrderListChanged);
  }
  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_ORDERLIST_CHANGED);
  }

  onOrderListChanged(newOrderList) {
    this.setState({ orderList: newOrderList });
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
