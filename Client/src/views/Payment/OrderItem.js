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
                <td>45000</td>              
                <td>
                        <Button color="success" onClick={this.props.setModal}>View</Button>&nbsp;&nbsp;&nbsp;                            
                        <Button color="danger" onClick={this.props.setPayModal}>Pay Now</Button>                            
                </td>
            </tr>  
        )
    }
}

export default OrderItem;