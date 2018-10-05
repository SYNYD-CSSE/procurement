import React, { Component } from "react";
import axios from "axios";
import ApprovedOrder from "./ApprovedOrder";
import { Table } from "reactstrap";

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;

class ViewApprovedOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:5000/orders/approvedOrders")
      .then(res => {
        this.setState({ orders: res.data });
        console.log(this.state.orders);
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    var array = this.state.orders;
    var tabRow = "";

    if (array) {
      tabRow = array.map((order, i) => {
        console.log(order);

        return (
          <ApprovedOrder
            key={i}
            orderId={order.orderId}
            constructor={order.constructorId}
            orderDate={order.orderDate}
            orderStatus = {order.status}
          />
        );
      });
    } else {
      tabRow = " ";

      return tabRow;
    }
    return (
      <div className="container">
        <h4>Suppliers</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead className="thead-dark">
            <tr>
              <th>Order Id</th>
              <th>Constructor Id</th>
              <th>Order Date</th>
              <th>Status</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{tabRow}</tbody>
        </Table>
      </div>
    );
  }
}

export default ViewApprovedOrders;
