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
                   //   p: JSON.parse(localStorage.getItem("orderitemarr")), 
            orderItems :[]

           
         }
         console.log(this.state.p);
    }
   
  componentDidMount() {
     // console.log(localStorage.getItem("orderitemarr"));  
      var getOrderItems = JSON.parse(localStorage.getItem("orderitemarr")) ;
   //   console.log('orderitems'+orderitems);
     // var arr = orderitems.split(",");
     var arr= [];
      var i= 0;
      for(i=0; i<getOrderItems.length; i++){
   //     for( var orderref in getOrderItems ){
          var itemref=getOrderItems[i]; 
    //      var itemref = orderref[];
    //      console.log(orderref);
console.log('itemref'+itemref);
    
        axios
        .get("http://localhost:5000/orderItems/"+itemref)
        .then(res => {
        //  arr.push(res.data);
        //  console.log('arrInFor '+arr);
        // let item = this.setState({ orderItems:arr});;
          console.log(res.data);
         this.setState(prevState => ({
          orderItems: [...prevState.orderItems,res.data]
        }))
       //  console.log('itmIFor '+item);
        // let item = this.state.orderItems[orderref];
        //   console.log(arr);
       //   this.setState({ orderItems: [res.data] });
        //  console.log(orderItems)

        })
        .catch(err => {
          console.log(err);
        });
      
    
      }
    
  }

  render() {

    console.log('in Render '+this.state.orderItems);
    return(
        <div className="container">
        <h4>ORDER ITEMS</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead className="thead-dark">
            <tr>
              <th>Item Name</th>
            </tr>
          </thead>
          <tbody>
            {
              [this.state.orderItems].map(function(exp){
                console.log(exp)
                return  
                <tr>
              
                  <td >{exp.name}</td>
                  
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