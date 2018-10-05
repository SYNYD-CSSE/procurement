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
            <td>
                <div className="form-group">
                    <input type="text" className="form-control" id="usr"/>
                </div>
            </td>
            <td>
            <div className="form-group">
                    <input type="text" className="form-control" id="usr"/>
                </div>
            </td>
            <td>
            <div className="form-group">
                    <input type="text" className="form-control" id="usr"/>
                </div>
            </td>
            <td>
            <div className="form-group">
                    <input type="text" className="form-control" id="usr"/>
                </div>
            </td>
            </tr>
          );
        
      }
}
 
export default SentQuatation;

