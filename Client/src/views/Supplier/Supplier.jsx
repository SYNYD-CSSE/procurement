import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import alertify from "alertifyjs";

class Supplier extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.deleteSupplier = this.deleteSupplier.bind(this);
  }

  deleteSupplier(event) {
    event.preventDefault();
    axios
      .delete("http://localhost:5000/suppliers/" + this.props.supplierId)
      .then(res => {
        alertify.notify("Supplier Deleted!", "success", 5, function() {
          console.log("dismissed");
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.supplierId}</td>
        <td>{this.props.name}</td>
        <td>{this.props.address}</td>
        <td>{this.props.email}</td>
        <td>

          <Link
            to={"/updateSupplier/" + this.props.supplierId}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </td>
        <td>
          <form onSubmit={this.deleteSupplier}>
            <input type="submit" value="Delete" className="btn btn-danger" />
          </form>
        </td>
      </tr>
    );
  }
}

export default Supplier;
