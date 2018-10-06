import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import alertify from "alertifyjs";

class ApproverOrder extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state= {
       supplierStatus : this.props.status,
       isActive : false
      } ;
  }

  render() {

    return (
      <tr>
        <td>{this.props.orderId}</td>
        <td>{this.props.constructor}</td>
        <td>{this.props.orderDate}</td>
        <td>{this.props.orderStatus}</td>
        {/* <td>
        <Link
            to={"/viewOrder/" + this.props.orderId}
            className="btn btn-primary">
            View Order
          </Link>
        </td> */}
        <td>
          <Link
            to={"/sendQuotation/" + this.props.orderId+"/"+this.props.refId}
            className="btn btn-primary">
            Send Quotation
          </Link>
        </td>
      </tr>
    );
  }
}

export default ApproverOrder;
