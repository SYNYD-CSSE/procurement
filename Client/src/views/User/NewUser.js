import React, { Component } from 'react';
import {
  Badge,
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

import  Users  from "../../services/UserService";
import Employees from '../../services/EmployeeService';

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.onSumbitForm = this.onSumbitForm.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleChangeType= this.onHandleChangeType.bind(this);
    this.onHandleChangeID= this.onHandleChangeID.bind(this);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);

    this.state = {
      employee : true,
      employees : [],
      suppliers : [],
      userID :'',
      user : {
        id : '',
        username : '',
        password : '',
        role : ''
      },
      collapse: true,
      fadeIn: true,
      timeout: 300
    };

    const id = String(this.props.match.params.id);

    if(id.length===4 && id.charAt(0)==='E'){
      this.state.userID = id;
      this.state.employee =true;
      this.loadUser(this.state.userID);
      
    }
    else if(id!='new' && Number.isInteger(parseInt(id)) ){
      this.state.userID = id;
      this.state.employee =false;
      this.loadUser(this.state.userID);
    }
    
    else if(id==='new'){
      this.setState({user :{}});
      this.state.userID = '';
    }
    else {
      this.state.userID = '';
      this.props.history.push("/");
    }

    this.loadEmployeeList();
    this.loadSupplietList();
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  
  loadUser(id){
    Users.getUserByID(id).then(data=>{
      this.setState({user:data.data});
      console.log(this.state);
    }).catch(error=>{
      console.log(`Loading User get some error : ${error}`);
    });
  }

  loadEmployeeList(){
    Employees.getAllEmployees().then(data =>{
      this.setState({employees:data.data});

    }).catch(err =>{
      console.log(`Loading Employees get some errors ${err}`);
    });
  }

  loadSupplietList(){
    Users.getAllSuppliers().then(data=>{
      this.setState({suppliers:data.data});
    });
  }

  insertUser(user){
    Users.insertUser(user).then(data =>{
      this.setState({user:data.data});
      console.log(this.state.user);

    }).catch(err =>{
      console.log(`Inserting User get some errors ${err}`);
    });
  }
  onSumbitForm(e){
    e.preventDefault();
    if(this.state.userID ===''){
      Users.insertUser(this.state.user).then(data =>{
        console.log(data);
  
      }).catch(err =>{
        console.log(`Insert User get some errors ${err}`);
      });
    }
    else{
      Users.updateUser(this.state.userID,this.state.user).then(data =>{
        console.log(data);
        alert('User Sucessfully updated !');
        this.props.history.push("/user/list");
  
      }).catch(err =>{
        console.log(`Update User get some errors ${err}`);
      });
    }
    
  }

  onHandleChange(e){
  
    let key = e.target.id;
    let value = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      user : {
        ...prevState.user,
        [key]: value
      }
    }));
  }

  onHandleChangeType(e){
    
    let value = (parseInt(e.target.value) == 0 )? true : false;
    let role = this.state.employees[0].role;
    let user = this.state.user;
    user.role = (!value)? 'Supplier' : role ;
    
    this.setState({
      employee : value,
      user  : user
    });
  }
  onHandleChangeID(e){
    
    let value = e.target.value;
    let role = this.state.employees.filter(e=> e.id == value).map(o=>o.role)[0];
    let user = this.state.user;
    user.id = value;
    user.role = role ;

    
    this.setState({
      user  : user
    });
  }

  componentWillUnmount() {

  }

  componentDidMount() {

  }
  render() {
    let options;
    if(this.state.employee){
      options = this.state.employees.map(employee =>{
          return (
            <option key={employee.id} value={employee.id}>{employee.id}</option>
          );
      })
    } else {
      options = this.state.suppliers.map(supplier =>{
        return (
          <option key={supplier.supplierId} value={supplier.supplierId}>{supplier.supplierId}</option>
        );
    })
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
          <Form className="form-horizontal"  onSubmit={this.onSumbitForm}>
            <Card>
              <CardHeader>
                <strong>User Register Form</strong> | Add New User
              </CardHeader>
              <CardBody>
                
                  <FormGroup row>
                    <Col md="3">
                      <Label>User Type</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" checked={this.state.employee}  id="inline-radio1" name="usertype" value="0" id="type" name="type" onChange={this.onHandleChangeType} />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Employees </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" checked={!this.state.employee} id="inline-radio2" name="usertype" value="1" id="type" name="type" onChange={this.onHandleChangeType} />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Suppliers</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="select">List</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="select" id="select" value={this.state.user.id} onChange={this.onHandleChangeID}  >
                          {options}
                        </Input>
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">User Role</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="role" value={this.state.user.role} name="role" placeholder="User Role" onChange={this.onHandleChange} disabled />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="username">Username</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="username" value={this.state.user.username} name="username" placeholder="Username" onChange={this.onHandleChange}/>
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password" value={this.state.user.password} name="password" placeholder="Password" onChange={this.onHandleChange}/>
                      <FormText className="help-block">Please enter a complex password</FormText>
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

export default NewUser;
