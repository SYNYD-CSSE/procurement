import React,{Component} from 'react';
import {Route } from "react-router-dom";

import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import classnames from 'classnames';
import OrderItems from './OrderItems';
import RejectedItems from './RejectedItems';
import PendingItems from './PendingItems';
import ApprovedItems from './ApprovedItems';

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));


class OrderDetails extends Component {

    
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          orders:[],
          OrderId:null
        }
        this.sucess=this.sucess.bind(this)
        this.reject=this.reject.bind(this)
      }

      componentWillMount(){

        // fetch(`/api/prescriptions/${this.state.user.pid}/${this.state.user.bht}`)
   
        fetch(`/orders`,{
          headers: {
            'Authorization': token
          }
        })
   
           .then(res=>res.json())
            .then(orders=> this.setState({orders},()=> console.log(orders)));
   
     }

     rowId=(dataFromChild)=>{
        this.setState({OrderId:dataFromChild})
        console.log(this.state.OrderId);
     }
     sucess(){
      var ApprovedDate=new Date();
      const state={
        status:'Approved'
          }
 
              fetch(`/orders/abc/${this.state.OrderId}`,{
                      method:'PUT',
                      headers:{
                          'Accept':'application/json,text/plain,*/*',
                          'Content-Type': 'application/json',
                          'Authorization': token
  
                      },
                          body: JSON.stringify(state)
  
                  })
                

                      


     }

     reject(){
      
      const ostate={
        status:'Declined'
          }
 
              fetch(`/orders/abc/${this.state.OrderId}`,{
                      method:'PUT',
                      headers:{
                          'Accept':'application/json,text/plain,*/*',
                          'Content-Type': 'application/json',
                          'Authorization': token
                      },
                          body: JSON.stringify(ostate)
  
                  })

                      
     }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab:tab,
            orders:[]
          });
    
            fetch(`/orders`)
               .then(res=>res.json())
                .then(orders=> this.setState({orders},()=> console.log(orders)));
       
     
        }
      }
        
  
    render(){
  
      var orderItems = this.state.orders.map((orders,i)=>{

        return(
          <OrderItems key={i} item={orders}/>
        )
      });


  
      var rejectedItems =this.state.orders.map((orders,i)=>{

        return(
          <RejectedItems key={i} item={orders}/>
        )
      });


      var pendingItems =this.state.orders.map((orders,i)=>{

        return(
          <PendingItems key={i} item={orders} orderId={this.rowId}/>
        )
      });


      var approvedItems =this.state.orders.map((orders,i)=>{

        return(
          <ApprovedItems key={i} item={orders}/>
        )
      });

            return(
  
            <div className='main_orderdetails'>
     
            <Nav tabs>
            <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
            >All Orders</NavLink>
            </NavItem>
            <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
            >Pending Orders</NavLink>
            </NavItem>
            <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
            >Approved Orders</NavLink>
            </NavItem>
            <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggle('4'); }}
            >Rejected Orders</NavLink>
            </NavItem>
            </Nav>
          

          <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
        
                <Table hover responsive size="sm">
                  <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Constructor ID</th>
                    <th>Date Added</th>
                    <th>Date Approved</th>
                    <th>Date Rejected</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {orderItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>
              </TabPane>


              <TabPane tabId="2">
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <nav>
                <Route render={({ history}) => (
                          <button
                            type='button'
                            className="btn btn-lg btn-primary m-3"
                            onClick={() => { history.push(`/orders/items/${this.state.OrderId}`) }}
                          >
                            Go To Details
                          </button>
                        )} />
                <button   className="btn btn-lg btn-success m-3" onClick={this.sucess} >Approve Order</button>
                <button   className="btn btn-lg btn-danger m-1" onClick={this.reject}>Reject Order</button>
                <h3>Order No : {this.state.OrderId}</h3>
                  </nav>
                <Table hover responsive size="sm">
                  <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Constructor ID</th>
                    <th>Date Added</th>
                    {/* <th>Date Approved</th>
                    <th>Date Rejected</th> */}
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {pendingItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>

              </TabPane>



              <TabPane tabId="3">
              
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <Table hover responsive size="sm">
                  <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Constructor ID</th>
                    <th>Date Added</th>
                    <th>Date Approved</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {approvedItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>


              </TabPane>
              <TabPane tabId="4">

                    <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <Table hover responsive size="sm">
                  <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Constructor ID</th>
                    <th>Date Added</th>
                    <th>Date Rejected</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {rejectedItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>

              </TabPane>
            </TabContent>

                
          
              </div>
            );
       }
  }
  
  
  export default OrderDetails; 	
  