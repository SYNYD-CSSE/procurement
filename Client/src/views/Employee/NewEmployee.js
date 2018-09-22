import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

class NewEmployee extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Employee Register Form</strong> | Add New Employee
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="firstName">First Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="firstName" name="firstName" placeholder="First Name" />
                      <FormText color="muted">Enter Employee's First Name </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="lastName">Last Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                      <FormText color="muted">Enter Employee's Last Name </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="address">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="address" name="address" placeholder="Address" />
                      <FormText color="muted">Enter Employee's Address </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email"/>
                      <FormText className="help-block">Enter Employee's Email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="phone">Phone Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="phone" name="phone" placeholder="Phone Number" />
                      <FormText color="muted">Enter Employee's Phone Number </FormText>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">Role</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="role" id="role">
                        <option value="Regular">Regular</option>
                        <option value="Constructor">Constructor</option>
                        <option value="SiteManager">Site Manager</option>
                        <option value="Management">Management</option>
                        <option value="Accountant">Accountant</option>
                      </Input>
                      <FormText color="muted">Select Employee's Job Role </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="siteID">Site</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="siteID" id="siteID">
                        <option value="1">Kollupitiya</option>
                        <option value="2">Kaduwela</option>
                        <option value="3">Kottawa</option>
                        <option value="4">Malabe</option>
                        <option value="5">Battaramulla</option>
                      </Input>
                      <FormText color="muted">Select Employee Working Site </FormText>
                    </Col>
                  </FormGroup>
                  
                  </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewEmployee;
