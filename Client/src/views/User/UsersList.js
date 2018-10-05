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
  ButtonGroup,
  Button,
} from 'reactstrap';

import  Users  from "../../services/UserService";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.users;

    this.toggle = this.toggle.bind(this);
    this.state = {
      user : {},
      users: [],
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

  loadAllUsers(){
    Users.getAllUsers().then(data =>{
      this.setState({users:data.data});
      console.log(this.state.users);

    }).catch(err =>{
      console.log(`Loading Users get some errors ${err}`);
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

  deleteUser(id){

    Users.deleteUserByID(id).then(data =>{
      if(data){

        let users = this.state.users;
        let index = users.findIndex(x=> x.id==id);
        users.splice(index,1);
        this.setState({users:users});

        alert(`${data.data.id} User Deleted Successfully!`);
      }

    }).catch(err =>{
      console.log(`Deleting Users get some errors ${err}`);
    });
  }

  onDelete(id){
    this.deleteUser(id);
  }

  onUpdate(id){
    this.props.history.push(`/user/${id}`);
  }

  onInfo(id){
    if (id.length===4){
      this.props.history.push(`/employee/list`);
    }
    else{
      this.props.history.push(`/suppliers/`);
    }

  }

  componentWillUnmount() {
    this.loadAllUsers();
  }

  componentDidMount() {
    this.loadAllUsers();
  }

  render() {
    let users
    if(this.state.users.length > 0 ){
      users = this.state.users.map(user =>{
          return (
            <tr key={user.id} onClick={this.onInfo.bind(this,user.id)}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>
                <Badge color={this.returnRoleColor(user.role)}>{user.role}</Badge>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="success" size="sm" onClick={this.onInfo.bind(this,user.id)} >
                    <i className="cui-info"></i> Info
                  </Button>
                  <Button color="warning" size="sm" onClick={this.onUpdate.bind(this,user.id)}>
                    <i className="cui-note"></i> Edit
                  </Button>
                  <Button color="danger" size="sm" onClick={this.onDelete.bind(this,user.id)}>
                    <i className="cui-trash"></i> Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          );
      })
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="8">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Simple Table
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users}
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

export default UsersList;
