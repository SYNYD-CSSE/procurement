import React, { Component } from "react";
import axios from "axios";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
  }

  componentDidMount() {
    axios
      .put("http://localhost:5000/items/" + this.props.match.params.itemId)
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Edit Item:
            <input
              type="text"
              value={this.state.items.item}
              className="form-control"
            />
          </label>
          <br />
          <input type="submit" value="Update" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default EditItem;
