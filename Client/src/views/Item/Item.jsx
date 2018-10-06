import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import alertify from "alertifyjs";

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(event) {
    event.preventDefault();
    axios
      .delete("http://localhost:5000/items/" + this.props.itemId)
      .then(res => {
        alertify.notify("Item Deleted!", "success", 5, function() {
          console.log("dismissed");
        });
      })
      .catch(err => console.log(err));
  }

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

          <Link
            to={"/editItem/" + this.props.itemId}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </td>
        <td>
          <form onSubmit={this.deleteItem}>
            <input type="submit" value="Delete" className="btn btn-danger" />
          </form>
        </td>
      </tr>
    );
  }
}

export default Item;
