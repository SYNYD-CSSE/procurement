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
    this.updateOrderToClosed = this.updateOrderToClosed.bind(this)
    this.payNow = this.payNow.bind(this)
    this.sendPayment = this.sendPayment.bind(this)
    this.showDetails = this.showDetails.bind(this)
    
    this.state = {
      activeTab: '1',
      modal: false,
      payOpen: false,
      items : [],
      count : 0,
      amount : 0,
      paymentItems : [],

      orderId: '',
      paymethod: '',
      payno: '',

      constructor: '',
      gotorders: []
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
    })    
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
	}

  // get payments data from database
	paymentRequest = async () => {
		const response = await fetch(`http://localhost:5000/payment/all`)
		.then(result=>result.json())
		.then(paymentItems=>this.setState({paymentItems}, () => 
			console.log('payments fetched', paymentItems)
		))
	}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  //Update the order state to closed
  updateOrderToClosed(orderId){
    fetch('http://localhost:5000/orders/closed/' + orderId, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        })
        .then(res=>res.json())
        .then(res => console.log(res))
  }
 
  // post a payment
  sendPayment(){    
    this.setState({
      paymethod : document.getElementById('paymethod'),
      payno : document.getElementById('payno'), 
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
            "orderid" : this.state.orderId,
            // "paymethod" : this.state.paymethod,
            // "payno" : this.state.payno,           
            "amount" : this.state.amount
        })
        })
        .then(res=>res.json())
        .then(res => console.log(res))
        .then(this.updateOrderToClosed(this.state.orderId))
        alert('Payment Successful !');        
    });    
    
  }

  payNow(oid, amo){
    this.setPayModal()
    this.setState({
      orderId: oid,
      amount: amo
    })
  }

  showDetails(oid, amo, cid, gor){
    this.setModal()
    this.setState({
      orderId: oid,
      amount: amo,
      constructor: cid,
      gotorders: gor
    })
  }


  render() {

    var orders =this.state.items.map((al,i)=>{            
      return(
          <OrderItem key={i} item={al} showDetails = {this.showDetails} payNow = {this.payNow}/>
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
            <Table hover>
              <tbody>
              <tr>                                   
                  <td><b>Order ID</b></td>
                  <td><b>{this.state.orderId}</b></td>
                </tr>

                <tr>                  
                  <td><b>Amount</b></td>
                  <td><b>{this.state.amount}</b></td>
                </tr>

                <tr>                  
                  <td><b>Constructor ID</b></td>
                  <td><b>{this.state.constructor}</b></td>
                </tr>

                <tr>                  
                  <td><b>Supplier</b></td>
                  <td><b>Maga</b></td>
                </tr>

                <tr>                  
                  <td><b>Items</b></td>
                  <td><b>{this.state.gotorders[0]}</b></td>
                </tr>                
                
                </tbody>
            </Table>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.setModal}>OK</Button>{' '}
              <Button color="secondary" onClick={this.setModal}>Cancel</Button>
            </ModalFooter>
          </Modal>



        
        <Modal isOpen={this.state.payOpen} toggle={this.setPayModal} className={this.props.className}>
        <ModalHeader toggle={this.setPayModal}>Payment Details</ModalHeader>
        <ModalBody>
          <FormGroup row>
              <Label sm={2}>Payment Method</Label>
              <Col sm={10}>
              <form>
                <Input id="paymethod" placeholder="Card voucher etc"/>
                </form>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Voucher No / Card No</Label>
              <Col sm={10}>
                <Input id="payno" placeholder="Enter the number" />
              </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.sendPayment}>Pay</Button>{' '}
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
                      <th>Supplier</th>
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
                      <th>OrderID</th>
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