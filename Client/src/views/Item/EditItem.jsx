import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import alertify from "alertifyjs";
class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // quantity: "",
      // unit: ""
      items: {}
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/items/" + this.props.match.params.itemId)
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  inputHandler(e) {
    // this.setState({ [e.target.name]: e.target.value });
    const state = this.state.items;
    state[e.target.name] = e.target.value;
    this.setState({ items: state });
  }
  submitHandler(e) {
    e.preventDefault();
    const { name, unit } = this.state.items;

    axios
      .put("http://localhost:5000/items/" + this.props.match.params.itemId, {
        name,
        quantity,
        unit
      })
      .then(result => {
        console.log(result);
        alertify.notify("Item Updated!", "success", 5, function() {
          console.log("dismissed");
        });
      });
    this.props.history.push("/itemList");
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm="10" xs="6">
            <form onSubmit={this.submitHandler}>
              <Card>
                <CardHeader>
                  <strong>EDIT ITEM</strong>
                  <small> Form</small>
                </CardHeader>

                <CardBody>
                  <div className="row">
                    <div className="col-md-6">
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="name">Item Name</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Item Name"
                            onChange={this.inputHandler}
                            value={this.state.items.name}
                            required
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="unit">Unit</Label>
                          <Input
                            type="text"
                            id="unit"
                            name="unit"
                            placeholder="Enter Unit"
                            onChange={this.inputHandler}
                            value={this.state.items.unit}
                            required
                          />
                        </Col>
                      </FormGroup>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="float-right">
                    <Button type="submit" size="sm" color="primary">
                      <i className="fa fa-dot-circle-o" /> Update
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditItem;
