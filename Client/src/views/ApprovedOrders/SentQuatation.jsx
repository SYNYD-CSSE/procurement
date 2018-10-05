import React, { Component } from "react";
class SentQuatation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  
    
      render() {
        return (
            <tr>
             <td>
             {this.props.name} 
             
            </td>
            <td>
            {this.props.quantity}
              
            </td>
            </tr>
          );
        
      }
}
 
export default SentQuatation;