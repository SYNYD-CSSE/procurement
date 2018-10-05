import React, {Component} from 'react';

class PaymentItem extends Component {

    constructor(props){
        super(props);
        
        this.state={
            item:props.item 
        }
    }

    render() {
        return (  
            <tr>
                <td>{this.state.item.paymentid}</td>
                <td>{this.state.item.orderid}</td>
                <td>{this.state.item.amount}</td>   
            </tr>  
        )
    }
}

export default PaymentItem;