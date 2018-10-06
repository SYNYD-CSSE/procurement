import React, { Component } from "react";
import axios from "axios";
import ViewOrderItems from "./ViewOrderItems"

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

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;

class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.submitHandler =this.submitHandler.bind(this);
        this.resetHandler =this.resetHandler.bind(this);
      
    }

  componentDidMount(){
   
  }
    submitHandler(e){
      e.preventDefault();

      let getOrderItems = JSON.parse(localStorage.getItem("orderitemarr")) ;
      console.log(getOrderItems);
      axios
        .post("http://localhost:5000/orders", {
          itemId:getOrderItems
        })
        .then(result => {
          console.log(result);
          alertify.notify("New Item Added!", "success", 5, function() {
            console.log("dismissed");
          });
        });
      this.props.history.push("/");

    }

    resetHandler(){
      localStorage.clear();
    }
    render() { 
        return ( 
            <div className="container">
            <Row>
              <Col sm="8" xs="6">
                <form onSubmit={this.submitHandler}>
                  <Card>
                    <CardHeader>
                      <strong>PLACE ORDER</strong>
                      <small> Form</small>
                    </CardHeader>
    
                    <CardBody>
                      <div className="row">
                        <div className="col-md-6">
                          <FormGroup row>
                            <Col xs="8">
                              <Label htmlFor="cid">Constructor Id</Label>
                              <Input
                                type="text"
                                id="cid"
                                name="cid"
                                value="C001"
                                readOnly
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col xs="8">
                              <Label htmlFor="status">Status</Label>
                              <Input
                                type="text"
                                id="status"
                                name="status"
                                value="Pending"
                                readOnly
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
                        &nbsp; &nbsp;
                        <Button
                          type="reset"
                          size="sm"
                          color="danger"
                          onClick={this.resetHandler}
                        >
                          <i className="fa fa-ban" /> Cancel Order
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </form>
              </Col>
            </Row>

            <ViewOrderItems/>
          </div>



         );
    }
}
 
export default PlaceOrder;