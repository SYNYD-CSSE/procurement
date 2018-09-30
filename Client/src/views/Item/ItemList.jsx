import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";
import SearchBar from "./Search";
import { Table } from "reactstrap";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:5000/items")
      .then(res => {
        this.setState({ itemList: res.data });
        console.log(this.state.itemList);
      })
      .catch(err => {
        console.log(err);
      });
  }



  render() {
    var array = this.state.itemList;
    var tabRow = "";

    if (array) {
      tabRow = array.map((item, i) => {
        console.log(item);

        return (
          <Item
            key={i}
            itemId={item.itemId}
            name={item.name}
            unit={item.unit}
            quantity={item.quantity}
          />
        );
      });
    } else {
      tabRow = " ";

      return tabRow;
    }
    return (
      <div className="container">
        <h4>ITEMS</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead className="thead-dark">
            <tr>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Unit</th>
              <th>Quantity</th>
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

export default ItemList;
