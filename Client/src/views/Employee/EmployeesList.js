import React, { Component } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  PaginationLink,
  PaginationItem,
  Table,
  Pagination,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

import  Employees  from "../../services/EmployeeService";

class EmployeesList extends Component {
  constructor(props) {
    super(props)
    this.employees;

    this.toggle = this.toggle.bind(this);

    this.state = {
      employee:{},
      employees :[],
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  loadAllEmployees(){
    Employees.getAllEmployees().then(data =>{
      this.setState({employees:data.data});
      console.log(this.state.employees);

    }).catch(err =>{
      console.log(`Loading Employees get some errors ${err}`);
    });

  }

  returnRoleColor(role){
    switch (role) {
      case 'Regular' : return 'secondary';
      case 'Management' : return 'success';
      case 'SiteManager' : return 'info';
      case 'Constructor' : return 'warning';
      case 'Accountant' : return 'danger';
      default :  return 'primary';
    }
  }
  returnSiteLocation(siteID){
    switch (siteID) {
      case 0 : return 'Not Assign';
      case 1 : return 'Kollupitiya';
      case 2 : return 'Kaduwela';
      case 3 : return 'Kottawa';
      case 4 : return 'Malabe';
      case 5 : return 'Battaramulla';
      default :  return 'Invalid';
    }
  }

  deleteEmployee(id){

    Employees.deleteEmployeeByID(id).then(data =>{
      if(data){

        let employees = this.state.employees;
        let index = employees.findIndex(x=> x.id==id);
        employees.splice(index,1);
        this.setState({employees:employees});

        alert(`${data.data.id} Employee Deleted Successfully!`);
      }

    }).catch(err =>{
      console.log(`Deleting Employees get some errors ${err}`);
    });
  }

  onDelete(id){
    this.deleteEmployee(id);
  }

  onUpdate(id){
    this.props.history.push(`/employee/${id}`);
  }

  onInfo(id){
      let employee = this.state.employees.filter(e => {
        return e.id == id;
      })[0];
      this.setState({employee : employee});
      this.toggle();

  }

  componentWillUnmount() {
    this.loadAllEmployees();
  }

  componentDidMount() {
    this.loadAllEmployees();
  }


  render() {
    let employees
    if(this.state.employees.length > 0 ){
      employees = this.state.employees.map(employee =>{
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName  + ' ' +employee.lastName }</td>
              <td>{employee.address}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <Badge color={this.returnRoleColor(employee.role)}>{employee.role}</Badge>
              </td>
              <td>{employee.siteID}</td>
              <td>
                  <Button color="ghost-success" onClick={this.onInfo.bind(this,employee.id)} >
                    <i className="cui-info font-2xl"  ></i>
                  </Button>
                  <Button color="ghost-warning" onClick={this.onUpdate.bind(this,employee.id)}>
                    <i className="cui-note font-2xl"></i>
                  </Button>
                  <Button color="ghost-danger"  onClick={this.onDelete.bind(this,employee.id)}>
                    <i className="cui-trash font-2xl"></i>
                  </Button>
              </td>
            </tr>
          );
      })
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Employees
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Site</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {employees}
                    </tbody>
                  </Table>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous tag="button"></PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button"></PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <div className="modal-header">
              <h1 className="modal-title">
                  <i className="fa fa-user-circle"></i> 
                    {' ' + this.state.employee.firstName +' ' + this.state.employee.lastName }
                    <br/>
                    <small> <Badge color={this.returnRoleColor(this.state.employee.role)}>{this.state.employee.role}</Badge></small>
              </h1>
          </div>
          <ModalBody>
        <Table hover>
        <tbody>
          <tr>
            <td>
              <i className="fa fa-drivers-license"></i>  
            </td>
            <td><b>Employee ID</b></td>
            <td>{this.state.employee.id}</td>
          </tr>
          <tr>
            <td>
              <i className="fa fa-user"></i>  
            </td>
            <td><b>First Name</b></td>
            <td>{this.state.employee.firstName}</td>
          </tr>
          <tr>
            <td>
              <i className="fa fa-user"></i>  
            </td>
            <td><b>Last Name</b></td>
            <td>{this.state.employee.lastName}</td>
          </tr>
          <tr>
            <td>
              <i className="fa fa-envelope"></i>  
            </td>
            <td><b>Email</b></td>
            <td>{this.state.employee.email}</td>
          </tr>
          <tr>
            <td>
              <i className="fa fa-map-marker"></i>  
            </td>
            <td><b>Address</b></td>
            <td>{this.state.employee.address}</td>
          </tr>
          <tr>
            <td>
              <i className="fa fa-phone"></i>  
            </td>
            <td><b>Phone</b></td>
            <td>{this.state.employee.phone}</td>
          </tr>
          <tr>
            <td>
              <i className="fa fa-building"></i>  
            </td>
            <td><b>Site</b></td>
            <td>{this.returnSiteLocation(this.state.employee.siteID)}</td>
          </tr>
        </tbody>
      </Table>

          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default EmployeesList;
