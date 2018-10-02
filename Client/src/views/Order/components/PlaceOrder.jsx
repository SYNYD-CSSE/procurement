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
class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                readonly
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
                                readonly
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
 
export default PlaceOrder;