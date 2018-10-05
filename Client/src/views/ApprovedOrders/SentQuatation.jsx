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
                    <input type="text" className="form-control" name="manufacturer"/>
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input type="text" className="form-control" name="category"/>
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input type="number" className="form-control" name="uprice"/>
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input type="number" className="form-control" name="tprice"/>
                </div>
            </td>
            </tr>
          );
        
      }
}
 
export default SentQuatation;

