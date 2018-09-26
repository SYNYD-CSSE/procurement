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
} from 'reactstrap';

import  Employees  from "../../services/EmployeeService";

class EmployeesList extends Component {
  constructor(props) {
    super(props)
    this.employees;

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      employees :[],
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

  deleteEmployee(id){

    Employees.deleteEmployeeByID(id).then(data =>{
      if(data){

        let employees = this.state.employees;
        let index = employees.find(x=> x.id==id);
        employees.splice(index,1);
        this.setState({employees:employees});
        console.log(this.state.employees);
        alert(`${data.data.id} Employee Deleted Successfully!`);



      }

    }).catch(err =>{
      console.log(`Deleting Employees get some errors ${err}`);
    });
  }

  onDelete(id){
    this.deleteEmployee(id);
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
                  <Button color="ghost-success">
                    <i className="cui-info font-2xl"></i>
                  </Button>
                  <Button color="ghost-warning">
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
      </div>
    );
  }
}

export default EmployeesList;
