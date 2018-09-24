import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.onChangeHostName = this.onChangeHostName.bind(this);
    this.onChangePort = this.onChangePort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      quantity: "1",
      unit: ""
    };
  }
  onChangeHostName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePort(e) {
    this.setState({
      port: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("clicked");
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Add Item</h3>
        <form>
          <div className="form-group">
            <label>Item Name: </label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label>Unit: </label>
            <input type="text" name="unit" className="form-control" />
          </div>
          <div className="form-group">
            <label>Quantity: </label>
            <input type="number" name="qty" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              name=""
              value="Add"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
