import React, { Component } from "react";
import axios from "axios";
import Supplier from "./Supplier";
import { Table } from "reactstrap";

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;

class ViewSuppliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers: []
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:5000/suppliers")
      .then(res => {
        this.setState({ suppliers: res.data });
        console.log(this.state.suppliers);
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    var array = this.state.suppliers;
    var tabRow = "";

    if (array) {
      tabRow = array.map((supplier, i) => {
        console.log(supplier);

        return (
          <Supplier
            key={i}
            supplierId={supplier.supplierId}
            name={supplier.name}
            address={supplier.address}
            email={supplier.email}
            status={supplier.status}
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
              <th>Supplier Id</th>
              <th>Supplier Name</th>
              <th>Address</th>
              <th>Email</th>
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

export default ViewSuppliers;
