import React, {Component} from 'react';
import { Button } from 'reactstrap';

class OrderItem extends Component {

    constructor(props){
        super(props);
        
        this.state={
            item:props.item 
        }
    }

    render() {
        return (  
            <tr>
                <td>{this.state.item.orderId}</td>
                <td>{this.state.item.orderDate}</td>  
                <td>{this.state.item.amount}</td>              
                <td>
                        <Button color="success"  onClick={this.props.setModal}>View</Button>&nbsp;&nbsp;&nbsp;                            
                        <Button color="danger" onClick={() => {this.props.payNow(this.state.item.orderId, this.state.item.amount)}}>Pay Now</Button>                            
                </td>
            </tr>  
        )
    }
}

export default OrderItem;