import React from 'react';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Payment extends React.Component {

  constructor(props) {
    super(props);    

    this.toggle = this.toggle.bind(this);
    this.setModal = this.setModal.bind(this);
    this.state = {
      activeTab: '1',
      modal: false
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
                        <Button color="danger" >Pay Now</Button>
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
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Payment;