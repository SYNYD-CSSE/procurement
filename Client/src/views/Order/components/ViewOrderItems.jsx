import React, { Component } from "react";
import axios from "axios";
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    FormGroup,
    Label,
    Input,
    Table
  } from "reactstrap";
  import alertify from "alertifyjs";

class ViewOrderItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p: localStorage.getItem("orderitemarr"), 
            orderItems :[]
         }
    }
   
  componentWillMount() {
     // console.log(localStorage.getItem("orderitemarr"));  
      var orderitems =  localStorage.getItem("orderitemarr");
   //   console.log('orderitems'+orderitems);
      var arr = orderitems.split(",");
      var i= 0;
      for(i=0; i<arr.length; i++){
          var itemref=arr[i]; 
//console.log('itemref'+itemref);
        axios
        .get("http://localhost:5000/orderItems/"+itemref)
        .then(res => {
          this.setState({ orderItems: res.data });
          console.log(this.state.orderItems);
        })
        .catch(err => {
          console.log(err);
        });
      } 
    
  }

  render() {
    
    return(
        <div className="container">
        <h4>ORDER ITEMS</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead className="thead-dark">
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
          {
            this.state.orderItems
            .map((item, i) => {
  
                  <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                  </tr>                
            })
          }
            </tbody>
            </Table>
          </div>          

    )
    
    
  }
}
 
export default ViewOrderItems;