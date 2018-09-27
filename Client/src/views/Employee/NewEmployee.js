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

import  Employees  from "../../services/EmployeeService";

class NewEmployee extends Component {
  constructor(props) {
    super(props);

    

    this.onSumbitForm = this.onSumbitForm.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      employeeID :'',
      employee : {
        firstName : '',
        lastName : '',
        address : '',
        email : '',
        phone : '',
        role : '',
        siteID : 0
      },
      collapse: true,
      fadeIn: true,
      timeout: 300
    };

    const id = String(this.props.match.params.id);
    
    if(id.length===4 && id.charAt(0)==='E'){
      this.state.employeeID = id;
      this.loadEmployee(this.state.employeeID);
      
    }
    else if(id==='new'){
      this.setState({employee :{}});
      this.state.employeeID = '';
    }
    else {
      this.state.employeeID = '';
      this.props.history.push("/");
    }

  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  
  loadEmployee(id){
    Employees.getEmployeeByID(id).then(data=>{
      this.setState({employee:data.data});
      console.log(this.state);
    });

  }
  insertEmployee(employee){
    Employees.insertEmployee(employee).then(data =>{
      this.setState({employee:data.data});
      console.log(this.state.employee);

    }).catch(err =>{
      console.log(`Inserting Employee get some errors ${err}`);
    });
  }
  onSumbitForm(e){
    e.preventDefault();
    if(this.state.employeeID ===''){
      Employees.insertEmployee(this.state.employee).then(data =>{
        console.log(data);
  
      }).catch(err =>{
        console.log(`Insert Employee get some errors ${err}`);
      });
    }
    else{
      Employees.updateEmployee(this.state.employeeID,this.state.employee).then(data =>{
        console.log(data);
  
      }).catch(err =>{
        console.log(`Update Employee get some errors ${err}`);
      });
    }
  }

  onHandleChange(e){
  
    let key = e.target.id;
    let value = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      employee : {
        ...prevState.employee,
        [key]: value
      }
    }));
  }

  componentWillUnmount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" lg="8">
          <Form className="form-horizontal" onSubmit={this.onSumbitForm}>
            <Card>
              <CardHeader>
                <strong>Employee Register Form</strong> | Add New Employee
              </CardHeader>
              <CardBody>
                
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="firstName">First Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="firstName" value={this.state.employee.firstName} name="firstName" placeholder="First Name" onChange={this.onHandleChange}/>
                      <FormText color="muted">Enter Employee's First Name </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="lastName">Last Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="lastName" value={this.state.employee.lastName} name="lastName" placeholder="Last Name" onChange={this.onHandleChange} />
                      <FormText color="muted">Enter Employee's Last Name </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="address">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="address" value={this.state.employee.address} name="address" placeholder="Address" onChange={this.onHandleChange} />
                      <FormText color="muted">Enter Employee's Address </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" value={this.state.employee.email} name="email" placeholder="Enter Email" autoComplete="email" onChange={this.onHandleChange} />
                      <FormText className="help-block">Enter Employee's Email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="phone">Phone Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="phone" value={this.state.employee.phone} name="phone" placeholder="Phone Number" onChange={this.onHandleChange} />
                      <FormText color="muted">Enter Employee's Phone Number </FormText>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">Role</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" value={this.state.employee.role} name="role" id="role" onChange={this.onHandleChange} >
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
                      <Input type="select" value={this.state.employee.siteID} name="siteID" id="siteID" onChange={this.onHandleChange} >
                        <option value="1">Kollupitiya</option>
                        <option value="2">Kaduwela</option>
                        <option value="3">Kottawa</option>
                        <option value="4">Malabe</option>
                        <option value="5">Battaramulla</option>
                      </Input>
                      <FormText color="muted">Select Employee Working Site </FormText>
                    </Col>
                  </FormGroup>
                  
                  
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewEmployee;
