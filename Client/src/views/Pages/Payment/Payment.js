import React from 'react';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Payment extends React.Component {

  constructor(props) {
    super(props);    

    this.toggle = this.toggle.bind(this);
    this.setModal = this.setModal.bind(this);
    this.payModal = this.payModal.bind(this);
    this.state = {
      activeTab: '1',
      modal: false,
      payOpen: false
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  setModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  payModal() {
    this.setState({
      payOpen: !this.state.payOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Pending Payments              
            </NavLink>            
          </NavItem>


          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Successfull Payments
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>


          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Table borderless hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Amout</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>120</td>
                      <td>2018/08/15</td>
                      <td>12500</td>
                      <td>
                        <Button color="success" onClick={this.setModal}>View</Button>
                            <Modal isOpen={this.state.modal} toggle={this.setModal} className={this.props.className}>
                              <ModalHeader toggle={this.setModal}>Order Details</ModalHeader>
                              <ModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                        <Button color="danger" onClick={this.payModal}>Pay Now</Button>
                            <Modal isOpen={this.state.payOpen} toggle={this.payModal} className={this.props.className}>
                              <ModalHeader toggle={this.payModal}>Payment Details</ModalHeader>
                              <ModalBody>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Payment Method</Label>
                                    <Col sm={10}>
                                      <Input name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Voucher No</Label>
                                    <Col sm={10}>
                                      <Input name="password" id="examplePassword" placeholder="password placeholder" />
                                    </Col>
                                </FormGroup>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                      </td>
                    </tr>  

                    <tr>
                      <th scope="row">1</th>
                      <td>120</td>
                      <td>2018/08/15</td>
                      <td>12500</td>
                      <td>
                        <Button color="success" >View</Button>
                        <Button color="danger" >Pay Now</Button>
                      </td>
                    </tr>                    
                    
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="2">
            <Row>
              <Col sm="6">
              <Table borderless hover responsive size="lg">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Order ID</th>
                      <th>Payment ID</th>
                      <th>Amout</th>
                      <th>Date</th>
                      <th>Supplier ID</th>
                      <th>Site Manager</th>
                      <th>Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>120</td>
                      <td>75</td>
                      <td>12500</td>
                      <td>2018/08/15</td>
                      <td>Access</td>             
                      <td>MAGA</td>   
                      <td>Voucher</td>  
                    </tr> 
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Payment;