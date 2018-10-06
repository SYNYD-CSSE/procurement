import React, { Component } from "react";
import axios from "axios";
import {Table } from "reactstrap";
import OrderItem from "./OrderItem"

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;

class ViewOrderItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
         //   p: localStorage.getItem("orderitemarr"), 
            orderItems :[]
         }
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
         
         this.setState(prevState => ({
          orderItems: [...prevState.orderItems, res.data]
        }))
        console.log(this.state.orderItems);
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
    var array = this.state.orderItems;
    var tabRow = "";

    if (array) {
      tabRow = array.map((item, i) => {
        console.log(item);

        return (
          <OrderItem
            key={i}
            id={item._id}
            name={item.name}
            quantity={item.quantity}
          />
        );
      });
    } else {
      tabRow = " ";

      return tabRow;
    }


    return(
        <div className="container">
        <h4>ORDER ITEMS</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Item Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{tabRow}</tbody>
            </Table>
          </div>          

    )
    
    
  }
}
 
export default ViewOrderItems;