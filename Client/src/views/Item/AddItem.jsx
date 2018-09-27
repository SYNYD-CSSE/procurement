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
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: "1",
      unit: ""
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    const { quantity, name, unit } = this.state;

    axios
      .post("http://localhost:5000/items", {
        name,
        quantity,
        unit
      })
      .then(result => {
        console.log(result);
        alertify.notify("New Item Added!", "success", 5, function() {
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
                  <strong>ADD ITEM</strong>
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
                            value={this.state.name}
                            required
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="quantity">Quantity</Label>
                          <Input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="Enter Quantity"
                            onChange={this.inputHandler}
                            value={this.state.quantity}
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
                            value={this.state.unit}
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
                      <i className="fa fa-dot-circle-o" /> Submit
                    </Button>
                    <Button
                      type="reset"
                      size="sm"
                      color="danger"
                      onClick={this.resetHandler}
                    >
                      <i className="fa fa-ban" /> Reset
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

export default AddItem;
