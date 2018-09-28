import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ];

class Dropdown extends Component {
  state = {
    selectedOption: null,
    itemList: []
  };

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

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    var array = this.state.itemList;
    var tabRow = "";

    if (array) {
      tabRow = array.map(opt => ({ label: opt.name, value: opt.name }));
    } else {
      tabRow = " ";

      return tabRow;
    }
    return (
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={tabRow}
      />
    );
  }
}
export default Dropdown;
