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
class ViewApprovedOrders extends Component {
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
      .get("http://localhost:5000/suppliers/", {
        name,
        phone,
        email,
        rating,
        address,
        status
      })
      .then(result => {
        console.log(result);
        // alertify.alert("Alert Title", "New Addmission Added!", function() {
        //   alertify.success("Ok");
        // });
        // alertify.notify("New Item Added!", "success", 5, function() {
        //   console.log("dismissed");
        // });
      });
    this.props.history.push("/dashboards");
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm="10" xs="6">
              <Card>
                <CardHeader>
                  <strong>ADD SUPPLIER</strong>
                  {/* <small> Form</small> */}
                </CardHeader>

                <CardBody>
                <Table borderless hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Supplier ID</th>
                      <th>Name</th>
                      {/* <th>Items</th> */}
                      <th>Status</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <Button color="success" onClick="">View</Button>
                      </td>
                      <td>
                        <Button color="success" onClick="">Update</Button>
                      </td>
                      <td>
                        <Button color="danger" onClick="">Delete</Button>
                      </td>
                    </tr>  

                       
                    
                  </tbody>
                </Table>
                </CardBody>
                <CardFooter>
           
                </CardFooter>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewApprovedOrders;
