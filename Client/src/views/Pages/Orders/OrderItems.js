import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";

class OrderItems extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item,
        //date: date
    }

    // var today =Date.now,
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();



    console.log('Hello form the orderitems component');

// console.log(this.state.date);
}

  render() {
      if(this.state.item.status=="Pending"){
    return (
        <tr>
                    <td>{this.state.item.orderId}</td>
                    <td>{this.state.item.constructorId}</td>
                    <td>{this.state.item.orderDate}</td>
                    <td>{this.state.item.approvedDate}</td>
                    <td>{this.state.item.approvedDate}</td>
                    <td> 
                    <Badge color="warning">{this.state.item.status}</Badge>
                    </td>
        </tr>
    )}
    else if(this.state.item.status=="Approved"){
        return(
    <tr>
        <td>{this.state.item.orderId}</td>
        <td>{this.state.item.constructorId}</td>
        <td>{this.state.item.orderDate}</td>
        <td>{this.state.item.approvedDate}</td>
        <td>{this.state.item.rejectedDate}</td>
        <td> 
        <Badge color="success">{this.state.item.status}</Badge>
        </td>
    </tr>

        )}
        else if(this.state.item.status=="Declined"){
            return(
        <tr>
            <td>{this.state.item.orderId}</td>
            <td>{this.state.item.constructorId}</td>
            <td>{this.state.item.orderDate}</td>
            <td>{this.state.item.rejectedDate}</td>
            <td>{this.state.item.approvedDate}</td>
            <td> 
            <Badge color="danger">{this.state.item.status}</Badge>
            </td>
        </tr>
    
            )}
            else if(this.state.item.status=="Placed"){
                return(
            <tr>
                <td>{this.state.item.orderId}</td>
                <td>{this.state.item.constructorId}</td>
                <td>{this.state.item.orderDate}</td>
                <td>{this.state.item.approvedDate}</td>
                <td>{this.state.item.approvedDate}</td>
                <td> 
                <Badge color="primary">{this.state.item.status}</Badge>
                </td>
            </tr>
        
                )}
        else return null;
  }
}

export default OrderItems;