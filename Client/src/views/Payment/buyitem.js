import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class BuyItem extends Component {

    constructor(props){
        super(props);
        
        this.state={
            item:props.item
        }
    }

    render() {
        return (  
            <div>
            <Label>{this.state.item.name} </Label>     <br/>   
            </div>
        )
    }
}

export default BuyItem;