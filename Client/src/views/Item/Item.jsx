import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.deleteItemService = new ItemService();
    // this.deleteMember = this.deleteMember.bind(this);
  }

  // deleteMember() {
  //   // event.preventDefault();
  //   this.deleteItemService.deleteData(this.props.id);
  // }

  //   sendToLocal() {
  //     localStorage.clear();

  //     const item = {
  //       pid: this.props.pId,
  //       bht: this.props.bht,
  //       name: this.props.name,
  //       wardNo: this.props.wardNo,
  //       bedNo: this.props.bedNo
  //     };

  //     localStorage.setItem("patientDetails", JSON.stringify(patient));
  //   }

  render() {
    return (
      <tr>
        <td>{this.props.itemId}</td>
        <td>{this.props.name}</td>
        <td>{this.props.unit}</td>
        <td>{this.props.quantity}</td>
        <td>
          {/* <Link to="/bht/profile">
            <button
              onClick={this.sendToLocal.bind(this)}
              type="button"
              className="btn btn-success btn-sm"
            >
              <i className="fa fa-search fa-sm" /> View BHT
            </button>
          </Link> */}
        </td>
        {/* <td>
          <input
            type="button"
            onClick={this.deleteMember}
            value="Delete"
            className="btn btn-danger"
          />
        </td> */}
      </tr>
    );
  }
}

export default Item;
