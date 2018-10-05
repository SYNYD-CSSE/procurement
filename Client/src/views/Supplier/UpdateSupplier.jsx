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
  Input,
} from "reactstrap";


import alertify from "alertifyjs";

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;

class UpdateSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers:{}
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    const state = this.state.suppliers;
    state[e.target.name] = e.target.value;
    this.setState({ suppliers: state });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/suppliers/" + this.props.match.params.supplierId)
      .then(response => {
        this.setState({ suppliers: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  submitHandler(e) {
    e.preventDefault();

    const { address, name, rating,phone,email,status } = this.state.suppliers;

    axios
      .put("http://localhost:5000/suppliers/supplier/update/" + this.props.match.params.supplierId, {
        name,
        phone,
        email,
        rating,
        address,
        status
      })
      .then(result => {
        console.log(result);
        alertify.notify(" Supplier Updated!", "success", 5, function() {
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
                  <strong>UPDATE SUPPLIER</strong>
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
                            value={this.state.suppliers.name}
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
                            value={this.state.suppliers.address}
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
                            checked={this.state.suppliers.status === 'Active'} />Active
                         <input type="radio" 
                            id="status"
                            name="status" 
                            onChange={this.inputHandler}
                            value="Inactive"
                            checked={this.state.suppliers.status === 'Inactive'}/>Inactive
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
                            value={this.state.suppliers.phone}
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
                            value={this.state.suppliers.email}
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
                            value={this.state.suppliers.rating}
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
                    <Button
                      type="reset"
                      size="sm"
                      color="danger"
                      onClick={this.resetHandler}>
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

export default UpdateSupplier;
