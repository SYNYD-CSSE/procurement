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

class OrderQuotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approvedorder:{}
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    const state = this.state.sentQuotation;
    state[e.target.name] = e.target.value;
    this.setState({ sentQuotation: state });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/orders/order/" + this.props.match.params.orderId)
      .then(response => {
        this.setState({ approvedorder: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  submitHandler(e) {
    e.preventDefault();

    const { address, name, rating,phone,email,status } = this.state.suppliers;

    axios
      .put("" + this.props.match.params.orderId, {
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
                  <strong>SEND QUOTATION</strong>
                  {/* <small> Form</small> */}
                </CardHeader>

                <CardBody>
                  <div className="row">
                    <div className="col-md-6">
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="name">Order Id</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.approvedorder.orderId}
                            required
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="contractorId">contractor Id</Label>
                          <Input
                            type="text"
                            id="contractorId"
                            name="contractorId"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.approvedorder.constructorId}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="siteadress">Site Address</Label>
                          <Input
                            type="text"
                            id="siteadress"
                            name="siteadress"
                            placeholder=""
                            onChange={this.inputHandler}
                            value={this.state.approvedorder.status}
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

export default OrderQuotation;
