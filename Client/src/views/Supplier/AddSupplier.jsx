import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";

import alertify from "alertifyjs";

class AddSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      status: "",
      phone:"",
      email:"",
      rating:""
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();


    const { address, name, rating,phone,email,status } = this.state;

    axios
      .post("http://localhost:5000/suppliers", {
        name,
        phone,
        email,
        rating,
        address,
        status
      })
      .then(result => {
        console.log(result);

        alertify.notify("New Supplier Added!", "success", 5, function() {
          console.log("dismissed");
        });
      });
    this.props.history.push("/dashboards");
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm="10" xs="6">
            <form onSubmit={this.submitHandler} autofill="off">
              <Card>
                <CardHeader>
                  <strong>ADD SUPPLIER</strong>
                  {/* <small> Form</small> */}
                </CardHeader>

                <CardBody>
                  <div className="row">
                    <div className="col-md-6">
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="name">Supplier Name</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.name}
                            required
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            type="text"
                            id="address"
                            name="address"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.address}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="status">Status</Label>
                          {/* <Input
                            type="text"
                            id="status"
                            name="status"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.status}
                            required
                          /> */}
                         <input type="radio" 
                            id="status"
                            name="status" 
                            onChange={this.inputHandler}
                            value="Active"
                            checked={this.state.status === 'Active'} />Active
                         <input type="radio" 
                            id="status"
                            name="status" 
                            onChange={this.inputHandler}
                            value="Inactive"
                            checked={this.state.status === 'Inactive'}/>Inactive
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.phone}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="phone">Email</Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.email}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="rating">Rating</Label>
                          <Input
                            type="number"
                            id="rating"
                            name="rating"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.rating}
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

export default AddSupplier;
