import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Users from '../../services/UserService';


class Login extends Component {

  constructor(props) {

    super(props)

    this.onSumbitForm = this.onSumbitForm.bind(this);
    this.onHandleChangeUserName = this.onHandleChangeUserName.bind(this);
    this.onHandleChangePassWord  = this.onHandleChangePassWord.bind(this);
    
    this.state = {
      user: {
        username : '',
        password : ''
      }
    }

  }

  onSumbitForm(e){

    e.preventDefault();

      Users.login(this.state.user).then(data =>{
        console.log(data);
        this.props.history.push("/");
      }).catch(err =>{
        console.log(`Login user get some errors ${err}`);
      });
 
  }  
  
  onHandleChangeUserName(e){
  
    let user =this.state.user;
    user.username= e.target.value;
    this.setState({
      user:user
    })
  }
  onHandleChangePassWord(e){
  
    let user =this.state.user;
    user.password= e.target.value;
    this.setState({
      user:user
    })
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <Card>
                <CardBody>
                  <Form onSubmit={this.onSumbitForm}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" value={this.state.user.username} name="username" onChange={this.onHandleChangeUserName} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="current-password" value={this.state.user.password} name="password" onChange={this.onHandleChangePassWord} />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
