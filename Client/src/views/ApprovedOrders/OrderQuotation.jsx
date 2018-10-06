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
  Table
} from "reactstrap";

import alertify from "alertifyjs";
import SentQuatation from "./SentQuatation";

class OrderQuotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approvedorder:{},
      items: [],
      maxIndex: 0
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
        console.log(this.state.approvedorder.items);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLanguage(langValue){
    var arr = [];
    console.log(localStorage.getItem("quoteitem"));
   arr.push(localStorage.getItem("quoteitem"));
   console.log(arr);
  //  this.setState({language: langValue});
}
  submitHandler(e) {
    e.preventDefault();

    const {   
      contractorId,
      status } = this.state.approvedorder;
      var orderId = this.props.match.params.refId;
var itemList = localStorage.getItem('quoteitem');
var supplier = "5baa76bc0fd6e60d4c65b853";
console.log(itemList);
    axios
      .post("http://localhost:5000/quotations" ,{
        supplier,
        orderId,
        sentItemsList: itemList
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


    var array = this.state.approvedorder.items;
    var tabRow = "";

    if (array) {
      tabRow = array.map((order, i) => {
        console.log(order);
      
        return (
          <SentQuatation
            key={i}
            name={order.name}
            quantity={order.quantity}
            // onClickCheckbox ={this.handleLanguage}
            />
          // <tr key={i}>
          //    <td>
   
          //    {order.name}
          //  <input type="hidden" text={order.name} name="name" value={order.name} onChange={this.inputHandler}/>
          //   </td>
          //   <td>
          //   <input type="hidden" text={order.quantity} name="quantity" value={order.quantity} onChange={this.inputHandler}/>
          //   {order.quantity}
          //   </td>
          //   <td>
          //       <div className="form-group">
          //           <input type="text" className="form-control" name="manufacturer"  value={this.state.manufacturer} onChange={this.inputHandler}/>
          //       </div>
          //   </td>
          //   <td>
          //       <div className="form-group">
          //           <input type="text" className="form-control" name="category"  value={this.state.category} onChange={this.inputHandler}/>
          //       </div>
          //   </td>
          //   <td>
          //       <div className="form-group">
          //           <input type="number" className="form-control" name="uprice" value={this.state.unitprice} onChange={this.inputHandler}/>
          //       </div>
          //   </td>
          //   <td>
          //       <div className="form-group">
          //           <input type="number" className="form-control" name="tprice" value={this.state.totalprice} onChange={this.inputHandler}/>
          //       </div>
          //   </td>
          //   </tr>
        );
      });
    } else {
      tabRow = " ";

      return tabRow;
    }
    console.log(this.state.approvedorder.items);
    console.log(this.setState.maxIndex);
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
                            id="orderId"
                            name="orderId"
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
                          <Label htmlFor="siteadress">Status</Label>
                          <Input
                            type="text"
                            id="status"
                            name="status"
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
                      <i className="fa fa-dot-circle-o" /> Submit
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


      <div className="container">
            <h4>ORDER ITEMS</h4>
            <br />
            <Table hover bordered striped responsive size="sm">
              <thead className="thead-dark">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Manufacturer</th>
                  <th>Category</th>
                  <th>Unit Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody> 
                  {tabRow}
              </tbody>
            </Table>
          </div>

      </div>
    );



  }
}

export default OrderQuotation;
