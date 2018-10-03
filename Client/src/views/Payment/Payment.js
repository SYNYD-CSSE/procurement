import React from 'react';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import OrderItem from "./OrderItem";
import PaymentItem from "./PaymentItem";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Payment extends React.Component {

  constructor(props) {
    super(props);    
    this.setModal = this.setModal.bind(this)
    this.setPayModal = this.setPayModal.bind(this)
    this.toggle = this.toggle.bind(this);
    
    this.state = {
      activeTab: '1',
      modal: false,
      payOpen: false,
      items : [],
      count : 0,
      amount : 0,
      paymentItems : []
    };
    
  }

  setModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  setPayModal() {
    this.setState({
      payOpen: !this.state.payOpen
    });
  }

  componentDidMount(){
		this.request();
    this.paymentRequest();
  }
  
  // get placed orders data from database
	request = async () => {
		const response = await fetch(`http://localhost:5000/orders/status/Placed`)
		.then(result=>result.json())
		.then(items=>this.setState({items}, () => 
			console.log('orders fetched', items),
			this.setState({count : Object.keys(items).length})
		))
		
		// this.loadData();
	}

  // get payments data from database
	paymentRequest = async () => {
		const response = await fetch(`http://localhost:5000/payment/all`)
		.then(result=>result.json())
		.then(paymentItems=>this.setState({paymentItems}, () => 
			console.log('payments fetched', paymentItems)
		))
		
		// this.loadData();
	}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

 
  // post a payment
  sendPayment(){
    
    this.setState({
      amount : 782300,
      payOpen: !this.state.payOpen
    }, () => {     

      // create a new payment 
      fetch('http://localhost:5000/payment/create/', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "amount" : this.state.amount
        })
        }).then(res=>res.json())
        .then(res => console.log(res));

        alert('Payment Successful !');        
    });    
    
  }



  render() {

    var orders =this.state.items.map((al,i)=>{            
      return(
          <OrderItem key={i} item={al} setModal = {this.setModal} setPayModal = {this.setPayModal}/>
        )
    })

    var payment =this.state.paymentItems.map((al,i)=>{            
      return(
          <PaymentItem key={i} item={al}/>
        )
    })

    return (
      <div>

          <Modal isOpen={this.state.modal} toggle={this.setModal} className={this.props.className}>
            <ModalHeader toggle={this.setModal}>Order Details</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.setModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.setModal}>Cancel</Button>
            </ModalFooter>
          </Modal>




        <Modal isOpen={this.state.payOpen} toggle={this.setPayModal} className={this.props.className}>
        <ModalHeader toggle={this.setPayModal}>Payment Details</ModalHeader>
        <ModalBody>
          <FormGroup row>
              <Label for="exampleEmail" sm={2}>Payment Method</Label>
              <Col sm={10}>
                <Input id="payType" placeholder="Card voucher etc" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>Voucher No / Card No</Label>
              <Col sm={10}>
                <Input id="cardNo" placeholder="Enter the number" />
              </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.sendPayment.bind(this)}>Pay</Button>{' '}
          {/* ()=>{ this.sendPayment.bind(this); this.setPayModal()} */}
          <Button color="secondary" onClick={this.setPayModal}>Cancel</Button>{' '}
        </ModalFooter>
        </Modal>




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
              Successful Payments
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
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                  {orders}                   
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="2">
          <Row>
              <Col sm="12">
                <Table borderless hover responsive size="sm">
                  <thead>
                    <tr>                      
                      <th>PaymentID</th>
                      <th>Amount</th>
                    </tr>
                  </thead>

                  <tbody>
                  {payment}                   
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